import React from 'react'

export default function CollectionHeader({children}:{children:React.ReactNode}) {
  return (
    <div className='flex justify-between items-center mb-8'>
      {children}
    </div>
  )
}
