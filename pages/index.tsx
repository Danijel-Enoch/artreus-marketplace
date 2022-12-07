import type { NextPage } from 'next'
// import FeaturedNfts, { FeaturedNft } from '../components/homepage/FeaturedNfts'

// import NewCollections from '../components/homepage/NewCollections'
// import type { NewCollectionNft } from '../components/homepage/NewCollections'
// import LearnArts from '../components/homepage/LearnArts'
// import type { artVideos } from '../components/homepage/LearnArts'
// import PopularCollections from '../components/homepage/PopularCollections'
// import RecentlyListedNfts from '../components/homepage/RecentlyListedNfts'
// import type { NFT } from '../components/homepage/RecentlyListedNfts';
// import HighestSalesNfts from '../components/homepage/HighestSalesNfts'
// import type { highestNFTs } from '../components/homepage/HighestSalesNfts'
// import UpcomingLaunches from '../components/homepage/UpcomingLaunches'
// import type { Upcoming } from '../components/homepage/UpcomingLaunches'
import useContract from '../hooks/useContract'
import { useEffect, useState } from 'react'
import { ArtreusMarketplace } from '../contract-types'
import Link from 'next/link'


// type props = {
//   newCollectionNfts: NewCollectionNft[]
//   featuredNfts: FeaturedNft[]
//   learnArts: artVideos[]
//   recentNFTs: NFT[]
//   highestSoldNFTs: highestNFTs[]
//   upcomingNFTs: Upcoming[]
// }

// newCollectionNfts, featuredNfts, learnArts, recentNFTs, highestSoldNFTs, upcomingNFTs
// { }: props

export default function Home() {
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
      {/* <FeaturedNfts featuredNfts={featuredNfts} />
      <div className='space-y-16'>
        { <NewCollections newCollectionNfts={newCollectionNfts} /> }
        <LearnArts learnArts={learnArts} />
        <PopularCollections />
        <RecentlyListedNfts recentNFTs={recentNFTs} />
        <HighestSalesNfts highestSoldNFTs={highestSoldNFTs} />
        <UpcomingLaunches upcomingNFTs={upcomingNFTs} /> 
    </div> */}
      < div > index</div >
    </>


  )
}

// export async function getServerSideProps() {
//   const featuredNfts: FeaturedNft[] = [
//     {
//       name: "Super Cool World",
//       description: `Nina Chanel’s Super Cool World is a collection of 5,080 NFTs (non-fungible tokens) that are made up of hundreds of traits designed by Nina
//      Chanel Abney that reflect her frenetic collage-like approach to visual media.`,
//       imageUrl: "/space_ape.png"
//     },
//     {
//       name: "MNLTHRVLD",
//       description: `TFKT, together with Nike, introduces the first RTFKT x NIKE CRYPTOKICKS NFT:
//     The RTFKT X NIKE DUNK GENESIS CRYPTOKICKS Sneaker Powered by DRM OS and Skin Vial Tech.`,
//       imageUrl: "https://lh3.googleusercontent.com/bb9Z1Ldv6zTgZI1wI962RE_M_k7-595wr3a1Jgjsw1jx2MZf0FvV4uO4eEcA7LnDvLM-hAnazAgJIzAPMDo7sPKFIMvGOxpQ3mMEzmA=s2500"
//     },
//     {
//       name: "Factura by Mathias Isaksen",
//       description: `gm. studio presents 'Factura' by Mathias Isaksen, a generative series exploring the monolithic and minute.`,
//       imageUrl: "https://openseauserdata.com/files/89eef3a48ea1a2c54158bcd7c97bdd4f.png"
//     },
//     {
//       name: "The Currency",
//       description: `ENI is delighted to present The Currency, the first NFT collection by Damien Hirst. Reimagining the way NFTs are used, The Currency is a collection of 10,000 NFTs which correspond to 10,000 unique physical artworks which are stored in a secure vault in the UK.
//     The works are now brought to life through their launch on the blockchain.`,
//       imageUrl: "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=1060&t=st=1669556954~exp=1669557554~hmac=dc6bd97e6bd60f259ea998274b53ada7b5111ebec29f8ddf2b0a76c657d1b6c5"
//     }
//   ]

