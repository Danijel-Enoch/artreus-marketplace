import React from 'react'
import SectionTitle from '../SectionTitle'
import NftCollectionCard from './NftCollectionCard'
import SeeAllButton from './SeeAllButton'
import { useRouter } from 'next/router'
import CollectionHeader from './CollectionHeader'
import CollectionBody from './CollectionBody'
import BluredBox from './BluredBox'

export type Nft={
    name:string,
    imageUri:string
    tokenId:string
    
}
export default function NewCollections({nfts}:{nfts:Nft[]}) {
  const router =useRouter();
  return (
      <section>
      <CollectionHeader>
          <SectionTitle title="New Collections"/><SeeAllButton onClick={()=>{router.push('/new')}}/>
      </CollectionHeader>
   
     
   
   <CollectionBody totalItemsLength={nfts.length}>
        {nfts.map(({name,imageUri,tokenId},i)=>{
          return(
        <NftCollectionCard key={i} name={name} imageUri={imageUri} tokenId={tokenId}/>
          )
      })}

     
      
     </CollectionBody>
     </section>
  )
}
