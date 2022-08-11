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
    <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-4'>
      {nfts.map(({name,tokenId,price,imgUrl},index)=>(
          <NftCard key={index} name={name} tokenId={tokenId} price={price} blockChain="ethereum" contractAddress='0x57a204aa1042f6e66dd7730813f4024114d74f37/840' imgUrl={imgUrl}/>
      ))}
      
    </div>
  )
}
