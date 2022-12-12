import React from 'react'
import DropDown from './DropDown';

const Detail = ({ label, value }: { label: string, value: string }) => {
  return (
    <li className='flex justify-between'>{label}: <span className='block'>{value}</span></li>
  )
}
type props = {
  ownerAddress: string,
  storageBalance: string,
  royaltyPercentage: number,
  transactionFeePercentage: number,
  marketplaceFee: string

}
export default function DetailsDropDown({ marketplaceFee, storageBalance, ownerAddress, royaltyPercentage, transactionFeePercentage }: props) {
  return (
    <div className='mt-2'>
      <DropDown label="Details">
        <ul className='px-4 text-brandpurple font-bold'>
          <Detail label='Owner Address' value={ownerAddress} />
          <Detail label='Storage Balance' value={storageBalance} />
          <Detail label="Artist Royalties" value={`${royaltyPercentage}%`} />
          <Detail label="Transaction Fee" value={`${transactionFeePercentage}%`} />
          <Detail label="Listing/Bidding/Cancel" value={marketplaceFee} />
        </ul>
      </DropDown></div>
  )
}
