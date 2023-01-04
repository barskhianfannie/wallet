import type { AppProps } from 'next/app';
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
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

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
    new InjectedConnector({ chains }),
  ],
});
function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
export default App;
