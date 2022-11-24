import React from 'react'
import SectionTitle from '../SectionTitle'
import CollectionBody from './CollectionBody'
import CollectionHeader from './CollectionHeader'

export default function LearnArts() {
  const artsVideos =Array.from(Array(10).keys())
  return (
      <section>
   
  <CollectionHeader>
    <SectionTitle title="Learn Arts"/>
  </CollectionHeader>
     
 <CollectionBody totalItemsLength={artsVideos.length}>

      {artsVideos.map((videos,index)=>(
        <div className='inline-block h-max bg-brandpurple w-[250px] rounded-b-[5px] ' key={index}>
          <img  src="/youtube_banner.png" className=' w-[250px]'/>
          <div className='flex flex-col justify-center items-center px-20 py-5'>
              <h5 className='font-medium text-base text-white'>Nft Tutorial</h5>
              <h5 className='font-medium text-base text-brandyellow'>Nft Tutorial</h5>
          </div>
        </div>
     ))}
    
   
 </CollectionBody>
    
   
  
    
  </section>
  )
}
