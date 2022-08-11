import React from 'react'
import type {Nft}from '../collectionPage/NftCollection'
import NftCard from '../NftCard';
import {Menu} from '@headlessui/react'
export default function MoreCollections() {
    let nfts:Nft[]=Array.from(Array(12).keys())as unknown as Nft[]
    nfts= nfts.map(()=>({
        name:"Cyber Kongs",
        tokenId:"1",
        price:"2.00",
        imgUrl:"https://img.seadn.io/files/48b4bd2c10413cabb29bdb046de296bc.png?fit=max&w=600"
    }))
  return (
      <Menu>
   <Menu.Button className='ml-1 md:ml-0 w-[98%] md:w-full h-full mt-16 bg-brandbrown text-white py-4 px-6 rounded-md '>More From This Collection <svg className='ml-4 inline' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M1 1L5 5L9 1" stroke="#14F3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
   </svg>
   </Menu.Button>
   <Menu.Items className='mt-4 px-1 grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-8 md:gap-4'>
      {nfts.map(({name,tokenId,price,imgUrl},index)=>(
          <NftCard key={index} name={name} tokenId={tokenId} price={price} blockChain="" contractAddress='' imgUrl={imgUrl}/>
      ))}
      
    </Menu.Items>
   </Menu>
  )
}

