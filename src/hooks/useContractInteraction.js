import { useState, useEffect } from 'react';
import { useReadContract, useWriteContract } from 'wagmi';
import { useAccount } from 'wagmi';
import { waitForTransactionReceipt } from '@wagmi/core';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import {
    contractAddress,
    contractAbi,
    priceFunctionMap,
    bookingFunctionMap
} from '../utils/contractUtils';
import { config } from '../Views/Components/wagmi/config';

export const useContractInteraction = () => {
    const [loading, setLoading] = useState(false);
    const [soldSlots, setSoldSlots] = useState(0);
    const [trx, setTrx] = useState(0);
    const [transactionReceipt, setTransactionReceipt] = useState(null);
    const [prices, setPrices] = useState({
        standard: 0,
        premium: 0,
        degen: 0
    });

    // Add loading states for each value
    const [loadingStates, setLoadingStates] = useState({
        totalTickets: true,
        standardPrice: true,
        premiumPrice: true,
        degenPrice: true
    });

    // Specific price loading states
    const [priceLoadingStates, setPriceLoadingStates] = useState({
        standard: true,
        premium: true,
        degen: true
    });

    const { address, isConnected } = useAccount();
    const { writeContractAsync } = useWriteContract();

    // Read contract for total tickets
    const { data: SaleStatus, isLoading: isLoadingSaleStatus } = useReadContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: "salesOpen",
    });
    const { data: totalTicketsData, refetch: refetchTotalTickets, isLoading: isLoadingTotalTickets } = useReadContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: "getTotalTickets",
    });

    // Read contract for standard price
    const { data: standardPriceData, isLoading: isLoadingStandardPrice } = useReadContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: "standardPrice",
        enabled: isConnected,
    });

    // Read contract for premium price
    const { data: premiumPriceData, isLoading: isLoadingPremiumPrice } = useReadContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: "premiumPrice",
        enabled: isConnected,
    });

    // Read contract for degen price
    const { data: degenPriceData, isLoading: isLoadingDegenPrice } = useReadContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: "degenPrice",
        enabled: isConnected,
    });

    // Update general loading states
    useEffect(() => {
        setLoadingStates({
            totalTickets: isLoadingTotalTickets,
            standardPrice: isLoadingStandardPrice,
            premiumPrice: isLoadingPremiumPrice,
            degenPrice: isLoadingDegenPrice
        });

        // Update price-specific loading states
        setPriceLoadingStates({
            standard: isLoadingStandardPrice,
            premium: isLoadingPremiumPrice,
            degen: isLoadingDegenPrice
        });
    }, [isLoadingTotalTickets, isLoadingStandardPrice, isLoadingPremiumPrice, isLoadingDegenPrice]);

    // Update sold slots when contract data changes
    useEffect(() => {
        if (totalTicketsData) {
            setSoldSlots(parseInt(totalTicketsData.toString()));
        }
    }, [totalTicketsData]);

    // Update prices when contract data changes
    useEffect(() => {
        const newPrices = { ...prices };

        if (standardPriceData) {
            newPrices.standard = parseFloat(ethers.formatEther(standardPriceData.toString()));
        }

        if (premiumPriceData) {
            newPrices.premium = parseFloat(ethers.formatEther(premiumPriceData.toString()));
        }

        if (degenPriceData) {
            newPrices.degen = parseFloat(ethers.formatEther(degenPriceData.toString()));
        }

        setPrices(newPrices);
    }, [standardPriceData, premiumPriceData, degenPriceData]);

    // Get transaction receipt
    const getReceipt = async (hash) => {
        try {
            const receipt = await waitForTransactionReceipt(config, {
                hash,
            });
            setTransactionReceipt(receipt);
            return receipt;
        } catch (error) {
            return null;
        }
    };

    // Modified bookPackage function to return transaction hash without duplicate toasts
    const bookPackage = async (packageType) => {
        if (!isConnected) {
            toast.error('Please connect your wallet first.');
            return { success: false, transactionHash: null };
        }

        setLoading(true);

        try {
            // Get the appropriate booking function based on selected package
            const bookingFunctionName = bookingFunctionMap[packageType];

            // Use the price from the state
            const packagePrice = prices[packageType];

            // Convert price to wei
            const valueInWei = ethers.parseEther(packagePrice.toString());

            // Call the booking function
            const hash = await writeContractAsync({
                address: contractAddress,
                abi: contractAbi,
                functionName: bookingFunctionName,
                value: valueInWei,
            });
            
            // Set state and store the hash
            setTrx(hash);
            
            // Initial processing toast instead of "Transaction submitted"
            toast.info('Processing your payment...', {
                position: "top-right",
                autoClose: 3000,
                theme: "dark",
            });

            // Wait for transaction to be confirmed
            const receipt = await waitForTransactionReceipt(config, {
                hash,
            });
            
            setTransactionReceipt(receipt);

            if (receipt.status === 'success' || receipt.status === 1 || receipt.status === '0x1') {
                // NO SUCCESS TOAST HERE - will be shown in PaymentInformationScreen only
                refetchTotalTickets(); // Refresh the slot count
                return { success: true, transactionHash: hash };
            } else {
                toast.error('Transaction failed.');
                return { success: false, transactionHash: hash };
            }
        } catch (error) {
            toast.error('Payment process failed. Please try again.');
            return { success: false, transactionHash: null };
        } finally {
            setLoading(false);
        }
    };

    // Check if any data is still loading
    const isDataLoading = Object.values(loadingStates).some(state => state === true);

    // Check if any price is still loading
    const isPriceLoading = Object.values(priceLoadingStates).some(state => state === true);
    const maxSlots = 200;

    return {
        loading,
        soldSlots,
        prices,
        bookPackage,
        refetchTotalTickets,
        isDataLoading,
        loadingStates,
        priceLoadingStates,
        isPriceLoading,
        isLoadingTotalTickets,
        SaleStatus,
        isLoadingSaleStatus,
        maxSlots,
        trx,
        getReceipt,
        transactionReceipt
    };
};

export default useContractInteraction;