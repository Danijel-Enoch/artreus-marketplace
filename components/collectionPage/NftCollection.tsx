import React from 'react'
import NftCard from '../NftCard'

export type Nft={
  name:string,
  imgUrl:string,
  price:string,
  tokenId:string
  imageUrl:string
  id:any
}
type props={
  nfts:Nft[]
  
}
// {
//   socialLinks: [ 'Fb.comlll' ],
//   name: 'Crypto Punk',
//   description: 'Seller',
//   jsonUrl: 'over.i;;;pfs.com',
//   imageUrl: 'image.ipfs.com',
//   listed: 'true',
//   auctioned: 'maker',
//   owner: '0xd68C501158529.,.,eadA7D623974008F90758F2693D',
//   categories: 'ajkshdkaj',
//   collectionAddress: '0xd68C501158529eadA7D623974008F90758F2693D',
//   id: '63234a267fad9f0004d49a79'
// }
export default function NftCollection({nfts}:props) {
  return (
    <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-4'>
      {nfts.map(({name,tokenId,price,id,imageUrl},index)=>(
          <NftCard key={index} dbId={id} name={name} tokenId={tokenId} price={price} blockChain="ethereum" contractAddress='0x57a204aa1042f6e66dd7730813f4024114d74f37/840' imgUrl={`https://ipfs.io/ipfs/`+imageUrl}/>
      ))}
      
    </div>
  )
}
