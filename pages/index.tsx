
import RecentlyListedNfts from '../components/homepage/RecentlyListedNfts'
import type { NFT } from '../components/homepage/RecentlyListedNfts';

import { useEffect, useState } from 'react'

import { get_sales_by_nft_contract_id, nft_tokens, nearWallet, get_sales_by_owner_id } from '../contracts-connector/near/near-interface'

import { NEAR_MARKETPLACE_ADDRESS } from '../config/constants';
import HighestSalesNfts from '../components/homepage/HighestSalesNfts';
import UpcomingLaunches from '../components/homepage/UpcomingLaunches';

type props = {
  recentNFTs: any,
  highestSoldNFTs: any,
  upcomingNFTs: any
}

export default function Home({ recentNFTs, highestSoldNFTs, upcomingNFTs }: props) {


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
      <div className='space-y-4 S'>
        {isLoaded && <RecentlyListedNfts recentNFTs={data} />}
        <HighestSalesNfts highestSoldNFTs={highestSoldNFTs} />
        <UpcomingLaunches upcomingNFTs={upcomingNFTs} />
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

  const highestSoldNFTs: any = [
    {
      name: 'Crypto Birdies',
      price: 3,
      imageURI: 'https://i.seadn.io/gcs/files/154ea199ed44bbe15fad24be55952265.gif?auto=format&w=1920',
      tokenId: ''
    },
    {
      name: 'MekaVerse',
      price: 3,
      imageURI: 'https://img.seadn.io/files/54a6e47cabe22aca5026f5d529b9b61a.png?auto=format&fit=max&w=512',
      tokenId: ''
    },
    {
      name: 'Tron Warz',
      price: 5,
      imageURI: 'https://i.seadn.io/gcs/files/1e6ac237b1336f329030a3a312049f2a.png?auto=format&w=1920',
      tokenId: ''
    },
    {
      name: 'TsuKimi',
      price: 3,
      imageURI: 'https://i.seadn.io/gcs/files/2dcc373f150631b61e0fd0c45d18bee5.png?auto=format&w=1920',
      tokenId: ''
    },
    {
      name: 'Fantastic Mysteries',
      price: 1,
      imageURI: 'https://i.seadn.io/gae/PY0pGSV5rPsXXePEUeOabUZUwhI3ViUogQdoEiWNYhcY7jxFDssr6IBboUSUKe9ugqlbIa-XDElDFoZXvkkM5PwxA_fijtkpjVL1dg?auto=format&w=512',
      tokenId: ''
    },
    {
      name: 'Killabits',
      price: 2,
      imageURI: 'https://i.seadn.io/gcs/files/da6c85dade2452fbed34b935e1909318.png?auto=format&w=1920',
      tokenId: ''
    },
  ]

  const upcomingNFTs: any = [
    {
      name: 'DYI-OLD',
      imageURI: 'https://i.seadn.io/gae/7xjqqhHqmsTwpotmW-xj6Suhu2IcpoSXaE6ZSkgSjjeHj6WRBM_U_9sXJIRYA0iGahc8ROXKxpdCemV707Ad5oFuqOjRWHdMviStNMw?auto=format&w=1920',
      tokenId: ''
    },
    {
      name: 'KillaBits',
      imageURI: 'https://i.seadn.io/gcs/files/da6c85dade2452fbed34b935e1909318.png?auto=format&w=1920',
      tokenId: ''
    },
    {
      name: 'Social-BEEs',
      imageURI: 'https://i.seadn.io/gcs/files/d0cdf15b6de3ff18f047102ef4897fe6.png?auto=format&w=1920',
      tokenId: ''
    },
    {
      name: 'GoblinTown',
      imageURI: 'https://i.seadn.io/gae/cb_wdEAmvry_noTfeuQzhqKpghhZWQ_sEhuGS9swM03UM8QMEVJrndu0ZRdLFgGVqEPeCUzOHGTUllxug9U3xdvt0bES6VFdkRCKPqg?auto=format&w=1920',
      tokenId: ''
    },
    {
      name: 'Exo Sama',
      imageURI: 'https://i.seadn.io/gcs/files/725700d73c8459bc9e3b29eed95670d8.png?auto=format&w=1920',
      tokenId: ''
    },
    {
      name: 'Imposter Aliens',
      imageURI: 'https://i.seadn.io/gae/c-Z_v9W9Ege04QdpjzSsQQIkDR1h4tnBVgwgg9DBuJKdfpmziz9SBOEFBE3EjKW8XESxR_mndEtFFhhxyYUgEwZVAL32uBmQr4H1lQ?auto=format&w=1920',
      tokenId: ''
    },
    {
      name: 'StickMen Toys',
      imageURI: 'https://i.seadn.io/gcs/files/2d21367a0bdef1d9db4505e86dba8fdd.gif?auto=format&w=1920',
      tokenId: ''
    },
  ]

  return {
    props: {
      recentNFTs,
      highestSoldNFTs,
      upcomingNFTs
    }
  }
}


