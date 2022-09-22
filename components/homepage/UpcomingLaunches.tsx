import React from 'react'
import SectionTitle from '../SectionTitle'
import CollectionBody from './CollectionBody'
import CollectionHeader from './CollectionHeader'
import NftCollectionCard from './NftCollectionCard'

export default function UpcomingLaunches() {
    const upcomingNfts=Array.from(Array(5).keys())
  return (
    <>
    <CollectionHeader>
      <SectionTitle title='Upcoming Launches'/>
    </CollectionHeader>
    <CollectionBody totalItemsLength={upcomingNfts.length}>

        {upcomingNfts.map((nft,index)=>(<NftCollectionCard key={index} name="Bored Apes" imageUri={"https://picsum.photos/200"}  tokenId={`${1}`}/>))}
     
    </CollectionBody>
 
   
    
    </>
  )
}
