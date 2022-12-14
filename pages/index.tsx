
import RecentlyListedNfts from '../components/homepage/RecentlyListedNfts'
import type { NFT } from '../components/homepage/RecentlyListedNfts';

import { useEffect, useState } from 'react'

import { get_sales_by_nft_contract_id, nft_tokens, nearWallet, get_sales_by_owner_id } from '../contracts-connector/near/near-interface'
import { NEAR_MARKETPLACE_ADDRESS } from '../config/constants';

type props = {
  recentNFTs: {}
}

export default function Home({ recentNFTs }: props) {


  const [data, setdata] = useState({
    id: [],
    data: [],
  });

  const [isLoaded, setIsLoaded] = useState(false)
  const [limit, setLimit] = useState(5)

  async function main() {
    let l = []
    l = await get_sales_by_owner_id({
      account_id: 'ajemark.testnet',
      from_index: 0,
      limit: 5,
      contractId: NEAR_MARKETPLACE_ADDRESS
    })

    try {
      l = l.reverse()
      let newerData = l.map(async (e) => {
        let requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        try {
          let m = []
          m = await nft_tokens({
            from_index: e.token_id,
            limit: 1
          })

          let a = fetch("https://ipfs.io/ipfs/" + m[0].metadata, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));

          return {
            id: e.token_id,
            data: await a,
            price: e.sale_conditions.price,
            owner_id: e.owner_id
          }

        } catch (e) {
          console.log(e)
        }

      })

      newerData = await Promise.all(newerData)
      setdata(newerData)
      setIsLoaded(true)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      main()
    }, 2000);
  }, [])

  useEffect(() => {
    nearWallet.startUp()
  }, [])


  return (
    <>
      <div className='space-y-4 mt-4 j-center mx-auto'>
        {isLoaded && <RecentlyListedNfts recentNFTs={data} />}
        {!isLoaded && <p>Loading Data</p>}
      </div>
    </>
  )
}

export async function getServerSideProps() {

  const recentNFTs: NFT[] = [
    {
      name: 'Cool Cats',
      price: 10,
      imageURI: 'https://i.seadn.io/gcs/files/f588756f5ef067f1b856a25d37f22ec0.png?auto=format&w=1920',
      linkToDetails: `/nft/${'name'}`
    },
    {
      name: 'LoFi Guys',
      price: 5,
      imageURI: 'https://i.seadn.io/gae/FfS6UXeTqf0cE9efVlKYPALCOcru9N8TEcW7AM7t8yisj9UVZqMpfygfJIxmwdkpT7BPqI6VDQvbUT8CaNExam1oOd0uE_N2FWknfw?auto=format&w=1920',
      linkToDetails: ''
    },
    {
      name: 'MekaVerse',
      price: 3,
      imageURI: 'https://img.seadn.io/files/54a6e47cabe22aca5026f5d529b9b61a.png?auto=format&fit=max&w=512',
      linkToDetails: `/nft/${'name'}`
    },
    {
      name: 'King Ship',
      price: 8,
      imageURI: 'https://i.seadn.io/gcs/files/ef01ed322ffb9762c830c4fc72ce60ff.jpg?auto=format&w=1920',
      linkToDetails: `/nft/${'name'}`
    },
    {
      name: 'Frame Work',
      price: 1,
      imageURI: 'https://i.seadn.io/gcs/files/f60abf45d931438056c2ac7c17428e78.jpg?auto=format&w=1920',
      linkToDetails: `/nft/${'name'}`
    },
    {
      name: 'A Label',
      price: 5,
      imageURI: 'https://i.seadn.io/gcs/files/bdff5a61f0d6d6078ecea069dc8d321a.png?auto=format&w=1920',
      linkToDetails: `/nft/${'name'}`
    },
  ]

  return {
    props: {
      recentNFTs
    }
  }
}


