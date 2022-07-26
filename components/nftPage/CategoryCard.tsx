import React from 'react'

export default function CategoryCard({categories}:{categories:string[]}) {
  return (
    <div className='w-[400px] bg-[#e4e2e2] py-2 px-6 mt-6 text-[#444] font-bold'>
        <h4>Category:</h4>
    <div className='space-x-4 mt-2'>
        {categories.map((category,i)=>(
            <button  className="uppercase bg-brandyellow py-1 px-6 rounded-lg text-brandbrown " key={i}>{category}</button>
        ))}
    </div>
    <h4 className="mt-2">
        BlockChain:
    </h4>
    <h5 className='mt-2 '>Binance</h5>
    </div>
  )
}
