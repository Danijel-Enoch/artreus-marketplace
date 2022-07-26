import React from 'react'
import DropDown from './DropDown';

const Detail=({label,value}:{label:string,value:string})=>{
return(
    <li className='flex justify-between'>{label}: <span className='block'>{value}</span></li>
)
}
type props={
 mintAddress:string,
 tokenAddress:string,
 ownerAddress:string,
 royaltyPercentage:number,
 transactionFeePercentage:number,
 marketplaceFee:string

}
export default function DetailsDropDown({marketplaceFee,mintAddress,tokenAddress,ownerAddress,royaltyPercentage,transactionFeePercentage}:props) {
  return (
    <div className='mt-2'>
    <DropDown label="Details">
         <ul className='px-4 text-brandbrown font-bold'>
             <Detail label='Mint Address' value={mintAddress}/>
             <Detail label='Token Address' value={tokenAddress}/>
             <Detail label='Owner Address' value={ownerAddress}/>
             <Detail  label="Artist Royalties" value={`${royaltyPercentage}%`}/>
             <Detail  label="Transaction Fee" value={`${transactionFeePercentage}%`}/>
             <Detail  label="Listing/Bidding/Cancel" value={marketplaceFee}/>
         </ul>
    </DropDown></div>
  )
}
