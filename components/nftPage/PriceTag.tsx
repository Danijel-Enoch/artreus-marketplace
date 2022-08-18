import React from 'react'

export default function PriceTag({highestBid,currentPrice,coinName}:{highestBid:string,currentPrice:string,coinName:string}) {
  return (
    <div className='p-4 bg-[#e4e2e2] md:w-[400px]  rounded-lg mt-4'>
        <div className='flex justify-between text-brandbrown'>
          <div><h4 className=''>Current Price </h4><span className='block font-bold'><svg
      xmlns="http://www.w3.org/2000/svg"
      className='inline mr-1'
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#A56020"
        d="M7.391.724c-.25-.25-.589-.39-.942-.39H1.667A1.333 1.333 0 00.334 1.666v4.781c0 .354.14.693.39.943l5.334 5.333a1.333 1.333 0 001.885 0l4.782-4.781a1.334 1.334 0 000-1.886L7.39.724zM3.667 5a1.334 1.334 0 11.001-2.667 1.334 1.334 0 010 2.667z"
      ></path>
    </svg>{currentPrice} {coinName}</span></div>
    <div>
     <h4>Highest Bid</h4>
     <span className='font-bold'> {highestBid} {coinName}</span>
    </div>
         
        </div>
        <div className='flex justify-center mt-4'>
          <button className='py-2 px-6 bg-brandbrown text-brandyellow rounded-md'>Connect Wallet</button>
        </div>
        
      </div>
  )
}
