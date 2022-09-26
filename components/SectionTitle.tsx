import React from 'react'

export default function SectionTitle({title}:{title:string}) {
  return (
    <h2 className='text-2xl font-extrabold py-1 ml-2 md:ml-0 text-brandpurple'>{title}</h2>
  )
}
