import React from 'react'
import { useRouter } from 'next/router'
import { Menu as LiMenu } from '@headlessui/react'
import { useAppContext } from '../../contexts/AppContext'
import Link from 'next/link'
const DropDown = () => {
  return (<svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="7"
    fill="none"
    className='ml-2'
    viewBox="0 0 11 7"
  >
    <path
      fill="#D9D9D9"
      d="M10.631 0H.369c-.308 0-.48.311-.29.523l5.132 5.694c.147.163.43.163.578 0L10.92.523C11.11.311 10.94 0 10.631 0z"
    ></path>
  </svg>)
}
const Menu = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="19"
      fill="none"
      viewBox="0 0 21 19"
      className='mr-1'
    >
      <path
        fill="#F4F3FF"
        d="M.35 10.95h20.3v-2.9H.35v2.9zm0 7.25h20.3v-2.9H.35v2.9zM.35.8v2.9h20.3V.8H.35z"
      ></path>
    </svg>)
}
export default function DesktopNav({ navItems }: { navItems: string[] }) {
  const app = useAppContext();

  const router = useRouter();
  return (
    <ul className='flex justify-center items-center w-full ' >
    
        <LiMenu as="li" className={`capitalize mx-4 `}>

          <LiMenu.Button className='flex items-center capitalize'>Marketplace{<DropDown />} </LiMenu.Button>
          <LiMenu.Items as="div" className='relative z-10'>
            <ul className='absolute space-y-4  bg-[#e4e2e2] w-[200px] h-[100px] py-4 my-2 inset-0 rounded-md text-brandpurple p-4 font-semibold '>

                        
             <li className='w-full]'>
                <Link href="/">
                  <a>Home</a>
                </Link>
             </li>
       
            <li>
                <Link href="/new">
                  <a>New Collection</a>
                </Link>
             </li>


            </ul>
          </LiMenu.Items>

        </LiMenu>
      
        <LiMenu as="li" className={`capitalize mx-4 `}>

          <LiMenu.Button className='flex items-center capitalize'>Creator{<DropDown />} </LiMenu.Button>
          <LiMenu.Items as="div" className='relative z-10'>
            <ul className='absolute space-y-4  bg-[#e4e2e2]  w-[200px] h-[100px] py-4 my-2 inset-0 rounded-md text-brandpurple p-4 font-semibold'>

            <li>
                <Link href="/create">
                  <a>Create</a>
                </Link>
             </li>

             <li>
                <Link href="/profile/me">
                  <a>Profile</a>
                </Link>
             </li>

            </ul>
          </LiMenu.Items>

          </LiMenu>

          <LiMenu as="li" className={`capitalize mx-4 `}>

          <LiMenu.Button className='flex items-center capitalize'>Launchpad{<DropDown />} </LiMenu.Button>
          <LiMenu.Items as="div" className='relative z-10'>
            <ul className='absolute space-y-4  bg-[#e4e2e2]  w-[200px] h-[50px] py-4 my-2 inset-0 rounded-md text-brandpurple p-4 font-semibold'>

            <li>
                <Link href="/">
                  <a>Launchpad</a>
                </Link>
             </li>

            </ul>
          </LiMenu.Items>

          </LiMenu>

          <Menu />

      {/* <li className='ml-3  flex justify-center items-center '>Marketplace <DropDown/></li>
      <li className='ml-3 flex justify-center items-center '>Creator <DropDown/></li>
      <li className='ml-3 flex justify-center items-center '>Launchpad <DropDown/></li>
      <li className='ml-6 mr-3 flex justify-center items-center '>Networks <DropDown/></li>
      <li className='flex justify-center items-center '><Menu/>All</li> */}
      <li ><div className='p-3 rounded-full bg-white ml-4'></div></li>
      <li><button className='mx-8 border border-brandyellow py-1 px-8 rounded-xl' onClick={app.connected ? app.logOut : app.logIn}>{app.connected ? "Disconnect Walet" : "Connect Wallet"}</button></li>
      {/* <li><button className='mx-8 border border-brandyellow py-1 px-8 rounded-xl' onClick={() => { router.push('/connect') }}>Connect Wallet</button></li> */}

    </ul>
  )
}


// import React from 'react'
// import { useRouter } from 'next/router'
// import { Menu as LiMenu } from '@headlessui/react'
// import { useAppContext } from '../../contexts/AppContext'
// const DropDown = () => {
//   return (<svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="11"
//     height="7"
//     fill="none"
//     className='ml-2'
//     viewBox="0 0 11 7"
//   >
//     <path
//       fill="#D9D9D9"
//       d="M10.631 0H.369c-.308 0-.48.311-.29.523l5.132 5.694c.147.163.43.163.578 0L10.92.523C11.11.311 10.94 0 10.631 0z"
//     ></path>
//   </svg>)
// }
// const Menu = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="21"
//       height="19"
//       fill="none"
//       viewBox="0 0 21 19"
//       className='mr-1'
//     >
//       <path
//         fill="#F4F3FF"
//         d="M.35 10.95h20.3v-2.9H.35v2.9zm0 7.25h20.3v-2.9H.35v2.9zM.35.8v2.9h20.3V.8H.35z"
//       ></path>
//     </svg>)
// }
// export default function DesktopNav({ navItems }: { navItems: string[] }) {
//   const app = useAppContext();

//   const router = useRouter();
//   return (
//     <ul className='flex justify-center items-center w-full ' >
//       {navItems.map((item, index) => (
//         <LiMenu as="li" key={index} className={`capitalize mx-4 `}>

//           <LiMenu.Button className='flex items-center capitalize'>{item === 'all' && <Menu />}{item}{item !== 'all' && <DropDown />} </LiMenu.Button>
//           <LiMenu.Items as="div" className='relative z-10'>
//             <ul className='absolute space-y-4  bg-[#e4e2e2]  w-[200px] h-[150px] py-4 my-2 inset-0 rounded-md text-brandbrown p-4 font-semibold'>

//               <li>New Collection</li>
//               <li>Launchpad</li>
//               <li>Auctions</li>


//             </ul>
//           </LiMenu.Items>

//         </LiMenu>
//       ))}

//       {/* <li className='ml-3  flex justify-center items-center '>Marketplace <DropDown/></li>
//       <li className='ml-3 flex justify-center items-center '>Creator <DropDown/></li>
//       <li className='ml-3 flex justify-center items-center '>Launchpad <DropDown/></li>
//       <li className='ml-6 mr-3 flex justify-center items-center '>Networks <DropDown/></li>
//       <li className='flex justify-center items-center '><Menu/>All</li> */}
//       <li ><div className='p-3 rounded-full bg-white ml-4'></div></li>
//       <li><button className='mx-8 border border-brandyellow py-1 px-8 rounded-xl' onClick={app.connected ? app.logOut : app.logIn}>{app.connected ? "Disconnect Walet" : "Connect Wallet"}</button></li>
//       {/* <li><button className='mx-8 border border-brandyellow py-1 px-8 rounded-xl' onClick={() => { router.push('/connect') }}>Connect Wallet</button></li> */}

//     </ul>
//   )
// }
