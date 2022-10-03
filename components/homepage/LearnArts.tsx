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
        <div className='inline-block h-[250px] bg-brandpurple w-[250px] rounded-b-[5px]'>
          <img key={index} src="/youtube_banner.png" className=' w-[250px]'/>
        </div>
     ))}
    
   
 </CollectionBody>
    
   
  
    
  </section>
  )
}
