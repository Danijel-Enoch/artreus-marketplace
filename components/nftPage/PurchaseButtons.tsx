import React,{useState} from 'react'
import { useAppContext } from '../../contexts/AppContext';
import { ethers } from 'ethers';
import { MARKETPLACE_ADDRESS } from '../../config/constants';
export default function PurchaseButtons({coinName,contractId,nftId}:{coinName:string,contractId:string,nftId:string}) {
  const[offerId,setOfferId]=useState('0');
  const [price,setprice]=useState("0")
  const app=useAppContext()
  async function getAllAuctions() {
    const address = MARKETPLACE_ADDRESS;
    const abi = [
      "function getAllAuctions() view returns (tuple(uint256 offerId, uint256 id, address user, uint256 price, bool fulfilled, bool cancelled)[])"
    ];
    const contract = new ethers.Contract(address, abi, app.provider);
    const result = await contract.functions.getAllAuctions();

    //console.log("result", result[0]);
    for (let index = 0; index < result[0].length; index++) {
      const element = result[0][index];
      if (result[0][index][1].toString() === nftId && parseInt(result[0][index].price.toString()) > 0) { 
        //console.log(element.price.toString())
        setprice(element.price.toString())
        setOfferId(result[0][index][0].toString())
      console.log(result[0][index][2]) 
      }else{
       // console.log(price)
        console.log("This nft has not been listed")
        console.log(offerId)
      }
     
      

    }
  }



async function BuyOffer() {
  getAllAuctions()
  const address = MARKETPLACE_ADDRESS;
  const abi = [
    "function fillOffer(uint256 _offerId, address nft_contract_address) payable"
  ];
	const contract = new ethers.Contract(address, abi, app.signer);   
	const tx = await contract.functions.fillOffer(offerId,contractId,{value: ethers.utils.parseEther(price)});

	const receipt = await tx.wait();
	console.log("receipt", receipt);
}

//fillOffer();
  return (
    <div className='bg-[#e4e2e2] md:w-[400px] p-4 rounded-lg mt-6 flex justify-between'>
<<<<<<< Updated upstream
        <button onClick={()=>BuyOffer()} className='rounded-lg bg-brandyellow border border-black py-2 px-6 font-bold text-brandbrown'>Buy NFT with  {coinName}</button>
=======
        <button className='rounded-lg bg-brandyellow border border-black py-2 px-6 font-bold text-brandpurple'>Buy for {price} {coinName}</button>
        <button className='rounded-lg bg-[#ccc] text-[#444] py-2 px-6 font-bold'>Place Bid</button>
>>>>>>> Stashed changes
    </div>
  )
}

