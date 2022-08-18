import React from 'react'
import {Switch} from '@headlessui/react'
export default function MintOptionToggle({enabled,setEnabled}:{enabled:boolean,setEnabled:()=>void}) {
  return (
      <div>
           <Switch 
   checked={enabled}
   onChange={setEnabled}
   className={`bg-[#e4e2e2] w-[35px]   rounded-full flex ${enabled?'justify-start':'justify-end'}`}
   >
       <span className="sr-only">{enabled?'free minting':'buyer will pay for minting'}</span>
       <div className='bg-brandbrown p-2 rounded-full inline-block'></div>

   </Switch>

      </div>
  
  )
}
