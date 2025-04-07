import React, { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { toast, Bounce } from 'react-toastify';
import { useAccount, useBalance, useSwitchChain } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';

import { waitForTransactionReceipt } from '@wagmi/core';
import { FormContainer, NextButton } from '../RegistrationForm/styles';
import FullScreenLoader from '../loader';
import useContractInteraction from '../../../hooks/useContractInteraction';
import axios from 'axios'; // Make sure to install axios if not already installed
import { config } from '../wagmi/config';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // Change this to your actual backend URL
axios.defaults.baseURL = API_BASE_URL;

const PaymentInformationScreen = ({ personalDetails, selectedPackage, onSuccess }) => {
    const { loading, prices, bookPackage, priceLoadingStates, maxSlots, soldSlots, SaleStatus } = useContractInteraction();
    const { chains, switchChain } = useSwitchChain();
    const { open } = useAppKit();
    const { address, isConnected, chain } = useAccount();

    const [paymentLoader, setPaymentLoader] = useState(false);
    const [getBalance, setBalance] = useState(0.0);

    // Save to local storage function
    const saveToLocalStorage = (data) => {
        try {
            localStorage.setItem('ticketPurchaseData', JSON.stringify(data));
            return true;
        } catch (error) {
            console.error("Error saving to local storage:", error);
            return false;
        }
    };

    // Save to MongoDB function
    const saveToDatabase = async (data) => {
        try {
            const response = await axios.post('/api/save-ticket-purchase', data);
            return response.data;
        } catch (error) {
            console.error("Error saving to database:", error);
            return null;
        }
    };

    // Updated updateTransactionStatus function with complete error handling
    const updateTransactionStatus = async (transactionId, status, receipt = null) => {
        // console.log(`Attempting to update transaction ${transactionId} to status ${status}`);

        try {
            // Prepare receipt data to handle BigInt serialization
            let processedReceipt = null;
            if (receipt) {
                // Convert BigInt values to strings
                processedReceipt = JSON.parse(
                    JSON.stringify(receipt, (key, value) =>
                        typeof value === 'bigint' ? value.toString() : value
                    )
                );
            }

            // Logging the request payload
            // console.log('Update request payload:', {
            //     transactionId,
            //     status,
            //     receipt: processedReceipt ? 'processed receipt object' : null
            // });

            // Make the API call with full URL for clarity
            const response = await axios({
                method: 'post',
                url: `${API_BASE_URL}/api/update-transaction`,
                data: {
                    transactionId,
                    status,
                    receipt: processedReceipt
                },
                headers: {
                    'Content-Type': 'application/json'
                },
                timeout: 10000 // 10 second timeout
            });

            // console.log("Full API response:", response);
            return response.data;
        } catch (error) {
            console.error("Error updating transaction status:", error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Error response data:", error.response.data);
                console.error("Error response status:", error.response.status);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("Error request:", error.request);
                console.error("Is your backend server running?");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }

            return null;
        }
    };

    // Direct verification approach - this function can be called to check if the update worked
    const verifyTransactionStatus = async (transactionId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/ticket-purchase/${transactionId}`);
            // console.log("Transaction verification response:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error verifying transaction:", error);
            return null;
        }
    };

    // Use to get user balance
    const userChainBalance = useBalance({
        address,
        watch: true,
        onError(error) {
            console.log("Error fetching balance:", error);
        },
    });

    // Update balance when user balance changes
    useEffect(() => {
        if (userChainBalance?.data?.formatted) {
            setBalance(userChainBalance.data.formatted);
        }
    }, [userChainBalance]);

    const handlePayment = async () => {
        setPaymentLoader(true);

        if (!isConnected) {
            toast.error('Please connect your wallet first.');
            setPaymentLoader(false);
            return;
        }

        const packagePrice = prices[selectedPackage];

        if (getBalance < packagePrice) {
            toast.error('Insufficient balance in your wallet. Please add more ETH to your wallet.', {
                position: "top-right",
                autoClose: 3000,
                theme: "dark",
                transition: Bounce,
            });
            setPaymentLoader(false);
            return;
        }

        try {
            // Prepare data object with all information we want to save
            const purchaseData = {
                personalDetails,
                selectedPackage,
                price: packagePrice,
                walletAddress: address,
                purchaseDate: new Date().toISOString(),
                transactionStatus: 'pending',
                transactionHash: null,
            };

            // Save to local storage first (in case of network issues)
            saveToLocalStorage(purchaseData);

            // Use the bookPackage function from the hook which now returns { success, transactionHash }
            const { success, transactionHash } = await bookPackage(selectedPackage);

            if (success && transactionHash) {
                // console.log("Transaction hash:", transactionHash);

                // Update purchase data with transaction hash
                purchaseData.transactionHash = transactionHash;
                purchaseData.transactionUrl = `https://sepolia.etherscan.io/tx/${transactionHash}`;

                // Save updated data to local storage
                saveToLocalStorage(purchaseData);
                // console.log('Data to be saved to MongoDB:', purchaseData);

                // Save to database
                const dbResponse = await saveToDatabase(purchaseData);

                if (dbResponse && dbResponse.success) {

                    // toast.info('Processing your payment...!', {
                    //     position: "top-right",
                    //     autoClose: 3000,
                    //     theme: "dark",
                    //     transition: Bounce,
                    // });
                }

                // Wait for transaction receipt and update status
                // Updated transaction receipt handling section for PaymentInformationScreen.js

                try {
                    const receipt = await waitForTransactionReceipt(config, { hash: transactionHash });
                    
                    // Safely check transaction status
                    if (receipt && (receipt.status === 'success' || receipt.status === 1 || receipt.status === '0x1')) {
                        // Update transaction status in database
                      
                        // After updating data in MongoDB, verify it was updated correctly
                        const verifyTransaction = async () => {
                            const verificationResult = await verifyTransactionStatus(transactionHash);
                            if (verificationResult && verificationResult.success) {
                                const verifiedStatus = verificationResult.data.transactionStatus;
                               
                                if (verifiedStatus === 'completed') {
                                    toast.success('You will recieve your confirmation email shortly.', {
                                        position: "top-right",
                                        autoClose: 3000,
                                        theme: "dark",
                                        transition: Bounce,
                                    });
                                } else {
                                    // console.log("Status verification failed - still showing as", verifiedStatus);
                                    toast.warning('Payment processed but status update may be delayed.', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        theme: "dark",
                                        transition: Bounce,
                                    });
                                }
                            } else {
                                console.error("Verification failed", verificationResult);
                            }
                        };

                        // Try direct database update - using simpler approach first
                        try {
                            // Use a simpler version of the receipt without BigInt values
                            const simplifiedReceipt = {
                                blockHash: receipt.blockHash,
                                blockNumber: receipt.blockNumber ? receipt.blockNumber.toString() : '',
                                status: receipt.status ? (typeof receipt.status === 'bigint' ? receipt.status.toString() : receipt.status) : '',
                                transactionHash: receipt.transactionHash
                            };

                            const updateResponse = await updateTransactionStatus(transactionHash, 'completed', simplifiedReceipt);

                            // If the update was successful
                            if (updateResponse && updateResponse.success) {
                                toast.success('Payment confirmed successfully!', {
                                    position: "top-right",
                                    autoClose: 3000,
                                    theme: "dark",
                                    transition: Bounce,
                                });

                                // Verify the update after 1 second
                                setTimeout(verifyTransaction, 1000);
                            } else {
                                console.error("Failed to update transaction status");

                                // Try an alternative approach - direct status update without receipt
                                // console.log("Trying alternative update approach...");
                                const alternativeUpdate = await updateTransactionStatus(transactionHash, 'completed', null);
                                // console.log("Alternative update response:", alternativeUpdate);

                                if (alternativeUpdate && alternativeUpdate.success) {
                                    toast.success('Payment confirmed!', {
                                        position: "top-right",
                                        autoClose: 3000,
                                        theme: "dark",
                                        transition: Bounce,
                                    });
                                } else {
                                    // Last resort - retry after delay
                                    setTimeout(async () => {
                                        // console.log("Last resort retry...");
                                        const lastResort = await updateTransactionStatus(transactionHash, 'completed', null);
                                        // console.log("Last resort response:", lastResort);

                                        setTimeout(verifyTransaction, 1000);
                                    }, 2000);

                                    toast.warning('Payment successful, tracking info updating...', {
                                        position: "top-right",
                                        autoClose: 3000,
                                        theme: "dark",
                                        transition: Bounce,
                                    });
                                }
                            }
                        } catch (updateError) {
                            console.error("Error in update logic:", updateError);
                            toast.warning('Payment recorded but status update encountered an issue.', {
                                position: "top-right",
                                autoClose: 5000,
                                theme: "dark",
                                transition: Bounce,
                            });
                        }

                        // Update local storage status
                        purchaseData.transactionStatus = 'completed';
                        purchaseData.receipt = {
                            blockHash: receipt.blockHash,
                            transactionHash: receipt.transactionHash,
                            status: 'completed'
                        };
                        saveToLocalStorage(purchaseData);

                        // Move to success screen
                        onSuccess();
                    } else {
                        // Update transaction status to failed
                        await updateTransactionStatus(transactionHash, 'failed');
                        purchaseData.transactionStatus = 'failed';
                        saveToLocalStorage(purchaseData);

                        toast.error('Transaction failed on the blockchain.', {
                            position: "top-right",
                            autoClose: 3000,
                            theme: "dark",
                            transition: Bounce,
                        });
                    }
                } catch (receiptError) {
                    console.error("Error getting transaction receipt:", receiptError);
                    toast.warning('Transaction submitted but status is uncertain.', {
                        position: "top-right",
                        autoClose: 5000,
                        theme: "dark",
                        transition: Bounce,
                    });
                    // Still mark as potentially successful since we got the transaction hash
                    await updateTransactionStatus(transactionHash, 'pending');
                    onSuccess();
                }
            } else if (transactionHash) {
                // Case where we have a transaction hash but success is false
                purchaseData.transactionHash = transactionHash;
                purchaseData.transactionUrl = `https://sepolia.etherscan.io/tx/${transactionHash}`;
                purchaseData.transactionStatus = 'failed';

                // Save to local storage and database
                saveToLocalStorage(purchaseData);
                await saveToDatabase(purchaseData);

                toast.error('Transaction was submitted but failed. Check the blockchain explorer for details.', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "dark",
                    transition: Bounce,
                });
            } else {
                toast.error('Failed to create transaction. Please try again.', {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        } catch (error) {
            console.error("Error during payment process:", error);
            toast.error('Payment process failed. Please try again.');
        } finally {
            setPaymentLoader(false);
        }
    };

    // Get price display
    const getPriceDisplay = () => {
        if (priceLoadingStates[selectedPackage]) return "Loading...";
        return `${prices[selectedPackage]} ETH`;
    };

    return (
        <>
            <FullScreenLoader open={paymentLoader || loading} />

            <FormContainer>
                <Typography variant="h5" gutterBottom sx={{ color: '#FF7B29', mb: 2, fontWeight: 'bold' }}>
                    Payment Information
                </Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 2,
                    color: 'white'
                }}>
                    <Typography>Package selected</Typography>
                    <Typography>
                        {selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)} Package
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 3,
                    color: 'white'
                }}>
                    <Typography>Price</Typography>
                    <Typography>
                        {getPriceDisplay()}
                    </Typography>
                </Box>

                <Typography variant="body2" sx={{ color: '#FF7B29', mb: 0 }}>
                    Connect your wallet (if you haven't already) to confirm the transaction.
                </Typography>

                {!isConnected ? (
                    <NextButton
                        variant="contained"
                        fullWidth
                        sx={{ mt: 3 }}
                        onClick={() => open()}
                    >
                        Connect Wallet
                    </NextButton>
                ) : chain?.id !== chains[0]?.id ? (
                    <div>
                        {chains.map((chain) => (
                            <NextButton
                                variant="contained"
                                fullWidth
                                sx={{ mt: 3 }}
                                key={chain.id}
                                onClick={() => switchChain({ chainId: chain.id })}
                            >
                                Switch to {chain.name}
                            </NextButton>
                        ))}
                    </div>
                ) : (
                    <>
                        {SaleStatus === false || soldSlots >= maxSlots ? (
                            <NextButton
                                variant="contained"
                                fullWidth
                                sx={{ mt: 3 }}
                                disabled
                            >
                                {'Buy Ticket'}
                            </NextButton>
                        ) :

                            <NextButton
                                variant="contained"
                                fullWidth
                                sx={{ mt: 3 }}
                                onClick={handlePayment}
                                disabled={paymentLoader || loading || priceLoadingStates[selectedPackage]}
                            >
                                {paymentLoader || loading ? 'Processing...' : 'Buy Ticket'}
                            </NextButton>
                        }
                    </>
                )}
            </FormContainer>
        </>
    );
};

export default PaymentInformationScreen;