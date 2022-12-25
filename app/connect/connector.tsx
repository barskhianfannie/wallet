import { Connector, Chain } from 'wagmi'
import Providers from '../providers'
import { Provider } from 'react'

export class FractyWalletConnector extends Connector{
 readonly id = 'fracty'
 readonly name = 'Fracty Wallet'
 readonly ready = true

 provider?: Provider<any>

 constructor(config: { chains?: Chain[]; options: any }) {
 super(config)
 }

 async getProvider() {
 if (!this.provider) {
//  this.provider = new WalletProvider(this.options)
 }
 return this.provider
 }

 // Implement other methods
 // connect, disconnect, getAccount, etc.

 async connect(config?: { chainId?: number | undefined } | undefined): Promise<any> {
  return null
 }

 async disconnect(): Promise<void> {
   
 }

 async getAccount(): Promise<`0x${string}`> {
   return `0x`
 }

 async getChainId(): Promise<number> {
   return 1
 }

 async getSigner(config?: { chainId?: number | undefined } | undefined): Promise<any> {
   
 }

 async isAuthorized(): Promise<boolean> {
   return false
 }

 protected onDisconnect(error: Error): void {
   return
 }

 protected onAccountsChanged(accounts: `0x${string}`[]): void {
   
 }

 protected onChainChanged(chain: string | number): void {
   
 }
}
