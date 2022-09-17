import React from 'react'

export default function PriceTag({floorPrice, listingPrice, coinName, listed}) {
  return (
    <div className='p-4 bg-[#e4e2e2] md:w-[400px]  rounded-lg mt-4'>
        <div className='flex justify-between text-brandbrown'>
          <div><h4 className=''>Floor Price</h4><span className='block font-bold'><svg
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
    </svg>{floorPrice} {coinName}</span></div>
    { listed ? (<div>
     <h4>Listing Price</h4>
     <span className='font-bold'> {listingPrice} {coinName}</span>
    </div>) : null}
    
         
        </div>

        <div className='w-full mt-2'>
            <input type="number" min="0" placeholder="List Price" inputMode="decimal" name="sell" step="0.1" className='w-full h-10 rounded-md outline-none border-brandbrown border bg-[#e4e2e2] p-4'/>
         </div>
        <div className='flex justify-center mt-4'>
          { listed ? (
            <>            
                <button className='py-2 px-6 bg-brandbrown text-brandyellow rounded-md flex mr-5'>Cancel Listing</button>
                <button className='py-2 px-6 bg-brandbrown text-brandyellow rounded-md flex'>Change Price</button>
            </>
          ) : (
          <button className='py-2 px-6 bg-brandbrown text-brandyellow rounded-md flex'><span className='block font-bold mr-1'><svg
      xmlns="http://www.w3.org/2000/svg"
      className='inline mr-1'
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#FFB300"
        d="M7.391.724c-.25-.25-.589-.39-.942-.39H1.667A1.333 1.333 0 00.334 1.666v4.781c0 .354.14.693.39.943l5.334 5.333a1.333 1.333 0 001.885 0l4.782-4.781a1.334 1.334 0 000-1.886L7.39.724zM3.667 5a1.334 1.334 0 11.001-2.667 1.334 1.334 0 010 2.667z"
      ></path>
    </svg></span>List Nft</button>

          )
    }
        </div>
        
      </div>
  )
}