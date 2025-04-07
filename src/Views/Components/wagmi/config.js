

import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet } from '@reown/appkit/networks'
import { vTestnet } from './chain'

// Get projectId from https://cloud.reown.com
export const projectId = '51b014ab90e763671cebe66ea256b0ab'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [vTestnet]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig