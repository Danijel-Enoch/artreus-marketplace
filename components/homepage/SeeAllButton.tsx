import React from 'react'

export default function SeeAllButton(props:React.HTMLProps<HTMLButtonElement>) {
  return (
    <div><button  {...props as any} className='md:visible hidden bg-brandpurple py-1 px-4 mr-2 text-white   rounded-full'>Sell All</button></div>
  )
}
