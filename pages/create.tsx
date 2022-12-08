import React, { useEffect } from 'react'
import ImagePreview from '../components/createCollection/ImagePreview';
import UploadButton from '../components/createCollection/UploadButton';
import Input from '../components/createCollection/Input';
import { useAppContext } from '../contexts/AppContext';
import { ethers } from 'ethers';
import { Web3Storage } from 'web3.storage'
import { toast } from 'react-toastify';
import { MINTER_CONTRACT } from '../config/constants';

import { nft_mint, nft_total_supply } from '../contracts-connector/near/near-interface';
import { nearWallet } from '../contracts-connector/near/near-interface';
import { getConnectedWallet } from '../utils/utils'


export default function Create() {

  const provider = new ethers.providers.JsonRpcProvider("https://mainnet.block.caduceus.foundation/")
  const _signer = provider.getSigner();

  const [fileObject, setFileObject] = React.useState("")
  const [imageUrl, setImageUrl] = React.useState("")
  const [amount, setAmount] = React.useState(0)
  const [name, setName] = React.useState(0)
  const [desc, setDesc] = React.useState(0)

  const app = useAppContext();

  const connectedWallet = getConnectedWallet()

  useEffect(() => {
    nearWallet.startUp()
  }, [])

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
    cid = await storeFiles(image);

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

    return [ufiles, cid + "/" + image[0].name, metaCid + "/" + item_name + ".json", item_name, description, category];
  }

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

  const handleDescChange = (e: any) => {
    const val: any = e.target.value
    setDesc(val)
  }

  //snackbar notification for successful mint
  const success = () => toast.success("NFT minted successfully")
  const minting = () => toast.success("NFT is being minted. Please Wait")

  //snackbar notification for unsuccessful mint
  const error = ({ text }: any) => toast.error(text)

  //snackbar notification for wallet not connected
  const walletNotConnected = () => toast.error("Wallet Not Connected")

  const HandleCmpSubmit = async () => {
    if (!app.connected) {
      walletNotConnected()
      return
    }

    const data: any = await UploadImages(fileObject, name, desc, "image", fileObject.size)

    if (!data) {
      error('Please Enter All The Fields To Mint Your Nfts')
      return
    }

    const owner: any = await _signer.getAddress();
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
        error("minting error")
        console.log(mint_error)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleNearSubmit = async () => {
    if (!nearWallet.connected) {
      walletNotConnected()
      return
    }

    const data: any = await UploadImages(fileObject, name, desc, "image", fileObject.size)

    if (!data) {
      error('Please Enter All The Fields To Mint Your Nfts')
      return
    }

    minting()

    try {
      const metadata = data[2].toString()
      let totalNfts = await nft_total_supply()
      totalNfts = totalNfts + 1
      const mintData: any = {
        token_id: totalNfts.toString(),
        metadata: metadata,
        receiver_id: nearWallet.accountId,
        perpetual_royalties: '',
        deposit: '10040000000000000000000'
      }

      const tx = nft_mint(mintData)

      console.log("receipt", tx);
      UploadToDb(name, desc, data[2], data[1], nearWallet.accountId, "Nft")
      // alert("NFT minted successful")
      success()

      return tx
    } catch (mint_error: any) {
      // alert("minting error")
      error("minting error")
      console.log(mint_error)
    }
  }

  return (
    <section className='md:mx-10 px-16 md:px-0 mt-5'>
      <h1 className='text-2xl text-center md:text-3xl font-bold mb-4'>Create New Nfts
        {connectedWallet == '' ? '' : ` On ${connectedWallet.toUpperCase()}`}
      </h1>

      <ImagePreview classes='md:hidden' imageUrl={imageUrl} />

      <div className='md:flex justify-between'>
        <div>
          <div className='flex flex-col'>
            <UploadButton handleChange={handleImageUrlChange} />
          </div>

          <div className='mt-6'>
            <Input placeholder='Your Nft Name goes here' label="Name" type='text' onChange={handleNameChange} />

            <label>Description</label>
            <textarea className='placeholder-black/50 block bg-[#2F2F2F1A] outline-[#AEACAB] w-full p-2 mt-2 rounded-md' rows={4} placeholder='Enter a Short Description of your Nft' name="Description" onChange={handleDescChange} />

            <input type="submit" value="Create Item" className='cursor-pointer py-2 px-4 mt-8 font-bold rounded-md bg-brandyellow' onClick={() => {
              connectedWallet == '' ?
                walletNotConnected() :
                connectedWallet == 'cmp' ? HandleCmpSubmit() :
                  handleNearSubmit()
            }} />
            <div>
            </div>
          </div>
        </div>
        <div className='w-[50%] md:ml-5'>
          <ImagePreview classes='hidden md:block' imageUrl={imageUrl} />
        </div>
      </div>
    </section>
  )
}
