import React from 'react'
import Input from './Input'

type prop = { handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }
export default function PriceForApeice({ handleChange }: prop) {
  return (
    <div className='relative'>
      <button className='flex p-1 items-center absolute right-2 translate-y-9 z-10 bg-[#AEACAB] text-black/50'>
        ETH
        <svg className='ml-2' width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L5 5.5L9 1.5" stroke="#575655" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </button>
      <div className='-z-10 w-full'>
        <Input placeholder='0.00' label='Enter price for one piece' type='number' onChange={handleChange} />
      </div>


    </div>
  )
}
