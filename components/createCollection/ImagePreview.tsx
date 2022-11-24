import React from 'react'
import Title from './Title'

export default function ImagePreview({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-[100%] md:mt-3">
      <Title className='mb-4 text-bodycopy'>Pre-view</Title>
      <div className='flex justify-center items-center'>
        <div className='w-[100%] h-[450px] bg-[#ccc] rounded-lg flex justify-center items-center' style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",backgroundColor:"#2F2F2F1A" }}>
        <p className='text-[#918f8f] text-center px-2'>Preview your recently listed Nfts</p>
        </div>
      </div>

    </div>
  )
}
