import React, { useState } from 'react'
import { ethers } from 'ethers';
import { useAppContext } from '../../contexts/AppContext';
import axios from 'axios';
import { MARKETPLACE_ADDRESS, MINTER_CONTRACT } from '../../config/constants';
export default function PriceTag({ floorPrice, listingPrice, coinName, listed, jsonUri, ownerAddress, mintAddress, dbId }) {
  const [nftListed, setNftListed] = useState(true)
  const [currentPrice, setCurrentPrice] = useState(0)
  const [buyer, setbuyer] = useState(false)
  const [price, setprice] = useState("")
  const app = useAppContext()
  let nft;


  async function getAllAuctions() {
    const address = MARKETPLACE_ADDRESS;
    const abi = [
      "function getAllAuctions() view returns (tuple(uint256 offerId, uint256 id, address user, uint256 price, bool fulfilled, bool cancelled)[])"
    ];
    const contract = new ethers.Contract(address, abi, app.provider);
    const result = await contract.functions.getAllAuctions();

    //console.log("result", result[0]);
    for (let index = 0; index < result[0].length; index++) {
      const element = result[0][index][1];
      if (parseInt(element.toString()) === dbId && parseInt(result[0][index].price.toString()) > 0) { }
      setNftListed(false)
      setCurrentPrice(parseInt(result[0][index].price.toString()))
      listed(false)
      if (result[0][index][2] === app.account) {
        setbuyer(true)
      }

    }
  }


  //conso



  async function approve(_nftId) {
    _nftId = dbId
    const address = MINTER_CONTRACT;
    const abi = [
      "function approve(address to, uint256 tokenId)"
    ];
    try {

      const contract = new ethers.Contract(address, abi, app.signer);
      const tx = await contract.functions.approve(MARKETPLACE_ADDRESS, parseInt(_nftId));

      const receipt = await tx.wait();
      console.log("receipt", receipt);
      alert("approval Successful")
    } catch (e) {
      console.log(e)
      alert("error", e)
    }
  }



  async function makeOffer(price, _nftId, nft_contract_address) {
    _nftId = dbId
    const address = MARKETPLACE_ADDRESS;
    const abi = [
      "function makeOffer(uint256 _id, uint256 _price, address nft_contract_address) payable"
    ];
    try {
      const contract = new ethers.Contract(address, abi, app.signer);
      const tx = await contract.functions.makeOffer(parseInt(_nftId), parseInt(price), MINTER_CONTRACT, { value: ethers.utils.parseEther("0.02") });

      const receipt = await tx.wait();
      console.log("receipt", receipt);
      alert("Listed Successfully")
    } catch (e) {
      alert("error occured")
      console.log(e)
    }

  }
  //console.log(price)
  async function main() {
    if (app.connected) {
      await getAllAuctions()
    }
    // console.log(dbId)
    // makeOffer(price,nft,mintAddress);
  }
  main()
  return (
    <div className='p-4 bg-[#e4e2e2] md:w-[400px]  rounded-lg mt-4'>
      <div className='flex justify-between text-brandbrown'>

        {(nftListed === true) ? (<div>
          <h4>Listing Price</h4>
          <span className='font-bold'> {currentPrice} {coinName}</span>
        </div>) : <>{currentPrice}</>}


      </div>

      <div className='w-full mt-2'>
        <input type="number" min="0" onChange={(e) => setprice(e.target.value)} placeholder="List Price" inputMode="decimal" name="sell" step="0.1" className='w-full h-10 rounded-md outline-none border-brandbrown border bg-[#e4e2e2] p-4' />
      </div>


      {/* {console.log("wallet connected:" + app.account, "creator: " + ownerAddress)} */}
      <div className='flex justify-center mt-4'>
        <>
          <button onClick={() => makeOffer(price, nft, mintAddress)} className='py-2 px-6 bg-brandbrown text-brandyellow rounded-md flex'><span className='block font-bold mr-1'><svg
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
          <button onClick={() => approve(nft)} className='py-2 px-6 bg-brandbrown text-brandyellow rounded-md flex'><span className='block font-bold mr-1'><svg
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
          </svg></span>Approve</button>
        </>
      </div>

    </div>
  )
}