//   const learnArts: artVideos[] = [
//     {
//       name: 'Treeverse Plots',
//       description: 'MetaVerse Lands',
//       imageUrl: 'https://i.seadn.io/gcs/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb-featured-1556589448.png?auto=format&w=1920'
//     },
//     {
//       name: 'Za Warudo',
//       description: 'NFTs Worlds',
//       imageUrl: 'https://i.seadn.io/gcs/files/3776dbd44f3b34e72784856cd4da3a65.jpg?auto=format&w=1920'
//     },
//     {
//       name: 'Unreal Engine 5',
//       description: 'NFTs meet VFX',
//       imageUrl: 'https://i.seadn.io/gcs/files/e6216e17265481b01b1e62690588a169.jpg?auto=format&w=1920'
//     },
//     {
//       name: 'Crypto Punks',
//       description: 'NFTs meet VFX',
//       imageUrl: 'https://i.seadn.io/gae/YhFNM3GpVLCmhT_aVdzEcDfJSjaoqV8-gwrG56ukc9zJqIHqEuw05o_jwf-_cZ8yEAa645GJTtKN7XovzEUNisk_8wuK6X3ae23B3Q?auto=format&w=1920'
//     },
//     {
//       name: 'Street Machine',
//       description: 'NFTs meet VFX',
//       imageUrl: 'https://i.seadn.io/gae/nte50or2bnbeXYvjWKJCQ1pRcTlOncRYsvEEx0Z97rD_K1Rv8L0RVr5CCfFdu5r2qgVsS1032B_BL6gGg2NXm2TXQ0BdVyG0Z8S2-A?auto=format&w=1920'
//     },
//     {
//       name: 'Black Box',
//       description: 'NFTs meet VFX',
//       imageUrl: 'https://i.seadn.io/gcs/files/0d6ea6d36500f5316d8224fdfee91ad8.png?auto=format&w=1920'
//     },
//     {
//       name: 'Code Elysium',
//       description: 'NFTs meet VFX',
//       imageUrl: 'https://i.seadn.io/gae/kbLlEr7B0_YWvbct5NzwoTe4ci5oqFSMnKvMiqWYfRyr2AE35f6okSPR2qkK03toO1sBmJqz1L9s6FcU-2GKuXBvSUsg7HfnqzRkCQU?auto=format&w=1920'
//     },
//   ]

//   const recentNFTs: NFT[] = [
//     {
//       name: 'Cool Cats',
//       price: 10,
//       imageURI: 'https://i.seadn.io/gcs/files/f588756f5ef067f1b856a25d37f22ec0.png?auto=format&w=1920',
//       linkToDetails: ''
//     },
//     {
//       name: 'LoFi Guys',
//       price: 5,
//       imageURI: 'https://i.seadn.io/gae/FfS6UXeTqf0cE9efVlKYPALCOcru9N8TEcW7AM7t8yisj9UVZqMpfygfJIxmwdkpT7BPqI6VDQvbUT8CaNExam1oOd0uE_N2FWknfw?auto=format&w=1920',
//       linkToDetails: ''
//     },
//     {
//       name: 'MekaVerse',
//       price: 3,
//       imageURI: 'https://img.seadn.io/files/54a6e47cabe22aca5026f5d529b9b61a.png?auto=format&fit=max&w=512',
//       linkToDetails: ''
//     },
//     {
//       name: 'King Ship',
//       price: 8,
//       imageURI: 'https://i.seadn.io/gcs/files/ef01ed322ffb9762c830c4fc72ce60ff.jpg?auto=format&w=1920',
//       linkToDetails: ''
//     },
//     {
//       name: 'Frame Work',
//       price: 1,
//       imageURI: 'https://i.seadn.io/gcs/files/f60abf45d931438056c2ac7c17428e78.jpg?auto=format&w=1920',
//       linkToDetails: ''
//     },
//     {
//       name: 'A Label',
//       price: 5,
//       imageURI: 'https://i.seadn.io/gcs/files/bdff5a61f0d6d6078ecea069dc8d321a.png?auto=format&w=1920',
//       linkToDetails: ''
//     },
//   ]

