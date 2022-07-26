import React from 'react'

export default function PurchaseButtons({price,coinName}:{price:string,coinName:string}) {
  return (
    <div className='bg-[#e4e2e2] w-[400px] p-4 rounded-lg mt-6 flex justify-between'>
        <button className='rounded-lg bg-brandyellow border border-black py-2 px-6 font-bold text-brandbrown'>Buy for {price} {coinName}</button>
        <button className='rounded-lg bg-[#ccc] text-[#444] py-2 px-6 font-bold'>Place Bid</button>
    </div>
  )
}

