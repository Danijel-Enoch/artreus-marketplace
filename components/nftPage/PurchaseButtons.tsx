import React, { useState } from 'react'
import { useAppContext } from '../../contexts/AppContext';
import { ethers } from 'ethers';
import { NEAR_MARKETPLACE_ADDRESS } from '../../config/constants';

export default function PurchaseButtons({ coinName, contractId, nftId }: { coinName: string, contractId: string, nftId: string, price: string }) {
  const [offerId, setOfferId] = useState('0');
  const [price, setprice] = useState("0")
  const app = useAppContext()


  // async function BuyOffer() {

  // }

  //fillOffer();
  return (
    <div className='bg-[#e4e2e2] md:w-[400px] p-4 rounded-lg mt-6 flex justify-center'>
      <button className='rounded-lg bg-brandyellow border border-black py-2 px-6 font-bold text-brandbrown'>Buy NFT for 20 {coinName}</button>
    </div>
  )
}

