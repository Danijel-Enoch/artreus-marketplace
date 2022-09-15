import React, { useEffect } from 'react'
// import NetworkInfo from '../components/createCollection/NetworkInfo'
// import EthLogo from '../components/EthLogo'
import Title from '../components/createCollection/Title';
import ConnectionBar from '../components/createCollection/ConnectionBar';
import ImagePreview from '../components/createCollection/ImagePreview';
import UploadButton from '../components/createCollection/UploadButton';
// import PriceTypeButton from '../components/createCollection/PriceTypeButton';
import Input from '../components/createCollection/Input';
import PriceForApeice from '../components/createCollection/PriceForApeice';
// import MintOptionToggle from '../components/createCollection/MintOptionToggle';
import useWindowSize from '../hooks/useWindowSize';
import useContract from '../hooks/useContract';
import { useAppContext } from '../contexts/AppContext';
import { ethers } from 'ethers';

export default function Create() {
  const size = useWindowSize()
  // const [isMintFree, setIsMintFree] = React.useState(true)
  const [fee, setFee] = React.useState("...")
  const [fileObject, setFileObject] = React.useState("")
  const [imageUrl, setImageUrl] = React.useState("")
  const [amount, setAmount] = React.useState(0)
  const [name, setName] = React.useState(0)
  const [desc, setDesc] = React.useState(0)
  const [royalty, setRoyalty] = React.useState(0)
  // const [activePriceButton, setActivePriceButton] = React.useState<'Fixed Price' | 'Open Bid' | 'Timed Auction'>('Fixed Price')
  const contract = useContract();
  const app = useAppContext();

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileObject(file);
    if (file) {
      let src = URL.createObjectURL(file)
      setImageUrl(src);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = +e.target.value
    setAmount(val)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = +e.target.value
    setName(val)
  }

  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = +e.target.value
    setDesc(val)
  }

  const handleRoyaltyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = +e.target.value
    setRoyalty(val)
  }

  const handleSubmit = async () => {
      console.log(fileObject)
    if (!contract) return;
    // Upload to Pinata or IPFS or our server, 
    // const uri = uploadToSERVER(fileObject, name, desc, ethers.utils.formatEther(royalty))
    // create NFT on smart contract 
    // const nftId = await oprahr.safeMint(url);
    //then send to contract
    // await contract.connect(app.signer).listNFT(oprahr.address, nftId, ethers.utils.formatEther(amount))
  }
  useEffect(() => {
    (async () => {
      if (contract) {
        const _fee = await contract.feePercent()
        const precision = await contract.precision()

        const percent = _fee / precision;
        console.log(percent);

        setFee((percent * 100).toString())
      }
    })()
  }, [contract])
  return (
    <section className='md:mx-16 px-4 md:px-0'>
      <h1 className='text-xl md:text-3xl font-bold mb-4'>Create New Nfts</h1>
      {size.width && size.width < 765 && (<ImagePreview imageUrl='' />)}

      <div className='md:flex'>
        <div>
          <div className='flex flex-col'>
            <UploadButton handleChange={handleImageUrlChange} />
            {/* <ConnectionBar /> */}
          </div>

          <div>
            {/* <Title>Sell on Marketplace</Title>
            <p className='text-[#00000080]'>Enter price to allow users easily purchase your NFT</p> */}
            
            {/* <div className='flex space-x-2 md:space-x-4 mt-4 mb-4'>
              <PriceTypeButton title='Fixed Price' onClick={() => setActivePriceButton('Fixed Price')} active={activePriceButton === 'Fixed Price' ? true : false} />
              <PriceTypeButton title='Open Bid' onClick={() => setActivePriceButton('Open Bid')} active={activePriceButton === 'Open Bid' ? true : false} />
              <PriceTypeButton title='Timed Auction' onClick={() => setActivePriceButton('Timed Auction')} logo='time' active={activePriceButton === 'Timed Auction' ? true : false} />

            </div> */}
            {/* <PriceForApeice handleChange={handleChange} /> */}
            <div className='mt-4 mb-4 md:mt-8 space-x-4'>
              <button className='inline-block text-black border border-black py-2 px-4 font-bold rounded-md'>
                Service fee {fee}%
              </button>
              <button className='inline-block text-black border border-black py-2 px-4 font-bold rounded-md'>
                You will get {amount - (amount * (fee / 100))}
              </button>

            </div>
            {/* <div className='flex justify-between my-6 md:mt-6'>
              <div className='font-semibold'>
                <p className={`${!isMintFree && 'text-black/50'}`}>Free Minting</p>
                <p className={`${isMintFree && 'text-black/50 '}`}>Buyer will pay fee for Minting</p>
              </div>
              <MintOptionToggle enabled={isMintFree} setEnabled={() => setIsMintFree(!isMintFree)} />

            </div> */}
            <Input placeholder='Your Nft Name goes here' label="Name" type='text' onChange={handleNameChange} />
            {/* <Input placeholder='Enter a Short Description of your Nft' label="Description" type='text' onChange={handleDescChange} /> */}
            <textarea className='placeholder-black/50 block bg-[#AEACAB] w-full p-2 mt-2 rounded-md' rows="4" placeholder='Enter a Short Description of your Nft' label="Description" type='text' onChange={handleDescChange}></textarea>
            <Input placeholder='10' label="Royalties %" type='number' onChange={handleRoyaltyChange} />

            <input type="submit" value="Create Item" className='cursor-pointer py-2 px-4 mt-8 font-bold rounded-md bg-brandyellow' onClick={handleSubmit} />
            <div>
            </div>
          </div>
        </div>
        {size.width && size.width >= 765 && (<div className=' md:ml-16'>
          <ImagePreview imageUrl={imageUrl} />
        </div>)}
      </div>
    </section>
  )
}
