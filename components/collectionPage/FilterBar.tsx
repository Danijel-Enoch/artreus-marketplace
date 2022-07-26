import React from 'react'

const FilterButton=({label}:{label:string})=>{
    return(<button className='bg-[#e4e2e2] flex items-center justify-between  py-1 px-4 border-black border rounded-lg font-semibold text-brandbrown capitalize'>{label}<svg className='ml-2' width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.5L5 5.5L9 1.5" stroke="#301300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </button>)
}
export default function FilterBar() {
  return (
      <div className='flex justify-between w-full py-2 px-6 bg-[#e4e2e2] rounded-md'>
          <div className=' flex space-x-4'>
            <FilterButton label="Category"/>
            <FilterButton label="Sale Type"/>
            <FilterButton label="Price range"/>
            </div>
           <FilterButton label='price low to high'/>
      </div>
    
  )
}
