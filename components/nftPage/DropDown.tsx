import React from 'react'
import { Menu } from '@headlessui/react'
export default function DropDown({label,children}:{label:string,children?:React.ReactNode}) {
  return (
    <Menu >
      <Menu.Button className=' bg-[#e4e2e2] p-4 flex items-center justify-between w-full rounded-lg'>
        <span  className='flex items-center text-brandpurple font-bold '> <svg
      xmlns="http://www.w3.org/2000/svg"
     className='mr-1'
      width="19"
      height="15"
      fill="none"
      viewBox="0 0 19 15"
    >
      <path
        fill="#A56020"
        d="M17.666.5H1.333A1.167 1.167 0 00.166 1.667v11.666A1.167 1.167 0 001.333 14.5h16.333a1.167 1.167 0 001.167-1.167V1.667A1.167 1.167 0 0017.666.5zm-7.583 9.333H4.249a.583.583 0 110-1.166h5.834a.583.583 0 110 1.166zM14.749 7.5H4.25a.583.583 0 010-1.167h10.5a.583.583 0 110 1.167zm0-2.333H4.25A.583.583 0 014.25 4h10.5a.583.583 0 110 1.167z"
      ></path>
    </svg> {label} </span>
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L5 5L9 1" stroke="#301300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

       </Menu.Button>
       <Menu.Items className='bg-[#b3b2b2] p-4 mt-2 rounded-md'>
        {children}
       </Menu.Items>
       </Menu>
    
  )
}
