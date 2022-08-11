import React from 'react'

export default function Input(props:React.HTMLProps<HTMLInputElement>) {
  return (
    <label className='block md:mt-6 mb-4'>
    {props.label}
    <input {...props as any} className={`placeholder-black/50 block bg-[#AEACAB] w-full p-2 mt-2 rounded-md ${props.className&&props.className}`}/>
    </label>
  )
}

