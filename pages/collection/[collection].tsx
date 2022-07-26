import { useRouter } from 'next/router'
import React from 'react'
import type { NextPage } from 'next'
import Banner from '../../components/collectionPage/Banner'
import FilterByAttributes from '../../components/collectionPage/FilterByAttributes'
import FilterBar from '../../components/collectionPage/FilterBar'
import NftCollection from '../../components/collectionPage/NftCollection'
import type {Nft} from '../../components/collectionPage/NftCollection'

type CollectionProps={
    name:string,
    details:string,
    imgUrl:string
    attributes:string[],
    nfts:Nft[]
} 
type props=CollectionProps & NextPage;
export default function collection({name,details,imgUrl,attributes,nfts}:props) {
 
  return (
    <>
    <Banner name={name} details={details} imgUrl={imgUrl}/>
    <div className='flex'>
       <FilterByAttributes attributes={attributes}/>
       <div className='w-full ml-4'>
         <FilterBar/>
         <NftCollection nfts={nfts}/>

       </div>
      
    </div>
    </>
  )
}
export async function getServerSideProps(){
    const name='Bored Ape Yatch Club'
    let nfts:Nft[]=Array.from(Array(12).keys())as unknown as Nft[]
    nfts= nfts.map(()=>({
        name:"Bored Ape",
        tokenId:"1",
        price:"2.00",
        imgUrl:"https://img.seadn.io/files/e2ad61c67d6bfcc3460e42466cc9b5de.png?auto=format&fit=max&w=384"
    }))

    const attributes=['background','eyes','fur','Mouth','clothes','hat','cot','ground','heroes']
    const imgUrl="https://lh3.googleusercontent.com/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs=h600"
    const details="Advised by the former Head of Twitter Gaming and Sport, we are  launching the worlds first ever NFTs as Esports Teams, allowing holders to start and grow their own Esports teams, earn $USDC from them and then auction them for a multiplier of the earning potential just like a business."
    return {props :{
        name,
        details,
        imgUrl,
        attributes,
        nfts
    }}
}
