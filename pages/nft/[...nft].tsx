import React, { useState } from 'react'
import { GetServerSidePropsContext } from 'next'
import PriceTag from '../../components/nftPage/PriceTag';
import PurchaseButtons from '../../components/nftPage/PurchaseButtons';
import SimpleInfo from '../../components/nftPage/SimpleInfo';
import { Feature } from '../../components/nftPage/PropertiesDropDown';
import DetailsDropDown from '../../components/nftPage/DetailsDropDown';
import { useAppContext } from '../../contexts/AppContext';
import { NEAR_MARKETPLACE_ADDRESS } from "../../config/constants"
import { nft_token, nft_tokens } from '../../contracts-connector/near/near-interface';
import Image from 'next/image';



type props = {
  imageUri: string,
  name: string,
  id: string,
  creator: string,
  price: any,
  details: "",
  features: Feature[],
  mintAddress: string,
  tokenAddress: string,
  ownerAddress: string,
  royaltyPercentage: number,
  transactionFeePercentage: number,
  marketplaceFee: string,
  categories: string[],
  jsonUri: string,
}

export default function nft({ name, id, price, creator, royaltyPercentage, transactionFeePercentage, marketplaceFee }: props) {
  const app = useAppContext()
  // const [price, setprice] = useState()
  const [listed, setListed] = useState(true)
  const [data, setdata] = useState("");
  const [creators, setCreator] = useState("")


  async function main() {
    let l = []
    l = await nft_tokens(
      {
        from_index: id,
        limit: 1
      }
    )
    console.log(l)

    try {
      let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      let newerData = await fetch("https://ipfs.io/ipfs/" + l[0].metadata, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
      setdata(newerData)

    } catch (e) {
      console.log(e)
    }
  }


  React.useEffect(() => {
    main()
  }, [])

  console.log(price)
  return (
    <>
      <div className='flex flex-col md:flex-row px-4 md:px-0'>
        <div className='md:w-5/12 relative'>
          <Image width={500} height={800} alt={data.name} src={"https://ipfs.io/ipfs/" + data.image_url} className="mt-4 md:mt-0 w-full  object-fit rounded-lg min-h-[500px]" />
        </div>

        <div className='md:pl-16'>
          <SimpleInfo name={name} id={id} creator={creator} details={data.description} />
          <PriceTag currentPrice={price} highestBid='8.00' coinName='NEAR' />
          <PurchaseButtons price={price} nftId={id} contractId={NEAR_MARKETPLACE_ADDRESS} coinName='NEAR' />

          <div className='mt-4'>
            <DetailsDropDown ownerAddress={app.account} royaltyPercentage={royaltyPercentage} storageBalance='Nil' transactionFeePercentage={transactionFeePercentage} marketplaceFee={marketplaceFee} />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const params = context.params;
  const path: any = params?.nft;
  //if(path){
  const idnew = path[0]
  const price = path[1]

  return {
    props: {
      imageUri: "",
      creator: "",
      details: "",
      jsonUri: "",
      price: price,
      id: idnew,
      mintAddress: "",
      tokenAddress: "",
      ownerAddress: "",
      royaltyPercentage: 10,
      transactionFeePercentage: 10,
      marketplaceFee: 10,
    }
  }
}

