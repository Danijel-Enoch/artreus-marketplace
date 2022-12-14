import React, { useState } from 'react'
import { ethers } from 'ethers';
import { useAppContext } from '../../contexts/AppContext';

import { MINTER_CONTRACT, NEAR_MARKETPLACE_ADDRESS } from '../../config/constants';
import { nft_approve, storage_deposit, nearWallet, get_supply_sales } from '../../contracts-connector/near/near-interface';

import { utils } from 'near-api-js';


export default function PriceTag({ floorPrice, listingPrice, coinName, listed, jsonUri, ownerAddress, mintAddress, tokenId }) {

    const [price, setprice] = useState("")
    const [storageAmount, setStorageAmount] = useState("")

    React.useEffect(() => {
        nearWallet.startUp()
    }, [])


    async function approve() {
        if (price != '')
            try {
                const tx = await nft_approve({
                    token_id: String(tokenId),
                    account_id: NEAR_MARKETPLACE_ADDRESS,
                    msg: JSON.stringify({
                        sale_conditions: {
                            price: utils.format.parseNearAmount(price),
                        }
                    }),
                    deposit: utils.format.parseNearAmount('1')
                })

            } catch (e) {
                console.log(e)
            }
    }

    async function storageDeposit() {
        if (storageAmount != '')
            try {
                const bal = await storage_deposit({
                    account_id: nearWallet.accountId,
                    contractId: NEAR_MARKETPLACE_ADDRESS,
                    deposit: utils.format.parseNearAmount(storageAmount)
                })

            } catch (e) {
                console.log(e)
                alert("error", e)
            }
    }

    return (
        <div className='p-4 bg-[#e4e2e2] md:w-[95%]  rounded-lg mt-4'>
            <div className='flex justify-between text-brandpurple'>

            </div>

            <div className='flex justify-center'>
                <div className='w-[90%]  justify-center flex-col flex'>
                    <input type="number" min="0" onChange={(e) => setprice(e.target.value)} placeholder="List Price" inputMode="decimal" name="sell" step="0.1" className='w-full h-10 rounded-md bg-white outline-none border-brandpurple border p-2' />

                    <button onClick={() => approve()} className='py-2 mt-2 px-3 bg-brandbrown text-brandyellow rounded-md w-fit flex'><span className='block font-bold mr-1'><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className='inline mr-1'
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            fill="#FFB300"
                            d="M7.391.724c-.25-.25-.589-.39-.942-.39H1.667A1.333 1.333 0 00.334 1.666v4.781c0 .354.14.693.39.943l5.334 5.333a1.333 1.333 0 001.885 0l4.782-4.781a1.334 1.334 0 000-1.886L7.39.724zM3.667 5a1.334 1.334 0 11.001-2.667 1.334 1.334 0 010 2.667z"
                        ></path>
                    </svg></span>List Nft</button>
                </div>


                <div className='flex flex-col w-[90%]'>
                    <input type="number" min="0" onChange={(e) => setStorageAmount(e.target.value)} placeholder="Deposit Amount" inputMode="decimal" name="sell" step="0.1" className='w-[60%] h-10 rounded-md bg-white outline-none border-brandpurple border p-2' />

                    <button onClick={() => storageDeposit()} className='py-2 mt-2 px-3 bg-brandbrown text-brandyellow w-fit rounded-md flex'><span className='block font-bold mr-1'><svg
                        xmlns="http://www.w3.org/2000/svg"
                        className='inline mr-1'
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            fill="#FFB300"
                            d="M7.391.724c-.25-.25-.589-.39-.942-.39H1.667A1.333 1.333 0 00.334 1.666v4.781c0 .354.14.693.39.943l5.334 5.333a1.333 1.333 0 001.885 0l4.782-4.781a1.334 1.334 0 000-1.886L7.39.724zM3.667 5a1.334 1.334 0 11.001-2.667 1.334 1.334 0 010 2.667z"
                        ></path>
                    </svg></span>Deposit</button>
                </div>
            </div>

        </div>
    )
}