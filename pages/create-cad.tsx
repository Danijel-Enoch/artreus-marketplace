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
import { Web3Storage } from 'web3.storage'
import { toast } from 'react-toastify';
import { MINTER_CONTRACT } from '../config/constants';


const provider = new ethers.providers.JsonRpcProvider("https://mainnet.block.caduceus.foundation/")
const _signer = provider.getSigner();

async function mint(uri: any) {
  const address = "0x9Ba2fc37D6E22634852695993175Cdf5bfD105D5";
  const abi = [
    "function mint(string uri) payable returns (uint256)"
  ];
  try {
    const contract = new ethers.Contract(address, abi, _signer);
    const tx = await contract.functions.mint(uri);
    const receipt = await tx.wait();
    console.log("receipt", receipt);
    return receipt
  } catch (e) {
    return e
  }
}

export default function Create() {
  // const app = useAppContext();
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



  ////////////
  const UploadToDb: any = async (name: any, description: any, jsonUrl: any, image_url: any, owner: any, categories: any) => {
    var axios = require('axios');
    var data = {
      "socialLinks": [
        "Fb.com"
      ],
      "name": name,
      "description": description,
      "jsonUrl": jsonUrl,
      "imageUrl": image_url,
      "listed": "false",
      "auctioned": "false",
      "owner": owner,
      "categories": categories,
      "collectionAddress": MINTER_CONTRACT
    };

    var config = {
      method: 'post',
      url: 'https://artreuss.herokuapp.com/v1/nft/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response: any) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }
  ////////////
  ////
  function getAccessToken() {
    // If you're just testing, you can paste in a token
    // and uncomment the following line:
    // return 'paste-your-token-here'

    // In a real app, it's better to read an access token from an
    // environement variable or other configuration that's kept outside of
    // your code base. For this to work, you need to set the
    // WEB3STORAGE_TOKEN environment variable before you run your code.
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGNBZTE3Qjk0NzE4Q0I3MDIwOTcwZjg0NTlGQTQ5ZTk2NDNlRDg2OTYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI4MTU5NDIyNjgsIm5hbWUiOiJhcnRlcmV1cyJ9.3yGxFeIZ8v0lsPwXsiuuRdECC76d8kly3u8D2yBsum4"
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
  }
  async function storeFiles(mfiles: any) {
    const client = makeStorageClient()
    const cid = await client.put(mfiles)
    console.log('stored files with cid:', cid)
    return cid
  }
  const UploadImages: any = async (image: any, item_name: any, description: any, category: any, size: any) => {
    // console.log(image[0].name);
    let cid: any
    const myRenamedFile = new File([image[0]], 'my-file-final-1-really.png');
    console.log(image)
    cid = await storeFiles(image);
    console.log(cid) //add snack bar here

    //makeFileObjects(cid, image[0].name);
    console.log("Image Cid: " + cid)
    const obj = {
      image_url: cid + "/" + image[0].name,
      name: item_name,
      description: description,
      size: size,
      category: category,
    };

    const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
    let ufiles = [new File([blob], item_name + ".json")];
    let metaCid = await storeFiles(ufiles);
    console.log("metadata URI:" + metaCid + "/" + item_name + ".json");
    console.log(ufiles)
    // mint(metaCid + "/" + item_name + ".json");
    return [ufiles, cid + "/" + image[0].name, metaCid + "/" + item_name + ".json", item_name, description, category];
  }
  /////

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files
    setFileObject(file);
    if (file) {
      let src = URL.createObjectURL(file[0])
      setImageUrl(src);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: any = +e.target.value
    setAmount(val)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value
    setName(val)
  }

  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: any = e.target.value
    setDesc(val)
    //console.log(val)
  }

  const handleRoyaltyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = +e.target.value
    setRoyalty(val)
  }

  //snackbar notification for successful mint
  const success = () => toast.success("NFT minted successfully")

  //snackbar notification for unsuccessful mint
  const error = () => toast.error("minting error")

  //snackbar notification for wallet not connected
  const walletNotConnected = () => toast.error("Wallet Not Connected")

  const handleSubmit = async () => {
    // console.log(fileObject.name);
    const data: any = await UploadImages(fileObject, name, desc, "image", fileObject.size)
    console.log(data);
    const owner: any = await _signer.getAddress();
    console.log(owner)
    try {
      const address = MINTER_CONTRACT;
      const abi = [
        "function mint(string uri) payable returns (uint256)"
      ];
      try {
        const contract = new ethers.Contract(address, abi, app.signer);
        const tx = await contract.functions.mint(data[2].toString(), { value: ethers.utils.parseEther("0.01") });
        const receipt = await tx.wait();
        console.log("receipt", receipt);
        UploadToDb(name, desc, data[2], data[1], owner, "Nft")
        // alert("NFT minted successful")
        success()


        return receipt
      } catch (mint_error: any) {
        // alert("minting error")
        error()
        console.log(mint_error)
      }

    } catch (e) {
      console.log(e)
    }

    if (!contract) return;
    // Upload to Pinata or IPFS or our server, 
    // const uri = uploadToSERVER(fileObject, name, desc, ethers.utils.formatEther(royalty))
    // create NFT on smart contract 
    // const nftId = await oprahr.safeMint(url);
    //then send to contract
    // await contract.connect(app.signer).listNFT(oprahr.address, nftId, ethers.utils.formatEther(amount))
  }
  // useEffect(() => {
  //   (async () => {
  //     if (contract) {
  //       const _fee = await contract.feePercent()
  //       const precision = await contract.precision()

  //       const percent = _fee / precision;
  //       console.log(percent);

  //       setFee((percent * 100).toString())
  //     }
  //   })()
  // }, [contract])
  return (
    <section className='md:mx-16 px-4 md:px-0'>
      <h1 className='text-xl md:text-3xl font-bold mb-4'>Create New Nfts On CMP</h1>
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
              {/* <button className='inline-block text-black border border-black py-2 px-4 font-bold rounded-md'>
                You will get {amount - (amount * (fee / 100))}
              </button> */}

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
            {/* <Input placeholder='10' label="Royalties %" type='number' onChange={handleRoyaltyChange} /> */}

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
