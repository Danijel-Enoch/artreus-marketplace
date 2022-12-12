import React, { Fragment, useState } from 'react'
import { Tab } from "@headlessui/react";
import Image from "next/image"
import ProfileCollectionCard from "../../components/profile/ProfileCollectionCard";
import Link from 'next/link';
import { useAppContext } from "../../contexts/AppContext"
import { toast } from 'react-toastify';
import { nearWallet, nft_tokens_for_owner } from '../../contracts-connector/near/near-interface'
import { getConnectedWallet } from '../../utils/utils'

import * as identicon from 'identicon'

function Profile() {
  const app = useAppContext()
  const profileCollection = []
  const [data, setdata] = useState("");
  const [nftIds, setnftIds] = useState("")
  const [limit, setLimit] = useState(5)
  const [connected, setConnected] = useState(false)
  const [uAddress, setUaddress] = useState('')
  const [loadingData, setLoadingData] = useState('Loading Your Nfts, Please Wait')

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

      let l = ''
      let nftsId = []
      if (app.connected) {
        l = await getUserNft()
        nftsId = l.map(e => e.id);
      } else {
        l = await nft_tokens_for_owner(
          {
            account_id: walletId,
            from_index: 0,
            limit: limit
          }
        )
        console.log(l)
        nftsId = l.map(e => e.token_id);
      }

      setnftIds(nftsId)

      if (l == '') {
        setLoadingData('You Currently Have No Minted Nfts Yet. Go To The Create PAge To Mint Your Nfts')
        return
      }

      try {
        let newerData = l.map(async (e) => {
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

          return fetch("https://ipfs.io/ipfs/" + e.metadata, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
        })

        newerData = await Promise.all(newerData)
        setdata(newerData.filter(data => data != undefined))

      } catch (e) {
        console.log(e)
      }
    }
  }

  React.useEffect(() => {
    main()
  }, [connected, limit])

  const handleLimit = (e) => {
    const val = e.target.value
    setLimit(val)
    toast.success("Loading New Limits")
  }

  const profileImg = () => {
    let imgUrl = '/profile-picture.png'
    if (walletId) {
      identicon.generate({ id: walletId, size: 250 }, (err, img) => {
        if (err) {
          imgUrl = '/profile-picture.png'
        }
        imgUrl = img
      })
    }

    identicon.generate({ id: 'wallete.Id', size: 250 }, (err, img) => {
      if (err) {
        imgUrl = '/profile-picture.png'
      }
      imgUrl = img
    })

    return imgUrl
  }

  return (
    <section className='w-full p-0 m-0'>
      <div className='w-full h-[356px] bg-[#2F2F2F1A] relative flex justify-center mb-24 md:mb-56'>

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
            </Tab.List>

            <div className='w-full flex a-center h-[74px] bg-[#2F2F2F1A]'>
              <div className='pl-4 flex md:w-[15%] w-[25%]'>
                <select onChange={handleLimit} className='h-9 w-full text-sm md:text-lg  ring-1 ring-brandpurple px-2 outline-none rounded-md'>
                  <option disabled={true}>Limit</option>
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
                        !data ?
                          <p className='text-center'>{loadingData}</p> :
                          <div className='mt-4 md:mt-0 mx-2 md:mx-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-6' role="tabpanel" id="items">
                            {data.map((nfts, id) =>
                              <Link href={`/nft/${connectedWallet}/${uAddress}/${nftIds[id]}`} key={nftIds[id]} >
                                <ProfileCollectionCard className='' key={id} name={nfts.name} description={nfts.description} imageUri={"https://ipfs.io/ipfs/" + nfts.image_url} />
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
