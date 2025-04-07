// File: /utils/contractUtils.js
import { ethers } from 'ethers';

// Contract address 
export const contractAddress = "0x17Ce7338C355b193D5Ae774959b45773f353D848";

// Complete ABI for the contract based on the provided images
export const contractAbi = [
    // Read functions
    {
        name: "degenPrice",
        type: "function",
        inputs: [],
        outputs: [{ type: "uint256", name: "" }],
        stateMutability: "view"
    },
    {
        name: "getTicketDetails",
        type: "function",
        inputs: [],
        outputs: [{ type: "uint256", name: "" }],
        stateMutability: "view"
    },
    {
        name: "getTotalTickets",
        type: "function",
        inputs: [],
        outputs: [{ type: "uint256", name: "" }],
        stateMutability: "view"
    },
    {
        name: "getUserTickets",
        type: "function",
        inputs: [],
        outputs: [{ type: "uint256", name: "" }],
        stateMutability: "view"
    },
    {
        name: "owner",
        type: "function",
        inputs: [],
        outputs: [{ type: "address", name: "" }],
        stateMutability: "view"
    },
    {
        name: "premiumPrice",
        type: "function",
        inputs: [],
        outputs: [{ type: "uint256", name: "" }],
        stateMutability: "view"
    },
    {
        name: "standardPrice",
        type: "function",
        inputs: [],
        outputs: [{ type: "uint256", name: "" }],
        stateMutability: "view"
    },
    {
        name: "tickets",
        type: "function",
        inputs: [],
        outputs: [{ type: "uint256", name: "" }],
        stateMutability: "view"
    },
    {
        name: "userTickets",
        type: "function",
        inputs: [],
        outputs: [{ type: "uint256", name: "" }],
        stateMutability: "view"
    },
    {
        name: "salesOpen",
        type: "function",
        inputs: [],
        outputs: [{ "internalType": "bool", "name": "", "type": "bool" }],
        stateMutability: "view",
    },


    // Write functions
    {
        name: "bookDegenPackage",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "payable"
    },
    {
        name: "bookPremiumPackage",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "payable"
    },
    {
        name: "bookStandardPackage",
        type: "function",
        inputs: [],
        outputs: [],
        stateMutability: "payable"
    }
];

// Function maps for easy reference
export const priceFunctionMap = {
    'standard': 'standardPrice',
    'premium': 'premiumPrice',
    'degen': 'degenPrice'
};

export const bookingFunctionMap = {
    'standard': 'bookStandardPackage',
    'premium': 'bookPremiumPackage',
    'degen': 'bookDegenPackage'
};

// Helper to format ETH values
export const formatEthValue = (value) => {
    if (!value) return "0.0";
    return ethers.formatEther(value.toString());
};