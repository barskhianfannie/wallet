'use client';
import { createClient, configureChains, WagmiConfig, WagmiConfigProps } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import {
  mainnet,
  bsc,
  avalanche,
  fantom,
  arbitrum,
  polygon,
  optimism,
  evmos,
} from '@wagmi/chains';
import {ethers} from 'ethers';
import { InjectedConnector } from 'wagmi/connectors/injected'

const { chains } = configureChains(
  [mainnet, bsc, avalanche, fantom, arbitrum, polygon, optimism, evmos],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY as string }),
    publicProvider(),
  ],
);
const network = 'homestead'
const provider = ethers.getDefaultProvider(network, {
  alchemy: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
})

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  connectors: [
    new InjectedConnector( { options: {
      shimDisconnect: false,
    }}),
  ],
});
function Providers({children}:{children:React.ReactNode}) {
  return (
    <WagmiConfig client={wagmiClient}>
      {children}
    </WagmiConfig>
  );
}
export default Providers;
