import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'

const FilterButton=({label}:{label:string})=>{
    return(<button className='bg-[#e4e2e2] inline-flex whitespace-nowrap md:flex items-center justify-between p-1 md:py-1 md:px-4 border-black border rounded-lg md:font-semibold text-brandbrown capitalize'>{label}<svg className='ml-2' width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.5L5 5.5L9 1.5" stroke="#301300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </button>)
}
export default function FilterBar() {
  const size=useWindowSize()
  return (
      <div className='inline-flex md:flex md:justify-between w-full md:py-2 md:px-6 md:bg-[#e4e2e2] rounded-md'>
          <div className='inline-flex space-x-2 md:flex md:space-x-4'>
            <FilterButton label="Category"/>
            <FilterButton label="Sale Type"/>
            <FilterButton label="Price range"/>
            </div>
            {size.width&&size.width >= 765&&(<FilterButton label='price low to high'/>)}
           
      </div>
    
  )
}
