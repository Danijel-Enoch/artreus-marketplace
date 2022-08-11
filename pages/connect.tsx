import React from 'react'
import {BinanceButton,EthereumButton,ReefButton,TelosButton} from '../components/ConnectToNetworkButtons';


export default function connect(){
  return(
    <div className='flex flex-col justify-center items-center'>
    <h2 className='font-bold text-lg my-6'>Please Select Network</h2>
  
     <ul className='grid gap-4 grid-cols-2 md:grid-cols-4'>
     
    <li><BinanceButton/></li>
    <li><EthereumButton/></li>
    <li><ReefButton/></li>
    <li><TelosButton/></li>
  </ul>
  </div>
  )
 

}