//   const highestSoldNFTs: highestNFTs[] = [
//     {
//       name: 'Crypto Birdies',
//       price: 3,
//       imageURI: 'https://i.seadn.io/gcs/files/154ea199ed44bbe15fad24be55952265.gif?auto=format&w=1920',
//       tokenId: ''
//     },
//     {
//       name: 'MekaVerse',
//       price: 3,
//       imageURI: 'https://img.seadn.io/files/54a6e47cabe22aca5026f5d529b9b61a.png?auto=format&fit=max&w=512',
//       tokenId: ''
//     },
//     {
//       name: 'Tron Warz',
//       price: 5,
//       imageURI: 'https://i.seadn.io/gcs/files/1e6ac237b1336f329030a3a312049f2a.png?auto=format&w=1920',
//       tokenId: ''
//     },
//     {
//       name: 'TsuKimi',
//       price: 3,
//       imageURI: 'https://i.seadn.io/gcs/files/2dcc373f150631b61e0fd0c45d18bee5.png?auto=format&w=1920',
//       tokenId: ''
//     },
//     {
//       name: 'Fantastic Mysteries',
//       price: 1,
//       imageURI: 'https://i.seadn.io/gae/PY0pGSV5rPsXXePEUeOabUZUwhI3ViUogQdoEiWNYhcY7jxFDssr6IBboUSUKe9ugqlbIa-XDElDFoZXvkkM5PwxA_fijtkpjVL1dg?auto=format&w=512',
//       tokenId: ''
//     },
//     {
//       name: 'Killabits',
//       price: 2,
//       imageURI: 'https://i.seadn.io/gcs/files/da6c85dade2452fbed34b935e1909318.png?auto=format&w=1920',
//       tokenId: ''
//     },
//   ]

//   const upcomingNFTs: Upcoming[] = [
//     {
//       name: 'DYI-OLD',
//       imageURI: 'https://i.seadn.io/gae/7xjqqhHqmsTwpotmW-xj6Suhu2IcpoSXaE6ZSkgSjjeHj6WRBM_U_9sXJIRYA0iGahc8ROXKxpdCemV707Ad5oFuqOjRWHdMviStNMw?auto=format&w=1920',
//       tokenId: ''
//     },
//     {
//       name: 'KillaBits',
//       imageURI: 'https://i.seadn.io/gcs/files/da6c85dade2452fbed34b935e1909318.png?auto=format&w=1920',
//       tokenId: ''
//     },
//     {
//       name: 'Social-BEEs',
//       imageURI: 'https://i.seadn.io/gcs/files/d0cdf15b6de3ff18f047102ef4897fe6.png?auto=format&w=1920',
//       tokenId: ''
//     },
//     {
//       name: 'GoblinTown',
//       imageURI: 'https://i.seadn.io/gae/cb_wdEAmvry_noTfeuQzhqKpghhZWQ_sEhuGS9swM03UM8QMEVJrndu0ZRdLFgGVqEPeCUzOHGTUllxug9U3xdvt0bES6VFdkRCKPqg?auto=format&w=1920',
//       tokenId: ''
//     },
//     {
//       name: 'Exo Sama',
//       imageURI: 'https://i.seadn.io/gcs/files/725700d73c8459bc9e3b29eed95670d8.png?auto=format&w=1920',
//       tokenId: ''
//     },
//     {
//       name: 'Imposter Aliens',
//       imageURI: 'https://i.seadn.io/gae/c-Z_v9W9Ege04QdpjzSsQQIkDR1h4tnBVgwgg9DBuJKdfpmziz9SBOEFBE3EjKW8XESxR_mndEtFFhhxyYUgEwZVAL32uBmQr4H1lQ?auto=format&w=1920',
//       tokenId: ''
//     },
//     {
//       name: 'StickMen Toys',
//       imageURI: 'https://i.seadn.io/gcs/files/2d21367a0bdef1d9db4505e86dba8fdd.gif?auto=format&w=1920',
//       tokenId: ''
//     },
//   ]

//   return {
//     props: {
//       featuredNfts,
//       learnArts,
//       recentNFTs,
//       highestSoldNFTs,
//       upcomingNFTs
//     }
//   }
// }


