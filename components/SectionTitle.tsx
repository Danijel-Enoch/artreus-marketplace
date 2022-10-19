import React from 'react'

export default function SectionTitle({title}:{title:string}) {
  return (
    <h2 className='md:text-[46px] text-2xl font-medium md:font-bold py-1 ml-6 md:ml-8 text-brandpurple'>{title}</h2>
  )
}
