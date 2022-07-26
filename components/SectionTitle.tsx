import React from 'react'

export default function SectionTitle({title}:{title:string}) {
  return (
    <h2 className='text-2xl font-extrabold py-4'>{title}</h2>
  )
}
