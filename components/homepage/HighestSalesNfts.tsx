import React from 'react'
import SectionTitle from '../SectionTitle'
import BluredBox from './BluredBox'
import CollectionBody from './CollectionBody'
import CollectionHeader from './CollectionHeader'
const HighestNfts=({name,price,imageUri,tokenId}:{name:string,price:number,imageUri:string,tokenId:string})=>{
    return(<div className='w-[250px] '>
      <div className='w-full h-[200px]'>
       <img  src={imageUri} className='w-full h-full object-cover'/>
      </div>
    
    <div className='bg-[#0C0602] p-2 text-white flex flex-col justify-center items-center space-y-2'>
        <p className=' font-semibold'>{name} #{tokenId}</p>
        
       <p className='text-brandyellow  text-semibold'>{name}</p> 
       <span className=' bg-[#422E21] p-1'>{price} BNB</span>
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
