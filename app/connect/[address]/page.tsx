'use client';
import React from 'react'
import { useAccount, useConnect } from 'wagmi'

type PageProps = {
  params:{
  address: string;
  }
}
export const dynamicParams = true;

function WalletAddressPage({params: { address }}:PageProps) {
  const { address: wagmiAddress, connector: activeConnector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  console.log(connect)
  return (
    <>
    {isConnected && <div>Connected to {activeConnector?.name}</div>}
 
    {connectors.map((connector) => (
      <button
        disabled={!connector.ready}
        key={connector.id}
        onClick={() => connect({ connector })}
      >
        {connector.name}
        {isLoading &&
          pendingConnector?.id === connector.id &&
          ' (connecting)'}
      </button>
    ))}
    </>
  )
}

export default WalletAddressPage