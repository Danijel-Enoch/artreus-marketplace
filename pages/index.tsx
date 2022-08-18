import type { NextPage } from 'next'
import FeaturedNfts, { FeaturedNft } from '../components/homepage/FeaturedNfts'

import NewCollections from '../components/homepage/NewCollections'
import type { NewCollectionNft } from '../components/homepage/NewCollections'
import LearnArts from '../components/homepage/LearnArts'
import PopularCollections from '../components/homepage/PopularCollections'
import RecentlyListedNfts from '../components/homepage/RecentlyListedNfts'
import HighestSalesNfts from '../components/homepage/HighestSalesNfts'
import UpcomingLaunches from '../components/homepage/UpcomingLaunches'
import useContract from '../hooks/useContract'
import { useEffect, useState } from 'react'
import { ArtreusMarketplace } from '../contract-types'
type props = {
  newCollectionNfts: NewCollectionNft[]
  featuredNfts: FeaturedNft[]
}
export default function Home({ newCollectionNfts, featuredNfts }: props) {
  const [unsoldNFTS, setUnsoldNFTS] = useState<ArtreusMarketplace.ItemStructOutput[]>();
  const instance = useContract();

  useEffect(() => {
    (
      async () => {
        if (instance) {
          const items = await instance.getAllUnsoldItems();
          setUnsoldNFTS(items);
        }
      }
    )()

  }, [instance])


  return (
    <>
      <FeaturedNfts featuredNfts={featuredNfts} />
      <div className='space-y-16'>
        <NewCollections newCollectionNfts={newCollectionNfts} />
        <LearnArts />
        <PopularCollections />
        <RecentlyListedNfts />
        <HighestSalesNfts />
        <UpcomingLaunches />
      </div>

    </>


  )
}

export async function getServerSideProps() {
  const featuredNfts: FeaturedNft[] = [
    {
      name: "Super Cool World",
      description: `Nina Chanel’s Super Cool World is a collection of 5,080 NFTs (non-fungible tokens) that are made up of hundreds of traits designed by Nina
     Chanel Abney that reflect her frenetic collage-like approach to visual media.`,
      imageUrl: "https://openseauserdata.com/files/8d9f9dc8ed913e52052301f0d59515e8.png"
    },
    {
      name: "MNLTHRVLD",
      description: `TFKT, together with Nike, introduces the first RTFKT x NIKE CRYPTOKICKS NFT: 
    The RTFKT X NIKE DUNK GENESIS CRYPTOKICKS Sneaker Powered by DRM OS and Skin Vial Tech.`,
      imageUrl: "https://lh3.googleusercontent.com/bb9Z1Ldv6zTgZI1wI962RE_M_k7-595wr3a1Jgjsw1jx2MZf0FvV4uO4eEcA7LnDvLM-hAnazAgJIzAPMDo7sPKFIMvGOxpQ3mMEzmA=s2500"
    },
    {
      name: "Factura by Mathias Isaksen",
      description: `gm. studio presents 'Factura' by Mathias Isaksen, a generative series exploring the monolithic and minute.`,
      imageUrl: "https://openseauserdata.com/files/89eef3a48ea1a2c54158bcd7c97bdd4f.png"
    },
    {
      name: "The Currency",
      description: `ENI is delighted to present The Currency, the first NFT collection by Damien Hirst. Reimagining the way NFTs are used, The Currency is a collection of 10,000 NFTs which correspond to 10,000 unique physical artworks which are stored in a secure vault in the UK. 
    The works are now brought to life through their launch on the blockchain.`,
      imageUrl: "https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xaadc2d4261199ce24a4b0a57370c4fcf43bb60aa/avatar/QmaKSftwoc9mh29RK2Z8QrX8fEostfghuYojvaMe2A1Cck"
    }
  ]
  const newCollectionNfts: NewCollectionNft[] = [{
    name: 'Bored ape',
    tokenId: "",
    imageUri: "https://looksrare.mo.cloudinary.net/0xB852c6b5892256C264Cc2C888eA462189154D8d7/0xd2327da5643a4d18e7e46942576e4378f4c0066b3394c139bdc2ffac26640940?resource_type=image&f=auto&c=limit&w=360&q=auto"
  },
  {
    name: "Space moon",
    tokenId: "",
    imageUri: "https://looksrare.mo.cloudinary.net/0x7f2E7C52217C8c333f24e2fe2EB371D5eE9669a3/0x08fc33e7f75839ab315c16d85a229f5b16391a6f56b649cfe31eed7c3f4721fc?resource_type=image&f=auto&c=limit&w=360&q=auto"
  }, {
    name: "Moon cats",
    tokenId: "",
    imageUri: "https://looksrare.mo.cloudinary.net/0x4Ef3D9EaB34783995bc394d569845585aC805Ef8/0x4f59e19a0a20536044279f58ad0f44e9e3a2b9fb733c6b811219b9ce9f84fd13?resource_type=image&f=auto&c=limit&w=360&q=auto"
  }, {
    name: "Spider Monkey",
    tokenId: "",
    imageUri: "https://looksrare.mo.cloudinary.net/0x929832b1f1515cf02c9548A0fF454f1B0E216B18/0x7da14363df623d3260cfcbcb890d6af26df964b7bd33c3f2e201d5accdd0db06?resource_type=image&f=auto&c=limit&w=360&q=auto"
  }, {
    name: "Blind Bats",
    tokenId: "",
    imageUri: "https://looksrare.mo.cloudinary.net/0x9efAe25f19a633BEca03C799aB6Fb5Da1766559C/0x4240f4576b1a50417f882d1a769a094f77e96168f71e44af41b21622de118e58?resource_type=image&f=auto&c=limit&w=360&q=auto"
  }]

  return {
    props: {
      newCollectionNfts,
      featuredNfts
    }
  }
}


