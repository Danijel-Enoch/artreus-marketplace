import React from 'react'
import { useAppContext } from '../../contexts/AppContext'
import EthLogo from '../EthLogo'
import NetworkInfo from './NetworkInfo'
import Title from './Title'

export default function ConnectionBar(props: React.HTMLProps<HTMLButtonElement>) {
  const app = useAppContext();
  return (
    <div className='md:order-1'>
      <Title>choose wallet</Title>
      <button {...props as any} className='w-full  rounded-lg bg-[#ccc] p-2 md:pl-16 md:px-6 md:py-6 text-left flex items-center  whitespace-nowrap mt-2'>
        <EthLogo />
        <NetworkInfo address={`${app.account.slice(0, 24)}...`} network='Ethereum' />
        {app.connected ?
          <p className='ml-1 md:ml-16 self-start text-[#0FB900] bg-[#BDDDC6] p-1'>connected</p>
          :
          <p className='ml-1 md:ml-16 self-start text-[#5f1919] bg-[#de6e6e] p-1'>disconnected</p>
        }
      </button>
    </div>
  )
}
