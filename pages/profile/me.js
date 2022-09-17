import React,{Fragment} from 'react'
import { Tab } from "@headlessui/react";
import Image from "next/image"
import ProfileCollectionCard from "../../components/profile/ProfileCollectionCard";
import Link from 'next/link';
import { toast } from 'react-toastify'
import {useAppContext} from "../../contexts/AppContext"
import axios from 'axios';
let globalWallet;

function Profile({data}) {
        const app=useAppContext()
        const profileCollection=[]
let  walletAddress=app.connected ? app.account: "Connect Wallet"
        console.log(typeof walletAddress)
        globalWallet=walletAddress;

        //but user wallet must  connected
        // const walletAddress=app.signer.getAddress();

    // const notify = () => (
    //     toast.success("Success Notification !", {
    //         position: toast.POSITION.TOP_CENTER
    //       })
    // );
    // var config = {
    //     method: 'get',
    //     url: 'https://artreuss.herokuapp.com/v1/nft/',
    //     headers: { }
    //   };
      
    //   axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });   

    return (
        <section className='w-full'>
            <div className='w-full'>
                <div className=" flex flex-col items-center pt-4 w-full">
                    <div className="w-52 max-h-52 rounded-full border-4 border-brandbrown">
                        <Image src={'/bored_ape.png'} height={208} width={208} className="rounded-full"/>
                    </div>
                    
                    <div className="pt-4">
                        <h2 className="text-3xl font-medium">{walletAddress}</h2>
                    </div>

                <Tab.Group>
                     <Tab.List className="pt-4 text-base font-medium">
                     <Tab as={Fragment}  >
                         {({selected})=>(
                         <button className={`py-4 px-3 ${selected&&'border-x-0 border-t-0 outline-none border-b-2 border-brandbrown'}`}>Items</button>
                         )}
                    </Tab>

                    <Tab as={Fragment}  >
                         {({selected})=>(
                        <button className={`py-4 px-3 ${selected&&'border-x-0 border-t-0 outline-none border-b-2 border-brandbrown'}`}>Collection</button>
                        )}
                    </Tab>
                    </Tab.List>


                    <div className="mt-5 pt-5 w-full border-t border-brandbrown">
                        

                        <Tab.Panels>
                            <Tab.Panel>
                                <div className='mt-4 md:mt-0 mx-2 md:mx-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-6' role="tabpanel" id="items">
                                {data.result.map((nfts)=>
                                <Link href={"/nft/ethereum/0x57a204aa1042f6e66dd7730813f4024114d74f99/840/"+nfts.id} key={nfts.id}>
                                    <a><ProfileCollectionCard key={nfts.id} name={nfts.name} description={nfts.description} imageUri={`https://ipfs.io/ipfs/`+nfts.imageUrl}/></a>
                                </Link>
)}
                         </div>
                            </Tab.Panel>
                            <div className='mt-4 md:mt-0 mx-2 md:mx-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-6' role="tabpanel" id="items">
                                {profileCollection.map(({name,imageUri,description},index)=>(
                                <Link href="/nft/ethereum/0x57a204aa1042f6e66dd7730813f4024114d74f37/840/1" key={index}>
                                    <a><ProfileCollectionCard key={index} name={name} description={description} imageUri={imageUri}/></a>
                                </Link>
                                ))}
                            </div>
                            <Tab.Panel>
                                
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

export async function getServerSideProps(){
//     let profileCollection = Array.from(Array(20).keys())
//     profileCollection= profileCollection.map(()=>({
//         name:"Okay Bears",
//         description:"The Okay bears is a collection  of Nft mutants and heroes.... ",
//         imageUri:"https://lh3.googleusercontent.com/P-g6dOO3CBlXwgh7ZGVmt6gjkw09E6XcanRxSHeVO9jX7MFN5_aSRoMrG3dsbYqpYjb9cPQaWEnbw3eF40T1y1gO-GRbaaG9ZyHfGw=w302"
//     }))
//   return{props:{
//       profileCollection
//     }
//   }

// var config = {
//     method: 'get',
//     url: 'https://artreuss.herokuapp.com/v1/nft/',
//     headers: { }
//   };

 const response = await fetch(`https://artreuss.herokuapp.com/v1/nft/`)   
 const data = await response.json()
 console.log(typeof data)
const datan=data.result.filter((a)=>{if(a.collectionAddress=='0xd68C501158529eadA7D623974008F90758F2693D'){return a}});
  console.log(typeof datan)


 return {
    props: {
        data,
    }
 }

}