import React from 'react'

export default function SeeAllButton(props:React.HTMLProps<HTMLButtonElement>) {
  return (
    <div><button  {...props as any} className='invisible md:visible bg-brandbrown py-1 px-4 text-white   rounded-full'>Sell All</button></div>
  )
}
