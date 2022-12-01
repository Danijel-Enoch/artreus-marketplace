import React, { Fragment, useState } from 'react'
import { Tab } from "@headlessui/react";
import Image from "next/image"
import ProfileCollectionCard from "../../components/profile/ProfileCollectionCard";
import Link from 'next/link';
import { toast } from 'react-toastify'
import { useAppContext } from "../../contexts/AppContext"
import axios from 'axios';
import { ethers } from "ethers"
import { retrieve, deconstructCid } from "../../utils/utils"
import { MINTER_CONTRACT } from "../../config/constants"
import CardSkeleton from '../../components/CardSkeleton';

import { wallet, nft_tokens_for_owner, nft_supply_for_owner, nft_metadata, nft_total_supply, get_supply_by_owner_id, storage_balance_of, nft_tokens } from '../../contracts-connector/near/near-interface'



let globalWallet;

function Profile() {
  const app = useAppContext()
  const profileCollection = []
  const [data, setdata] = useState("");
  const [nftIds, setnftIds] = useState("")
  const [connected, setConnected] = useState(false)
  const [connectedWallet, setConnectedWallet] = useState('')
  const [uAddress, setUaddress] = useState('')

  const walletId = wallet.accountId

  let walletAddress = app.connected ? app.account : "Connect Wallet"
  globalWallet = walletAddress;

  React.useEffect(() => {
    wallet.startUp()
  }, [])

  React.useEffect(() => {
    if (app.connected || wallet.connected) {
      setConnected(true)
      if (app.connected) {
        setConnectedWallet('cmp')
        setUaddress('0x57a204aa1042f6e66dd7730813f4024114d74f99')
      } else {
        setConnectedWallet('near')
        setUaddress(walletId)
      }
    } else {
      setConnected(false)
      setConnectedWallet('')
    }

  }, [app.connected, wallet.connected])

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
            limit: 15
          }
        )
        nftsId = l.map(e => e.token_id);
        console.log(l)
      }

      setnftIds(nftsId)

      try {
        const newerData = l.map(async (e) => {
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

          return fetch("https://ipfs.io/ipfs/" + e.metadata, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));

        })
        setdata(await Promise.all(newerData))
      } catch (e) {
        console.log(e)
      }
    }

  }


  React.useEffect(() => {
    main()
  }, [connected])


  async function getUserNft() {
    if (app.connected) {

      const address = MINTER_CONTRACT;
      const abi = [
        "function getUserNft(address user_address) view returns (tuple(uint256 id, address creator, string uri)[])"
      ];
      const contract = new ethers.Contract(address, abi, app.signer);
      const data = await contract.functions.getUserNft(app.account);

      //console.log(data);
      const nft = data[0].map((e) => {
        return ({
          "id": e[0].toString(),
          "metadata": e[2]
        })
      })
      // console.log(nft)
      return nft
    }


  }


  const items = Array.from(Array(10).keys())

  return (
    <section className='w-full p-0 m-0'>
      <div className='w-full h-[356px] bg-[#2F2F2F1A] relative flex justify-center mb-24 md:mb-56'>


        <div className='absolute bottom-[-22px] right-[65%] lg:block '>
          <button className='w-36 h-11 mr-5 bg-brandpurple text-brandyellow rounded-md'>Add Profile</button>
          <button className='w-36 h-11 bg-brandpurple text-brandyellow rounded-md'>Add Cover</button>
        </div>
        <div className='absolute rounded-full w-60 h-60 bottom-[-80px]'>
          <Image src='/profile-picture.png' width={240} height={240} className="rounded-full" />
        </div>
      </div>

      <div className='px-12'>
        <div>
          <Tab.Group>
            <Tab.List className="pt-4 text-base font-medium px-12 mb-6">
              <Tab as={Fragment}  >
                {({ selected }) => (
                  <button className={`py-4 px-3 ${selected && 'border-x-0 border-t-0 outline-none border-b-2 border-brandpurple'}`}>Items</button>
                )}
              </Tab>

              <Tab as={Fragment}  >
                {({ selected }) => (
                  <button className={`py-4 px-3 ${selected && 'border-x-0 border-t-0 outline-none border-b-2 border-brandpurple'}`}>Collection</button>
                )}
              </Tab>
            </Tab.List>

            <div className='w-full h-[74px] bg-[#2F2F2F1A]'>

            </div>
            <div className="mt-5 pt-5 w-full border-t border-brandpurple">


              <Tab.Panels>
                <Tab.Panel>
                  <div className='mt-4 md:mt-0 mx-2 md:mx-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-6' role="tabpanel" id="items">
                    {(connected && data) ? data.map((nfts, id) =>
                      <Link href={`/nft/${connectedWallet}/${connectedWallet}/${uAddress}/${nftIds[id]}`} key={nftIds[id]} >
                        <a ><ProfileCollectionCard className='' key={"2"} name={nfts.name} description={nfts.description} imageUri={"https://ipfs.io/ipfs/" + nfts.image_url} /></a>

                      </Link>
                    ) : <>
                      <p>You Have no minted nfts yet. </p>
                    </>
                    }
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className='mt-4 md:mt-0 mx-2 md:mx-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-6' role="tabpanel" id="items">
                    {/* {console.log(profileCollection)} */}
                    {profileCollection.map(({ name, imageUri, description }, index) => (
                      <Link href="/nft/ethereum/0x57a204aa1042f6e66dd7730813f4024114d74f37/840/1" key={index}>
                        <a><ProfileCollectionCard key={index} name={name} description={description} imageUri={imageUri} /></a>
                      </Link>
                    ))}
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

// export async function getServerSideProps(){
// //     let profileCollection = Array.from(Array(20).keys())
// //     profileCollection= profileCollection.map(()=>({
// //         name:"Okay Bears",
// //         description:"The Okay bears is a collection  of Nft mutants and heroes.... ",
// //         imageUri:"https://lh3.googleusercontent.com/P-g6dOO3CBlXwgh7ZGVmt6gjkw09E6XcanRxSHeVO9jX7MFN5_aSRoMrG3dsbYqpYjb9cPQaWEnbw3eF40T1y1gO-GRbaaG9ZyHfGw=w302"
// //     }))
// //   return{props:{
// //       profileCollection
// //     }
// //   }

// // var config = {
// //     method: 'get',
// //     url: 'https://artreuss.herokuapp.com/v1/nft/',
// //     headers: { }
// //   };

//  const response = await fetch(`https://artreuss.herokuapp.com/v1/nft/`)
//  const data = await response.json()
//  console.log(typeof data)
// const datan=data.result.filter((a)=>{if(a.collectionAddress=='0xd68C501158529eadA7D623974008F90758F2693D'){return a}});
//   console.log(typeof datan)


//  return {
//     props: {
//         data,
//     }
//  }

// }






// import React, { Fragment, useState } from 'react'
// import { Tab } from "@headlessui/react";
// import Image from "next/image"
// import ProfileCollectionCard from "../../components/profile/ProfileCollectionCard";
// import Link from 'next/link';
// import { toast } from 'react-toastify'
// import { useAppContext } from "../../contexts/AppContext"
// import axios from 'axios';
// import { ethers } from "ethers"
// import { retrieve, deconstructCid } from "../../utils/utils"
// import { MINTER_CONTRACT } from "../../config/constants"
// let globalWallet;

// function Profile() {
//     const app = useAppContext()
//     const profileCollection = []
//     const [data, setdata] = useState("");
//     const [nftIds, setnftIds] = useState("")
//     let walletAddress = app.connected ? app.account : "Connect Wallet"
//     // console.log(typeof walletAddress)
//     globalWallet = walletAddress;
//     async function main() {


//         if (app.connected) {
//             try {
//                 const l = await getUserNft()
//                 const nftsId = l.map(e => e.id);
//                 setnftIds(nftsId)
//                 const newerData = l.map(async (e) => {
//                     var requestOptions = {
//                         method: 'GET',
//                         redirect: 'follow'
//                     };

//                     return fetch("https://ipfs.io/ipfs/" + e.metadata, requestOptions)
//                         .then(response => response.json())
//                         .catch(error => console.log('error', error));

//                 })
//                 setdata(await Promise.all(newerData))
//                 console.log(data[0])
//             } catch (e) {
//                 console.log(e)
//             }

//         }
//     }
//     main()



//     async function getUserNft() {
//         const address = MINTER_CONTRACT;
//         const abi = [
//             "function getUserNft(address user_address) view returns (tuple(uint256 id, address creator, string uri)[])"
//         ];
//         const contract = new ethers.Contract(address, abi, app.signer);
//         const data = await contract.functions.getUserNft(app.account);

//         //console.log(data);
//         const nft = data[0].map((e) => {
//             return ({
//                 "id": e[0].toString(),
//                 "metadata": e[2]
//             })
//         })
//         // console.log(nft)
//         return nft


//     }


//     //but user wallet must  connected
//     // const walletAddress=app.signer.getAddress();

//     // const notify = () => (
//     //     toast.success("Success Notification !", {
//     //         position: toast.POSITION.TOP_CENTER
//     //       })
//     // );
//     // var config = {
//     //     method: 'get',
//     //     url: 'https://artreuss.herokuapp.com/v1/nft/',
//     //     headers: { }
//     //   };

//     //   axios(config)
//     //   .then(function (response) {
//     //     console.log(JSON.stringify(response.data));
//     //   })
//     //   .catch(function (error) {
//     //     console.log(error);
//     //   });

//     return (
//         <section className='w-full'>
//             <div className='w-full'>
//                 <div className=" flex flex-col items-center pt-4 w-full">
//                     <div className="w-52 max-h-52 rounded-full border-4 border-brandpurple">
//                         <Image src={'/profile-picture.png'} height={208} width={208} className="rounded-full" />
//                     </div>

//                     <div className="pt-4">
//                         <h2 className="text-3xl font-medium">{walletAddress}</h2>
//                     </div>

//                     <Tab.Group>
//                         <Tab.List className="pt-4 text-base font-medium">
//                             <Tab as={Fragment}  >
//                                 {({ selected }) => (
//                                     <button className={`py-4 px-3 ${selected && 'border-x-0 border-t-0 outline-none border-b-2 border-brandpurple'}`}>Items</button>
//                                 )}
//                             </Tab>

//                             <Tab as={Fragment}  >
//                                 {({ selected }) => (
//                                     <button className={`py-4 px-3 ${selected && 'border-x-0 border-t-0 outline-none border-b-2 border-brandpurple'}`}>Collection</button>
//                                 )}
//                             </Tab>
//                         </Tab.List>


//                         <div className="mt-5 pt-5 w-full border-t border-brandpurple">


//                             <Tab.Panels>
//                                 <Tab.Panel>
//                                     <div className='mt-4 md:mt-0 mx-2 md:mx-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-6' role="tabpanel" id="items">
//                                         {(app.connected && data) ? data.map((nfts, id) =>
//                                             <Link href={"/nft/ethereum/0x57a204aa1042f6e66dd7730813f4024114d74f99/840/" + nftIds[id]} key={nftIds[id]}>
//                                                 <a><ProfileCollectionCard key={"2"} name={nfts.name} description={nfts.description} imageUri={"https://ipfs.io/ipfs/" + nfts.image_url} /></a>

//                                             </Link>
//                                         ) : <>
//                                             ksdjhfjk</>}
//                                     </div>
//                                 </Tab.Panel>
//                                 <div className='mt-4 md:mt-0 mx-2 md:mx-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-6' role="tabpanel" id="items">
//                                     {profileCollection.map(({ name, imageUri, description }, index) => (
//                                         <Link href="/nft/ethereum/0x57a204aa1042f6e66dd7730813f4024114d74f37/840/1" key={index}>
//                                             <a><ProfileCollectionCard key={index} name={name} description={description} imageUri={imageUri} /></a>
//                                         </Link>
//                                     ))}
//                                 </div>
//                                 <Tab.Panel>

//                                 </Tab.Panel>
//                             </Tab.Panels>
//                         </div>

//                     </Tab.Group>
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default Profile;

// // export async function getServerSideProps(){
// // //     let profileCollection = Array.from(Array(20).keys())
// // //     profileCollection= profileCollection.map(()=>({
// // //         name:"Okay Bears",
// // //         description:"The Okay bears is a collection  of Nft mutants and heroes.... ",
// // //         imageUri:"https://lh3.googleusercontent.com/P-g6dOO3CBlXwgh7ZGVmt6gjkw09E6XcanRxSHeVO9jX7MFN5_aSRoMrG3dsbYqpYjb9cPQaWEnbw3eF40T1y1gO-GRbaaG9ZyHfGw=w302"
// // //     }))
// // //   return{props:{
// // //       profileCollection
// // //     }
// // //   }

// // // var config = {
// // //     method: 'get',
// // //     url: 'https://artreuss.herokuapp.com/v1/nft/',
// // //     headers: { }
// // //   };

// //  const response = await fetch(`https://artreuss.herokuapp.com/v1/nft/`)
// //  const data = await response.json()
// //  console.log(typeof data)
// // const datan=data.result.filter((a)=>{if(a.collectionAddress=='0xd68C501158529eadA7D623974008F90758F2693D'){return a}});
// //   console.log(typeof datan)


// //  return {
// //     props: {
// //         data,
// //     }
// //  }

// // }