import React from 'react'
import SectionTitle from '../SectionTitle'
import CollectionBody from './CollectionBody'
import CollectionHeader from './CollectionHeader'
import NftCollectionCard from './NftCollectionCard'

export type Upcoming = {
  name: string,
  imageURI: string,
  tokenId: string,
}

export default function UpcomingLaunches({ upcomingNFTs }: { upcomingNFTs: Upcoming[] }) {
  return (
    <>
      <CollectionHeader>
        <SectionTitle title='Upcoming Launches' />
      </CollectionHeader>
      <CollectionBody totalItemsLength={upcomingNFTs.length}>
        {upcomingNFTs.map((nft, index) => (
          <NftCollectionCard key={index} name={nft?.name} imageUri={nft?.imageURI} tokenId={nft?.tokenId} />
        ))}
      </CollectionBody>
    </>
  )
}
