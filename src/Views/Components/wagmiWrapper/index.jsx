import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import { mainnet } from '@reown/appkit/networks';
import React from 'react';
import { cookieToInitialState, WagmiProvider } from 'wagmi';
import { projectId, wagmiAdapter } from '../wagmi/config';
import { vTestnet } from '../wagmi/chain';

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error('Project ID is not defined');
}

// Set up metadata
const metadata = {
  name: 'AICM Store',
  description: 'AICM is an AI-driven e-commerce marketplace powered by blockchain. It connects crypto communities to buy, sell, and list physical goods, digital products, and services, offering advanced AI tools and secure transactions.',
  url: 'https://aicm.store/', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
};

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [vTestnet],
  defaultNetwork: vTestnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: false, // default to true
    socials: false, //['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
    emailShowWallets: true, // default to true
  },
  allWallets: 'SHOW', // default to SHOW
  themeVariables: {
    '--w3m-font-family': '__Figtree_7d5794',
    '--w3m-accent': '#fe8b00',
    '--w3m-color-mix': '#131313',
    '--w3m-color-mix-strength': 40,
    '--w3m-font-size-master': '',
    '--w3m-border-radius-master': '2.2px',
    '--w3m-z-index': 9999,
  }
});

function WagmiWrapper({ children, cookies }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies);

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default WagmiWrapper;
