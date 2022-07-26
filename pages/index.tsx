import type { NextPage } from 'next'
import FeaturedNfts from '../components/homepage/FeaturedNfts'

import NewCollections from '../components/homepage/NewCollections'
import type { Nft } from '../components/homepage/NewCollections'
import LearnArts from '../components/homepage/LearnArts'
import PopularCollections from '../components/homepage/PopularCollections'
import RecentlyListedNfts from '../components/homepage/RecentlyListedNfts'
import HighestSalesNfts from '../components/homepage/HighestSalesNfts'
import UpcomingLaunches from '../components/homepage/UpcomingLaunches'

export default function Home({nfts}:{nfts:Nft[]}){
  return (
  
   <>
   <FeaturedNfts/>
   <div className='space-y-16'>
      <NewCollections nfts={nfts}/>
      <LearnArts/>
      <PopularCollections/>
      <RecentlyListedNfts/>
      <HighestSalesNfts/>
      <UpcomingLaunches/>
   </div>
   
   </>
  
  
  )
}

export async function getServerSideProps(){
  const nfts:Nft[]=[{
    name:'Bored ape',
    tokenId:"",
    imageUri:"https://looksrare.mo.cloudinary.net/0xB852c6b5892256C264Cc2C888eA462189154D8d7/0xd2327da5643a4d18e7e46942576e4378f4c0066b3394c139bdc2ffac26640940?resource_type=image&f=auto&c=limit&w=360&q=auto"
  },
{
  name:"Space moon",
  tokenId:"",
  imageUri:"https://looksrare.mo.cloudinary.net/0x7f2E7C52217C8c333f24e2fe2EB371D5eE9669a3/0x08fc33e7f75839ab315c16d85a229f5b16391a6f56b649cfe31eed7c3f4721fc?resource_type=image&f=auto&c=limit&w=360&q=auto"
},{
  name:"Moon cats",
  tokenId:"",
  imageUri:"https://looksrare.mo.cloudinary.net/0x4Ef3D9EaB34783995bc394d569845585aC805Ef8/0x4f59e19a0a20536044279f58ad0f44e9e3a2b9fb733c6b811219b9ce9f84fd13?resource_type=image&f=auto&c=limit&w=360&q=auto"
},{
  name:"Spider Monkey",
  tokenId:"",
  imageUri:"https://looksrare.mo.cloudinary.net/0x929832b1f1515cf02c9548A0fF454f1B0E216B18/0x7da14363df623d3260cfcbcb890d6af26df964b7bd33c3f2e201d5accdd0db06?resource_type=image&f=auto&c=limit&w=360&q=auto"
},{
  name:"Blind Bats",
  tokenId:"",
  imageUri:"https://looksrare.mo.cloudinary.net/0x9efAe25f19a633BEca03C799aB6Fb5Da1766559C/0x4240f4576b1a50417f882d1a769a094f77e96168f71e44af41b21622de118e58?resource_type=image&f=auto&c=limit&w=360&q=auto"
}]
 return{
   props:{
     nfts
   }
 }
}


