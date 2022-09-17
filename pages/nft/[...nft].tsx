import React from 'react'
import {GetServerSidePropsContext} from 'next'
import supportedNetworts from '../../supportedNetworks.json';
import PriceTag from '../../components/nftPage/PriceTag';
import SocialLinks from '../../components/SocialLinks';
import PurchaseButtons from '../../components/nftPage/PurchaseButtons';
import CategoryCard from '../../components/nftPage/CategoryCard';
import SimpleInfo from '../../components/nftPage/SimpleInfo';
import ListNft from '../../components/nftPage/ListNft';
import PropertiesDropDown, { Feature } from '../../components/nftPage/PropertiesDropDown';
import DetailsDropDown from '../../components/nftPage/DetailsDropDown';
import PriceHistoryDropDown from '../../components/nftPage/PriceHistoryDropDown';
import MoreCollections from '../../components/nftPage/MoreCollections';
import useWindowSize from '../../hooks/useWindowSize';
import LikeButton from '../../components/nftPage/LikeButton';
import MobileLikeAndShare from '../../components/nftPage/MobileLikeAndShare';
import axios from "axios"
type props={
  imageUri:string,
  name:string,
  id:string,
  creator:string,
  details:"",
  features:Feature[],
  mintAddress:string,
  tokenAddress:string,
  ownerAddress:string,
  royaltyPercentage:number,
  transactionFeePercentage:number,
  marketplaceFee:string,
  categories:string[],
  listed:boolean,
}
const getNftFromApi=async(id:any)=>{
  var requestOptions:any = {
    method: 'GET',
    redirect: 'follow'
  };
  
  await fetch("https://artreuss.herokuapp.com/v1/nft/"+id, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      return result

    })
    .catch(error => console.log('error', error));


}
export default function nft({categories,imageUri,name,id,creator,details,features,mintAddress,tokenAddress,ownerAddress,royaltyPercentage,transactionFeePercentage,marketplaceFee, listed}:props) {
 const size=useWindowSize()
  return (
    <>
    <div className='flex flex-col md:flex-row px-4 md:px-0'>
      <div className='md:w-5/12 relative'>
        <div className='absolute top-4 right-4 text-white bg-[rgba(0,0,0,0.6)] px-2 py-1 rounded-md'>
          { 
            listed ? "Listed" : "Not Listed"
          }
        </div>
           <img src={imageUri} className="mt-4 md:mt-0 w-full  object-fit rounded-lg"/>
        {size.width&&size.width >=765&&(<PriceHistoryDropDown/>)}   
          
           
      </div>
      <div className='md:pl-16'>
      {size.width&&size.width <765&&(<MobileLikeAndShare/>)}
     
      <SimpleInfo name={name} id={id} creator={creator} details={details}/>
      {/* <PriceTag currentPrice='5.00' highestBid='8.00' coinName='BNB'/> */}
      <ListNft floorPrice='5.00' listingPrice='8.00' coinName='BNB' listed={listed}/>
      <SocialLinks discord="" twitter='' website='' watchCount=''/>
      <PurchaseButtons price='5.00' coinName='BNB'/>
      <div className='mt-16'>
        {/* <PropertiesDropDown features={features}/> */}
        <DetailsDropDown mintAddress={mintAddress} tokenAddress={tokenAddress} ownerAddress={ownerAddress} royaltyPercentage={royaltyPercentage} transactionFeePercentage={transactionFeePercentage} marketplaceFee={marketplaceFee}/>
        {/* {size.width&&size.width < 765&&(<PriceHistoryDropDown/>)}    */}
      </div>
      {/* <CategoryCard categories={categories}/> */}
      
     
      </div>
      {size.width&&size.width >= 765&&(<LikeButton/>)}   
     

     
    </div>
     <MoreCollections />
    </>
  )
}

export async  function getServerSideProps(context:GetServerSidePropsContext){
  const params=context.params;
  const path:any=params?.nft;
  //if(path){
    const network=path[0]
    const address=path[1]
    const tokenId=path[2]
    const idnew=path[3]
    let mine:any;
    var requestOptions:any = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const response=await fetch("https://artreuss.herokuapp.com/v1/nft/"+idnew, requestOptions)
      const data=await response.json();
      let listed = (data.result.listed === 'true')
      // console.log(data)
      //console.log(await data.result.imageUrl)
      

  
      return{
        props:{
          imageUri:`https://ipfs.io/ipfs/`+data.result.imageUrl,
          creator:data.result.owner,
          details:data.result.description,
          id:data.result.id,
          mintAddress:data.result.collectionAddress,
          tokenAddress:data.result.owner,
          ownerAddress:data.result.owner,
          royaltyPercentage:10,
          transactionFeePercentage:10,
          marketplaceFee:10,
          listed
        }
      }
  //}
  return{
    redirect: {
      permanent: false,
      destination: "/404",
    },
    props:{}
  }
  

  

  
  // }
  // ret
  
//  }
}

