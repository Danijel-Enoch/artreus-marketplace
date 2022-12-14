import React, { Fragment, useState } from 'react'
import { Tab } from "@headlessui/react";
import Image from "next/image"
import ProfileCollectionCard from "../../components/profile/ProfileCollectionCard";
import Link from 'next/link';
import { useAppContext } from "../../contexts/AppContext"
import { toast } from 'react-toastify';
import { get_sales_by_owner_id, nearWallet, nft_tokens, nft_tokens_for_owner } from '../../contracts-connector/near/near-interface'
import { getConnectedWallet } from '../../utils/utils'
import { NEAR_MARKETPLACE_ADDRESS } from '../../config/constants';

import * as identicon from 'identicon'

function Profile() {
  const app = useAppContext()
  const profileCollection = []
  const [data, setdata] = useState([]);
  const [nftIds, setnftIds] = useState("")
  const [limit, setLimit] = useState(5)
  const [connected, setConnected] = useState(false)
  const [uAddress, setUaddress] = useState('')

  const [mIsLoaded, setMIsLoaded] = useState(false)
  const [LIsLoaded, setLIsLoaded] = useState(false)
  const [loadingData, setLoadingData] = useState('Loading Your Nfts, Please Wait')
  const [mLoadingData, setMLoadingData] = useState('Loading Your Nfts, Please Wait')

  const [listedData, setListedData] = useState([]);

  const walletId = nearWallet.accountId
  const connectedWallet = getConnectedWallet()

  React.useEffect(() => {
    nearWallet.startUp()
  }, [])

  React.useEffect(() => {
    if (app.connected || nearWallet.connected) {
      setConnected(true)
      if (app.connected) {
        setUaddress('0x57a204aa1042f6e66dd7730813f4024114d74f99')
      } else {
        setUaddress(walletId)
      }
    } else {
      setConnected(false)
    }

  }, [app.connected, nearWallet.connected])


  async function main() {
    if (connected) {
      let l = []
      if (app.connected) {
        l = await getUserNft()
        nftsId = l.map(e => e.id);
      } else if (nearWallet.connected) {
        l = await nft_tokens_for_owner(
          {
            account_id: walletId,
            from_index: 0,
            limit: limit
          }
        )
      }

      if (l == undefined) {
        setMLoadingData('Connect Wallet To View Your Minted Nfts')
        return
      }

      if (l == []) {
        setMLoadingData('You Currently Have No Minted Nfts Yet. Go To The Create PAge To Mint Your Nfts')
        return
      }

      try {
        let newerData = l.map(async (e) => {
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

          let a = await fetch("https://ipfs.io/ipfs/" + e.metadata, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
          return [{
            token_id: e.token_id,
            data: a
          }]
        })

        newerData = await Promise.all(newerData)
        if (newerData == undefined) {
          setMLoadingData('unknown error, please reload the page')
          return
        }
        console.log(newerData)
        setdata(newerData)
        console.log(data)
        setMIsLoaded(true)
      }
      catch (e) {
        console.log(e)
      }
    }
  }

  async function fetchListedData() {
    let l = []
    l = await get_sales_by_owner_id({
      account_id: 'ajemark.testnet',
      from_index: 0,
      limit: 5,
      contractId: NEAR_MARKETPLACE_ADDRESS
    })

    if (l == undefined) {
      setLoadingData('Connect Wallet To View Your Minted Nfts')
      return
    }

    if (l == []) {
      setLoadingData('You Currently Have No Listed Nfts Yet.')
      return
    }


    try {
      l = l.reverse()
      let newerData = l.map(async (e) => {
        let requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        try {
          let m = []
          m = await nft_tokens({
            from_index: e.token_id,
            limit: 1
          })
          console.log(m)

          let a = fetch("https://ipfs.io/ipfs/" + m[0].metadata, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));

          return {
            id: e.token_id,
            data: await a,
            price: e.sale_conditions.price,
            owner_id: e.owner_id
          }

        } catch (e) {
          console.log(e)
        }

      })

      newerData = await Promise.all(newerData)
      setListedData(newerData)
      setLIsLoaded(true)
    } catch (e) {
      console.log(e)
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      main()
      fetchListedData()
    }, 2000);
  }, [connected, limit])

  const handleLimit = (e) => {
    const val = e.target.value
    setLimit(val)
    toast.success("Loading New Limits")
  }

  const profileImg = () => {
    let imgText = Math.random()
    let imgUrl = '/profile-picture.png'
    if (walletId) {
      identicon.generate({ id: String(walletId), size: 250 }, (err, img) => {
        if (err) {
          imgUrl = '/profile-picture.png'
        }
        imgUrl = img
      })
    }

    identicon.generate({ id: String(imgText), size: 250 }, (err, img) => {
      if (err) {
        imgUrl = '/profile-picture.png'
      }
      imgUrl = img
    })

    return imgUrl
  }

  return (
    <section className='w-full p-0 m-0'>
      <div className='w-full h-[256px] bg-[#2F2F2F1A] relative flex justify-center mb-24 md:mb-56'>

        <div className='absolute rounded-full w-60 h-60 bottom-[-80px]'>
          <Image alt='profile-picture' src={profileImg()} width={240} height={240} className="rounded-full" />
        </div>
      </div>

      <div className='px-12'>
        <div>
          <Tab.Group>
            <Tab.List className="pt-4 text-base font-medium px-12 mb-6">
              <Tab as={Fragment}  >
                {({ selected }) => (
                  <button className={`py-4 px-3 ${selected && 'border-x-0 border-t-0 outline-none border-b-2 border-brandpurple'}`}>Minted Nfts</button>
                )}
              </Tab>
              <Tab as={Fragment}  >
                {({ selected }) => (
                  <button className={`py-4 px-3 ${selected && 'border-x-0 border-t-0 outline-none border-b-2 border-brandpurple'}`}>Listed Nfts</button>
                )}
              </Tab>
            </Tab.List>

            <div className='w-full flex a-center h-[74px] bg-[#2F2F2F1A]'>
              <div className='pl-4 flex flex-col md:w-[15%] w-[25%]'>
                <label className='p-0 text-md md:text-lg'>Enter Limit</label>
                <select onChange={handleLimit} className='h-8 w-full text-sm md:text-lg  ring-1 ring-brandpurple px-2 outline-none rounded-md'>
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>

            <div className="mt-5 pt-5 w-full border-t border-brandpurple">
              <Tab.Panels>
                <Tab.Panel>
                  <div>
                    {
                      (!connected) ?
                        <p className='text-center'>
                          Connect Wallet To View Your Minted Nfts
                        </p> :
                        !mIsLoaded ?
                          <p className='text-center'>
                            {loadingData}
                          </p> :
                          <div className='mt-4 md:mt-0 mx-2 md:mx-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-6' role="tabpanel" id="items">
                            {data.map((nfts, id) =>
                              <Link href={`/nft/${connectedWallet}/${uAddress}/${nfts[0].token_id}`} key={nfts[0].token_id} >
                                <ProfileCollectionCard key={nfts[0].token_id} name={nfts[0].data.name} description={nfts[0].data.description} imageUri={"https://ipfs.io/ipfs/" + nfts[0].data.image_url} />
                              </Link>
                            )}
                          </div>
                    }
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div>
                    {
                      (!connected) ?
                        <p className='text-center'>
                          Connect Wallet To View Your Listed Nfts
                        </p> :
                        !LIsLoaded ?
                          <p className='text-center'>
                            {loadingData}
                          </p> :
                          <div className='mt-4 md:mt-0 mx-2 md:mx-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-6' role="tabpanel" id="items">
                            {listedData.map((nfts, id) =>
                              <Link href={''} key={nfts.token_id} >
                                <ProfileCollectionCard key={`${nfts.token_id}+
                                listed`} name={nfts.data.name} description={nfts.data.description} imageUri={"https://ipfs.io/ipfs/" + nfts.data.image_url} />
                              </Link>
                            )}
                          </div>
                    }
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>

          </Tab.Group>
        </div>

      </div>
    </section>
  );
}

export default Profile;
