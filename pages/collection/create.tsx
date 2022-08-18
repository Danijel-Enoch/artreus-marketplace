import React from 'react'
import NetworkInfo from '../../components/createCollection/NetworkInfo'
import EthLogo from '../../components/EthLogo'
import Title from '../../components/createCollection/Title';
import ConnectionBar from '../../components/createCollection/ConnectionBar';
import ImagePreview from '../../components/createCollection/ImagePreview';
import UploadButton from '../../components/createCollection/UploadButton';
import PriceTypeButton from '../../components/createCollection/PriceTypeButton';
import Input from '../../components/createCollection/Input';
import PriceForApeice from '../../components/createCollection/PriceForApeice';
import MintOptionToggle from '../../components/createCollection/MintOptionToggle';
import useWindowSize from '../../hooks/useWindowSize';

export default function create() {
  const size=useWindowSize()
  const [isMintFree,setIsMintFree]=React.useState(true)
  const [activePriceButton,setActivePriceButton]=React.useState<'Fixed Price'|'Open Bid'|'Timed Auction'>('Fixed Price')
  return (
    <section className='md:mx-16 px-4 md:px-0'>
        <h1 className='text-xl md:text-3xl font-bold mb-4'>Create New Nfts</h1>
        {size.width&&size.width < 765&&( <ImagePreview imageUrl=''/>)}
       
        <div className='md:flex'>
              <div>
              <div className='flex flex-col'>
                
               
                 <UploadButton/>
                 <ConnectionBar/>
              </div>

                   
                  <div>
                    <Title>Sell on Marketplace</Title>
                    <p className='text-[#00000080]'>Enter price to allow users easily purchase your NFT</p>
                    <div className='flex space-x-2 md:space-x-4 mt-4 mb-4'>
                        <PriceTypeButton title='Fixed Price' onClick={()=>setActivePriceButton('Fixed Price')} active={activePriceButton==='Fixed Price'?true:false}/>
                      <PriceTypeButton title='Open Bid' onClick={()=>setActivePriceButton('Open Bid')} active={activePriceButton==='Open Bid'?true:false}/>
                      <PriceTypeButton title='Timed Auction' onClick={()=>setActivePriceButton('Timed Auction')} logo='time' active={activePriceButton==='Timed Auction'?true:false}/>

                    </div>


                    <PriceForApeice/>
                <div className='mt-4 mb-4 md:mt-8 space-x-4'>
                    <button className='inline-block text-black border border-black py-2 px-4 font-bold rounded-md'>
                          Service fee 2%
                    </button>
                    <button className='inline-block text-black border border-black py-2 px-4 font-bold rounded-md'>
                        You will get _
                    </button>

                </div>
                <div className='flex justify-between my-6 md:mt-6'>
                  <div className='font-semibold'>
                      <p className={`${!isMintFree&&'text-black/50'}`}>Free Minting</p>
                      <p className={`${isMintFree&&'text-black/50 ' }`}>Buyer will pay fee for Minting</p>
                  </div>
                  <MintOptionToggle enabled={isMintFree} setEnabled={()=>setIsMintFree(!isMintFree)}/>
                
                </div>
                <Input placeholder='Your Nft Name goes here' label="Name" type='text'/>
                <Input placeholder='Enter a Short Description of your Nft' label="Description" type='text'/>
                <Input placeholder='10' label="Royalties" type='number'/>

                <input type="submit" value="Create Item" className='cursor-pointer py-2 px-4 mt-8 font-bold rounded-md bg-brandyellow'/>

                <div>

                </div>
                    
                    
                    
                    
                  
                  </div>
              </div>
              {size.width&&size.width >=765&&(<div className=' md:ml-16'>
                <ImagePreview imageUrl=''/>
              </div>)}

              
        </div>
     

    </section>
    
  )
}
