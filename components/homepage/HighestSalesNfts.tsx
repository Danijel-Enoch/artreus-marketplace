import React from 'react'
import SectionTitle from '../SectionTitle'
import CollectionBody from './CollectionBody'
import CollectionHeader from './CollectionHeader'

export type highestNFTs = {
  name: string,
  price: number,
  imageURI: string,
  tokenId: string
}

const HighestNfts = ({ name, price, imageUri, tokenId }: { name: string, price: number, imageUri: string, tokenId: string }) => {
  return (
    <div className='w-[230px] inline-block rounded-[5px]'>
      <div className='w-full'>
        <img src={imageUri} className='rounded-t-[5px] w-[230px] h-[230px] object-cover' />
      </div>
      <div className='bg-brandpurple py-2 text-white flex flex-col justify-center items-center  rounded-b-[5px] pt-4'>
        <p className='font-semibold'>{name} #{tokenId}</p>
        <p className='text-brandyellow  text-semibold'>{name}</p>
        <span className=' bg-brandpurple p-1'>{price} CMP</span>
      </div>
    </div>
  )
}

export default function HighestSalesNfts({ highestSoldNFTs }: { highestSoldNFTs: highestNFTs[] }) {
  return (
    <>
      <CollectionHeader>
        <SectionTitle title='Highest Sales' />
      </CollectionHeader>
      <CollectionBody totalItemsLength={highestSoldNFTs.length} >
        {highestSoldNFTs.map((nft, index) => (
          <HighestNfts key={index} name={nft?.name} imageUri={nft?.imageURI} price={nft?.price} tokenId={`${nft?.tokenId}`} />
        ))
        }
      </CollectionBody>
    </>
  )
}
