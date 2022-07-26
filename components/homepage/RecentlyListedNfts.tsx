import React from 'react'
import SectionTitle from '../SectionTitle'
import BluredBox from './BluredBox'
import CollectionBody from './CollectionBody'
import CollectionHeader from './CollectionHeader'
const RecentNfts=({name,price,imageUri,linktoDetails}:{name:string,price:number,imageUri:string,linktoDetails:string})=>{
    return(<div className='w-[250px] '><img  src={imageUri} className='w-full h-[200px]'/>
    <div className='bg-[#0C0602] p-2 text-white '>
        <p className='text-center font-semibold'>{name}</p>
        <div className='flex justify-between items-center mt-4'>
             <div className='flex space-x-2'><svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="25"
                 height="25"
                 fill="none"
                 viewBox="0 0 25 25"
                 >
                 <path
                     fill="#F3BA2F"
                     d="M12.656 24.532c-6.65 0-12.04-5.39-12.04-12.04C.615 5.84 6.005.45 12.655.45c6.65 0 12.041 5.391 12.041 12.041s-5.39 12.041-12.04 12.041zM9.733 11.29l2.923-2.923 2.925 2.925 1.7-1.701-4.625-4.625L8.032 9.59l1.701 1.7zm-4.602 1.201l1.7 1.701 1.701-1.7-1.7-1.701-1.701 1.7zm4.602 1.202L8.03 15.39l.002.002 4.624 4.624 4.625-4.625v-.001l-1.7-1.7-2.925 2.924-2.923-2.922zm7.047-1.202l1.701 1.701 1.7-1.7-1.7-1.701-1.7 1.7zm-2.399-.001l-1.725-1.725-1.275 1.275-.147.147-.302.302-.003.002.003.003 1.723 1.724 1.727-1.726v-.002z"
                 ></path>
                 </svg> <p>{price}</p></div>
                 <div><button className='border rounded-full border-brandyellow py-1 px-6'>Details</button></div>
         </div>
        
         </div> 
    
     </div>)
}
export default function RecentlyListedNfts() {
    const recentNFTS=Array.from(Array(5).keys())
  return (
    <>
    <CollectionHeader>
       <SectionTitle title="Recently Listed NFTs"/>
    </CollectionHeader>
    <CollectionBody totalItemsLength={recentNFTS.length}>
     
        {recentNFTS.map((recentNft,index)=>(<RecentNfts key={index} name='Richard Mason' price={0} imageUri={"https://picsum.photos/200"} linktoDetails=""/>))}

    </CollectionBody> 
        
    
    </>
  )
}
