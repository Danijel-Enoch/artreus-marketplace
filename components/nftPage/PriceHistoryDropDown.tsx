import React from 'react'
import DropDown from './DropDown'

export default function PriceHistoryDropDown() {
  return (
    <div className='mt-4'>
        <DropDown label="Price History">
          <ul className='flex bg-[#c7c7c7] w-8/12 p-2 justify-between rounded-full font-semibold'>
              <li>1h</li>
              <li>24h</li>
              <li>1w</li>
              <li>1m</li>
              <li>3m</li>
              <li className='bg-pink-600 rounded-full px-2 text-white'>1y</li>
              <li>all time</li>
          </ul>
        </DropDown>
    </div>
  )
}
