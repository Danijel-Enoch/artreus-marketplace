import React, { useState } from 'react'
import { GetServerSidePropsContext } from 'next'
import supportedNetworts from '../../../supportedNetworks.json';
import PriceTag from '../../../components/nftPage/PriceTag';
import SocialLinks from '../../../components/SocialLinks';
import PurchaseButtons from '../../../components/nftPage/PurchaseButtons';
import CategoryCard from '../../../components/nftPage/CategoryCard';
import SimpleInfo from '../../../components/nftPage/SimpleInfo';
import ListNearNft from '../../../components/nftPage/ListNearNft';
import PropertiesDropDown, { Feature } from '../../../components/nftPage/PropertiesDropDown';
import DetailsDropDown from '../../../components/nftPage/DetailsDropDown';
import PriceHistoryDropDown from '../../../components/nftPage/PriceHistoryDropDown';
import MoreCollections from '../../../components/nftPage/MoreCollections';
import useWindowSize from '../../../hooks/useWindowSize';
import LikeButton from '../../../components/nftPage/LikeButton';
import MobileLikeAndShare from '../../../components/nftPage/MobileLikeAndShare';

import { MINTER_CONTRACT } from "../../../config/constants"
import { nft_tokens_for_owner, wallet } from '../../../contracts-connector/near/near-interface';


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
    const [listed, setListed] = useState(true)
    const [data, setdata] = useState([]);
    const [creators, setCreator] = useState("")

    const [connected, setConnected] = useState(false)
    const walletId = wallet.accountId



    React.useEffect(() => {
        wallet.startUp()
    }, [])

    React.useEffect(() => {
        if (wallet.connected) {
            setConnected(true)
        } else {
            setConnected(false)
        }
    }, [wallet.connected])

    async function main() {

        if (connected) {
            try {
                const l = await nft_tokens_for_owner(
                    {
                        account_id: walletId,
                        from_index: 0,
                        limit: 15
                    }
                )

                const d = l.filter(n => id == n.token_id)
                if (d) {
                    setCreator(d[0].owner_id)
                    var requestOptions: any = {
                        method: 'GET',
                        redirect: 'follow'
                    };

                    const newerData: any =
                        fetch("https://ipfs.io/ipfs/" + d[0].metadata, requestOptions)
                            .then(response => response.json())
                            .catch(error => console.log('error', error))

                    setdata(await newerData)
                }

            } catch (e) {
                console.log(e)
            }
        }
    }

    React.useEffect(() => {
        main()
    }, [connected])


    const size = useWindowSize()
    return (
        <>
            <div className='flex flex-col md:flex-row px-4 md:px-0'>
                <div className='md:w-5/12 relative'>
                    <div className='absolute top-4 right-4 text-white bg-[rgba(0,0,0,0.6)] px-2 py-1 rounded-md'>
                        {
                            listed ? "Listed" : "Not Listed"
                        }
                    </div>
                    <img src={"https://ipfs.io/ipfs/" + data.image_url} className="mt-4 md:mt-0 w-full  object-fit rounded-lg min-h-[500px]" />
                    {size.width && size.width >= 765 && (<PriceHistoryDropDown />)}


                </div>
                <div className='md:pl-16'>
                    {size.width && size.width < 765 && (<MobileLikeAndShare />)}

                    <SimpleInfo name={name} id={id} creator={creator} details={data.description} />

                    <PriceTag currentPrice='5.00' highestBid='8.00' coinName='NEAR' />

                    <ListNearNft floorPrice='5' dbId={id} jsonUri={jsonUri} mintAddress={mintAddress} listingPrice='0.02' coinName='NEAR' listed={setListed} />

                    <SocialLinks discord="" twitter='' website='' watchCount='' />

                    <PurchaseButtons price='5.00' nftId={id} contractId={MINTER_CONTRACT} coinName='NEAR' />

                    <div className='mt-16'>
                        {/* <PropertiesDropDown features={features}/> */}
                        <DetailsDropDown mintAddress={creators} tokenAddress={tokenAddress} ownerAddress={walletId} royaltyPercentage={royaltyPercentage} transactionFeePercentage={transactionFeePercentage} marketplaceFee={marketplaceFee} />
                        {/* {size.width&&size.width < 765&&(<PriceHistoryDropDown/>)}    */}
                    </div>
                    {/* <CategoryCard categories={categories}/> */}


                </div>
                {size.width && size.width >= 765 && (<LikeButton />)}



            </div>
            <MoreCollections />
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const params = context.params;
    const path: any = params?.nft;
    //if(path){
    const network = path[0]
    const address = path[1]
    const tokenId = path[2]
    // const idnew = path[3]
    let mine: any;

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

