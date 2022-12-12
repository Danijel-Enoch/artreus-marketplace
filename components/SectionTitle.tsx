import React from 'react'

export default function SectionTitle({title}:{title:string}) {
  return (
    <h2 className='md:text-[46px] text-4xl font-bold py-1 ml-2 md:ml-8 text-brandpurple'>{title}</h2>
  )
}
