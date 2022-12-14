import React, { useState } from 'react'
import { GetServerSidePropsContext } from 'next'
import SocialLinks from '../../../components/nftPage/SocialLinks';
import SimpleInfo from '../../../components/nftPage/SimpleInfo';
import ListNearNft from '../../../components/nftPage/ListNearNft';
import { Feature } from '../../../components/nftPage/PropertiesDropDown';
import DetailsDropDown from '../../../components/nftPage/DetailsDropDown';

import { NEAR_MARKETPLACE_ADDRESS } from "../../../config/constants"
import { nft_tokens_for_owner, storage_balance_of, nearWallet, nft_tokens } from '../../../contracts-connector/near/near-interface';
import { utils } from 'near-api-js';


type props = {
  imageUri: string,
  name: string,
  id: string,
  creator: string,
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

const getNftFromApi = async (id: any) => {
  var requestOptions: any = {
    method: 'GET',
    redirect: 'follow'
  };

  await fetch("https://artreuss.herokuapp.com/v1/nft/" + id, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      return result

    })
    .catch(error => console.log('error', error));

}
export default function nft({ categories, jsonUri, imageUri, name, id, creator, details, features, mintAddress, tokenAddress, ownerAddress, royaltyPercentage, transactionFeePercentage, marketplaceFee }: props) {
  const [price, setprice] = useState()
  const [listed, setListed] = useState(false)
  const [data, setdata] = useState(null);
  const [creators, setCreator] = useState("")
  const [storageBalance, setStorageBalance] = useState('0')

  const [connected, setConnected] = useState(false)
  const walletId = nearWallet.accountId

  React.useEffect(() => {
    nearWallet.startUp()
  }, [])

  React.useEffect(() => {
    if (nearWallet.connected) {
      setConnected(true)
    } else {
      setConnected(false)
    }
  }, [nearWallet.connected])


  async function main() {
    if (nearWallet.connected) {
      try {
        let bal = ''
        bal = await storage_balance_of({
          account_id: nearWallet.accountId,
          contractId: NEAR_MARKETPLACE_ADDRESS
        })
        bal = utils.format.formatNearAmount(bal)
        setStorageBalance(bal)
      }
      catch (e) {
        console.log(e)
      }

      try {
        const l = await nft_tokens(
          {
            from_index: id,
            limit: 1
          }
        )

        var requestOptions: any = {
          method: 'GET',
          redirect: 'follow'
        };

        const newerData: any = await
          fetch("https://ipfs.io/ipfs/" + l[0].metadata, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error))

        setdata(await newerData)


      } catch (e) {
        console.log(e)
      }
    } else console.log('Not Connected')
  }

  React.useEffect(() => {
    setTimeout(() => {
      main()
    }, 2000);
  }, [])

  const imgSrc = data != null ? "https://ipfs.io/ipfs/" + data?.image_url : ''

  return (
    <>
      <div className='flex flex-col md:flex-row px-4 md:px-0'>
        <div className='md:w-[50%] relative'>
          <div className='absolute top-4 right-4 text-white bg-[rgba(0,0,0,0.6)] px-2 py-1 rounded-md'>
            {
              listed ? "Listed" : "Not Listed"
            }
          </div>
          <img src={imgSrc} className="mt-4 md:mt-0 w-full  object-fit rounded-lg min-h-[500px]" />

        </div>
        <div className='md:pl-8 md:w-[50%] w-full'>

          <SimpleInfo name={data?.name} id={id} creator={creator} details={data?.description} />

          <ListNearNft ownerAddress floorPrice='5' tokenId={id} jsonUri={jsonUri} mintAddress={mintAddress} listingPrice='0.02' coinName='NEAR' listed={setListed} />

          <div className='mt-6'>
            <DetailsDropDown ownerAddress={walletId} storageBalance={String(storageBalance)} royaltyPercentage={royaltyPercentage} transactionFeePercentage={transactionFeePercentage} marketplaceFee={marketplaceFee} />
          </div>

        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const params = context.params;
  const path: any = params?.nft;
  const address = path[0]
  const tokenId = path[1]


  // console.log(data)
  //console.log(await data.result.imageUrl)



  return {
    props: {
      imageUri: "",
      creator: address,
      details: "",
      jsonUri: "",
      id: tokenId,
      mintAddress: "",
      tokenAddress: "",
      ownerAddress: address,
      royaltyPercentage: 10,
      transactionFeePercentage: 10,
      marketplaceFee: 10,
    }
  }
  //}
  return {
    redirect: {
      permanent: false,
      destination: "/404",
    },
    props: {}
  }





  // }
  // ret

  //  }
}

