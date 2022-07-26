import React from 'react'
import {GetServerSidePropsContext} from 'next'
import supportedNetworts from '../../supportedNetworks.json';
import PriceTag from '../../components/nftPage/PriceTag';
import SocialLinks from '../../components/SocialLinks';
import PurchaseButtons from '../../components/nftPage/PurchaseButtons';
import CategoryCard from '../../components/nftPage/CategoryCard';
import SimpleInfo from '../../components/nftPage/SimpleInfo';
import PropertiesDropDown, { Feature } from '../../components/nftPage/PropertiesDropDown';
import DetailsDropDown from '../../components/nftPage/DetailsDropDown';
import PriceHistoryDropDown from '../../components/nftPage/PriceHistoryDropDown';
import MoreCollections from '../../components/nftPage/MoreCollections';

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
  categories:string[]
}
export default function nft({categories,imageUri,name,id,creator,details,features,mintAddress,tokenAddress,ownerAddress,royaltyPercentage,transactionFeePercentage,marketplaceFee}:props) {
  return (
    <>
    <div className='flex'>
      <div className='w-5/12'>
           <img src={imageUri} className="w-full  object-fit rounded-lg"/>
           <PriceHistoryDropDown/>
          
           
      </div>
      <div className='pl-16'>
      <SimpleInfo name={name} id={id} creator={creator} details={details}/>
      <PriceTag currentPrice='5.00' highestBid='8.00' coinName='BNB'/>
      <SocialLinks discord="" twitter='' website='' watchCount=''/>
      <PurchaseButtons price='5.00' coinName='BNB'/>
      <div className='mt-16'>
        <PropertiesDropDown features={features}/>
        <DetailsDropDown mintAddress={mintAddress} tokenAddress={tokenAddress} ownerAddress={ownerAddress} royaltyPercentage={royaltyPercentage} transactionFeePercentage={transactionFeePercentage} marketplaceFee={marketplaceFee}/>
        
      </div>
      <CategoryCard categories={categories}/>
      
     
      </div>
     

     
    </div>
    <MoreCollections/>
    </>
  )
}

export async  function getServerSideProps(context:GetServerSidePropsContext){
  const params=context.params;
  const path=params?.nft;
  if(path){
    const network=path[0]
    const address=path[1]
    const tokenId=path[2]
    if(supportedNetworts.includes(network)){
      const imageUri="https://img.seadn.io/files/48b4bd2c10413cabb29bdb046de296bc.png?fit=max&w=600"
      const name="CyberKong"
      const id='840'
      const categories=['games','music','pfp']
     const mintAddress="0x63ddd..85858"
    const tokenAddress="0x63ddd..85858"
    const ownerAddress="0x63ddd..85858"
    const royaltyPercentage=7;
    const transactionFeePercentage=2;
    const marketplaceFee="free"
      const features:Feature[] =[{
       featureType:"Background",
       value:'blue'
      },
      {
        featureType:"Base",
        value:"red"
      },{
        featureType:"Body",
        value:"Red"
      },
      {
        featureType:"Eyes",
        value:"high"
      },
      {
        featureType:"Head",
        value:"Plank"
      },{
        featureType:"Mouth",
        value:"Percing"
      }
    ]
      const creator="maybe_pennybags_vault"
      const details="Welcome to an alternate reality, where evolution took a different route and weird apes roam the earth. Some appear normal. Some look weird. And some are just damn cool! Every CyberKong is unique and owns randomized items with different rarities. A few are super rare and even animated! Maybe some of them look familiar! "
      return{
        props:{
         imageUri,
         name,
         id,
         creator,
         details,
         features,
         mintAddress,
         tokenAddress,
         ownerAddress,
         royaltyPercentage,
        transactionFeePercentage,
         marketplaceFee,
         categories
         
        }
      }
  }
  return{
    redirect: {
      permanent: false,
      destination: "/404",
    },
    props:{}
  }
  

  

  
  // }
  // ret
  
  }
}

