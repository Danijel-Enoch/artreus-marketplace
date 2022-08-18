import React from 'react'
import Title from './Title'

export default function ImagePreview({imageUrl}:{imageUrl:string}) {
  return (
   <div>
        <Title className='mb-4'>preview</Title>
      <div className='relative md:flex md:justify-center md:items-center'>
      <div className='py-32 md:p-60 bg-[#ccc] md:inline-block rounded-lg' style={{backgroundImage:`url(${imageUrl})`,backgroundSize:"cover"}}>
         
      </div>
        <p className='text-[#918f8f] md:-translate-x-[330px] text-center md:w-[20ch]'>Preview your recently listed Nfts</p>
                   

      </div>
      
    </div>
  )
}
