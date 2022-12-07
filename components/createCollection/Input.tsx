import React from 'react'

export default function Input(props: React.HTMLProps<HTMLInputElement>) {
  return (
    <label className='block'>
      {props.label}
      <input {...props as any} className={`placeholder-black/50 block bg-[#2F2F2F1A] w-full p-2 mt-2 mb-4 rounded-md outline-4 hover:outline active:outline ${props.className && props.className}`} />
    </label>
  )
}

