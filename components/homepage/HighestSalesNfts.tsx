import React from 'react'
import SectionTitle from '../SectionTitle'

import CollectionBody from './CollectionBody'
import CollectionHeader from './CollectionHeader'
const HighestNfts=({name,price,imageUri,tokenId}:{name:string,price:number,imageUri:string,tokenId:string})=>{
    return(<div className='w-[250px] inline-block'>
      <div className='w-full h-[200px]'>
       <img  src={imageUri} className='w-full h-full object-cover'/>
      </div>
    
    <div className='bg-brandpurple p-2 text-white flex flex-col justify-center items-center space-y-2'>
        <p className=' font-semibold'>{name} #{tokenId}</p>
        
       <p className='text-brandyellow  text-semibold'>{name}</p> 
       <span className=' bg-brandpurple p-1'>{price} CMP</span>
         </div> 
    
     </div>)
}
export default function HighestSalesNfts() {
    const highestSalesNfts=Array.from(Array(5).keys())
  return (
    <>
    <CollectionHeader>
       <SectionTitle title='Highest Sales'/>
    </CollectionHeader>
    <CollectionBody totalItemsLength={highestSalesNfts.length} >
     {highestSalesNfts.map((nfts,index)=>(
          <HighestNfts key={index} name="Bored Apes" imageUri={"https://picsum.photos/200"} price={0} tokenId={`${1}`}/>
      ))
      }
      
    </CollectionBody>
    
    
    </>
  )
}
