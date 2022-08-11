import React from 'react'
import EthLogo from '../EthLogo'
import NetworkInfo from './NetworkInfo'
import Title from './Title'

export default function ConnectionBar(props:React.HTMLProps<HTMLButtonElement>) {
  return (
      <div className='md:order-1'>
      
         <Title>choose wallet</Title>
    <button {...props as any} className='w-full  rounded-lg bg-[#ccc] p-2 md:pl-16 md:px-6 md:py-6 text-left flex items-center  whitespace-nowrap mt-2'>
            
            <EthLogo/>
              
                <NetworkInfo address='0x1A67e170cA7d06c...' network='Ethereum'/>

            <p className=' ml-1 md:ml-16 self-start text-[#0FB900] bg-[#BDDDC6] p-1'>connected</p>
                
    </button>
    </div>
  )
}
