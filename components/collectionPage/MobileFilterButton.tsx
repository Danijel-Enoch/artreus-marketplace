import React from 'react'

export default function MobileFilterButton({onClick}:{onClick:()=>void}) {
  return (
    <button onClick={()=>{onClick()}} className='md:hidden w-[80px] mb-2 mr-4 self-end inline-flex items-center justify-between bg-brandbrown text-white p-1'>Filter <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4H13V6H3V4ZM0 0H16V2H0V0ZM6 8H10V10H6V8Z" fill="#F4F3FF"/>
</svg>
</button>
  )
}
