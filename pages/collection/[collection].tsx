import { useRouter } from 'next/router'
import React from 'react'
import type { NextPage } from 'next'
import Banner from '../../components/collectionPage/Banner'
import FilterByAttributes from '../../components/collectionPage/FilterByAttributes'
import FilterBar from '../../components/collectionPage/FilterBar'
import NftCollection from '../../components/collectionPage/NftCollection'
import type {Nft} from '../../components/collectionPage/NftCollection'
import useWindowSize from '../../hooks/useWindowSize'
import MobileFilterButton from '../../components/collectionPage/MobileFilterButton'

type CollectionProps={
    name:string,
    details:string,
    imgUrl:string
    attributes:string[],
    nfts:Nft[]
} 
type props=CollectionProps & NextPage;
export default function collection({name,details,imgUrl,attributes,nfts}:props) {
  const size=useWindowSize();
  const [showMobileFilter,setShowMobileFilter]=React.useState(false)
  return (
    <>
    <Banner name={name} details={details} imgUrl={imgUrl}/>
    <div className='flex flex-col md:flex-row'>
    
       <MobileFilterButton onClick={()=>{setShowMobileFilter(!showMobileFilter)}}/>
       {size.width&&size.width >= 765? <FilterByAttributes attributes={attributes}/>:showMobileFilter&&<FilterByAttributes attributes={attributes}/>}
       
       
     
       <div className='px-2 w-full md:ml-4'>
         <FilterBar/>
         <NftCollection nfts={nfts}/>

       </div>
      
    </div>
    </>
  )
}
export async function getServerSideProps(){
    const name='Bored Ape Yatch Club'
    var requestOptions:any = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const response=await fetch("https://artreuss.herokuapp.com/v1/nft/", requestOptions)
    const data=await response.json();
    let listed = data.result.filter((e:any)=>e.listed==="true")
    console.log(listed)
    return {props :{
        name:"DAniel",
        details:"dabeuksdfkj",
        imgUrl:"welocm",
        attributes:["jksjdg","jskdjfshk","jskdjfk"],
        nfts:listed
    }}
}
