import React, { useState } from 'react'
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
import { useAppContext } from '../../contexts/AppContext';
import {ethers} from  "ethers"
import {MINTER_CONTRACT}  from "../../config/constants"

const provider=new ethers.providers.JsonRpcProvider("https://mainnet.block.caduceus.foundation/")
const _signer = provider.getSigner();

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
  jsonUri:string,
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
export default function nft({categories,jsonUri,imageUri,name,id,creator,details,features,mintAddress,tokenAddress,ownerAddress,royaltyPercentage,transactionFeePercentage,marketplaceFee}:props) {
  const app=useAppContext()
  const [price,setprice]=useState()
  const [listed,setListed]=useState(false)
  const [data, setdata] = useState("");
  const [creators, setCreator] = useState("")



    async function main() {


      if (app.connected) {
          try {
              const l = await getUserNft()
              // const nftsId = 
              setCreator(l[0][1])
                  // console.log()
                  var requestOptions:any = {
                      method: 'GET',
                      redirect: 'follow'
                  };
                  //  console.log(l)
                  const newerData:any = 
                    fetch("https://ipfs.io/ipfs/" + l[0][2], requestOptions)
                      .then(response =>response.json())
                      .catch(error => console.log('error', error))
                      

                   setdata(await newerData)
              //setdata(await Promise.all(newerData))
             //console.log(data)
          } catch (e) {
              console.log(e)
          }

      }
  }
  main()



  async function getUserNft() {
      const address = MINTER_CONTRACT;
      const abi = [
          "function getUserNft(address user_address) view returns (tuple(uint256 id, address creator, string uri)[])"
      ];
      try{
      const contract = new ethers.Contract(address, abi, app.signer);
      const data = await contract.functions.getUserNft(app.account);

      console.log(data);
      const nft = data[0].filter((e) => {
       // console.log(id)
        if(e[0].toString()===(id).toString()) return ({
              "id": e[0].toString(),
              "metadata": e[2]
          })
      })
      // console.log(nft)
      return nft
    }catch(e){
      console.log(e)
    }


  }

 
  // app.account;

//console.log(id)

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
           <img src={"https://ipfs.io/ipfs/" + data.image_url} className="mt-4 md:mt-0 w-full  object-fit rounded-lg"/>
        {size.width&&size.width >=765&&(<PriceHistoryDropDown/>)}   
          
           
      </div>
      <div className='md:pl-16'>
      {size.width&&size.width <765&&(<MobileLikeAndShare/>)}
     
      <SimpleInfo name={name} id={id} creator={creator} details={data.description}/>
      <PriceTag currentPrice='5.00' highestBid='8.00' coinName='BNB'/>
      <ListNft floorPrice='5' dbId={id} jsonUri={jsonUri} mintAddress={mintAddress} listingPrice='0.02' coinName='CAD' listed={setListed}/>
      <SocialLinks discord="" twitter='' website='' watchCount=''/>
      <PurchaseButtons price='5.00' coinName='CAD'/>
      <div className='mt-16'>
        {/* <PropertiesDropDown features={features}/> */}
        <DetailsDropDown mintAddress={creators} tokenAddress={tokenAddress} ownerAddress={app.account} royaltyPercentage={royaltyPercentage} transactionFeePercentage={transactionFeePercentage} marketplaceFee={marketplaceFee}/>
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
   
      // console.log(data)
      //console.log(await data.result.imageUrl)
      

  
      return{
        props:{
          imageUri:"",
          creator:"",
          details:"",
          jsonUri:"",
          id:idnew,
          mintAddress:"",
          tokenAddress:"",
          ownerAddress:"",
          royaltyPercentage:10,
          transactionFeePercentage:10,
          marketplaceFee:10,
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

