import React, { useState } from 'react'
import { useAppContext } from '../../contexts/AppContext';
import { ethers } from 'ethers';
import { NEAR_MARKETPLACE_ADDRESS } from '../../config/constants';
import { offer } from '../../contracts-connector/near/near-interface';
import { utils } from 'near-api-js';


export default function PurchaseButtons({ price, coinName, contractId, nftId }: { coinName: string, contractId: string, nftId: string, price: string }) {


  async function BuyOffer() {

    try {
      const tx = offer({
        nft_contract_id: 'artreus.danieldave.testnet',
        token_id: String(nftId),
        contractId: NEAR_MARKETPLACE_ADDRESS,
        deposit: utils.format.parseNearAmount(price)
      })

      console.log("receipt", tx);
      return tx
    } catch (buy_error: any) {
      console.log(buy_error)
    }
  }

  return (
    <div className='bg-[#e4e2e2] md:w-[400px] p-4 rounded-lg mt-6 flex justify-center'>
      <button onClick={BuyOffer} className='rounded-lg bg-brandyellow border border-black py-2 px-6 font-bold text-brandbrown'>Buy NFT for {price} {coinName}</button>
    </div>
  )
}

