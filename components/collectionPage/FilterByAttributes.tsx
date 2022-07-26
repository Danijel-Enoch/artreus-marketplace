import React from 'react'

const NftAttributes=({attribute}:{attribute:string})=>{
    return( <li className='font-semibold flex justify-between items-center py-4 cursor-pointer'><span className='block capitalize'>{attribute}</span><span className='block'>
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="7"
      fill="none"
      viewBox="0 0 10 7"
    >
      <path
        stroke="#301300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1.5l4 4 4-4"
      ></path>
    </svg>
    </span></li>)
}

export default function FilterCollections({attributes}:{attributes:string[]}) {
  return (
    <div className='w-3/12  bg-[#e4e2e2] p-4 rounded-md'>

        <h2 className='text-brandbrown font-semibold flex justify-between mb-2'><span className='block'>Filter </span><button><svg  className="block" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4H13V6H3V4ZM0 0H16V2H0V0ZM6 8H10V10H6V8Z" fill="#301300"/>
</svg>
</button></h2>
<input placeholder='Search' className=' p-2 bg-[#e0e0e0] border border-brandbrown rounded w-full'/>

<ul className='divide-y divide-2 mt-6  '>
   {attributes.map((attribute,index)=>(<NftAttributes key={index} attribute={attribute}/>))}
</ul>
<div className='flex justify-between'>
  <button className='bg-[#ccc] px-8 py-1 rounded-xl text-[#444] font-semibold'>Clear</button>
 <button className='bg-brandbrown px-8 py-1 rounded-xl text-brandyellow font-semibold'>Apply</button>
  
</div>

    </div>
  )
}
