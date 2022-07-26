import React from 'react'
import NftCard from '../NftCard'

export type Nft={
  name:string,
  imgUrl:string,
  price:string,
  tokenId:string
}
type props={
  nfts:Nft[]
  
}
export default function NftCollection({nfts}:props) {
  return (
    <div className='mt-4 grid grid-cols-4 gap-4'>
      {nfts.map(({name,tokenId,price,imgUrl},index)=>(
          <NftCard key={index} name={name} tokenId={tokenId} price={price} linkToDetails="" imgUrl={imgUrl}/>
      ))}
      
    </div>
  )
}
