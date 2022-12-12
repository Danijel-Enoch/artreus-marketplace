import React from 'react'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'
import Link from 'next/link'

export type NFT = {
    name: string,
    price: number,
    imageURI: string,
    linkToDetails: string
}

const RecentNfts = ({ name, price, imageURI, linkToDetails }: { name: string, price: number, imageURI: string, linkToDetails: string }) => {
    return (
        <div className='w-[47%] md:w-[33.33%] lg:w-[25%] xl:w-[20%] p-2 inline-block rounded-[5px]'>
            <Image alt={name} width={250} height={250} src={"https://ipfs.io/ipfs/" + imageURI} className='rounded-t-[5px] w-[100%] h-[230px] object-cover' />
            <div className='bg-brandpurple p-2 text-white rounded-b-[5px]'>
                <p className='text-center font-semibold'>{name}</p>
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex space-x-2'>
                        <Image alt='near logo' src={`/near.png`} width={18} height={13} />
                        <p>{price}</p>
                    </div>
                    <div>
                        <Link href={linkToDetails}>
                            <button className='border rounded-sm border-brandyellow py-1 px-6'>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function RecentlyListedNfts({ recentNFTs, id }: { recentNFTs: [], id: number }) {

    return (
        <div>
            <SectionTitle title="Recently Listed NFTs" />
            <div className='mx-auto'>
                {recentNFTs.map((data, id) => (
                    <RecentNfts key={data.id} name={data?.data.name} price={10} imageURI={data.data.image_url} linkToDetails={`/nft/${data.id}`} />
                ))}
            </div>
        </div>
    )
}

