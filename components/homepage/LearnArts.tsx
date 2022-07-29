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
        <img key={index} src="/youtube_banner.png" className='h-full my-6'/>
     ))}
    
   
 </CollectionBody>
    
   
  
    
  </section>
  )
}
