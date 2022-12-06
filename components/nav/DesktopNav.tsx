import React from 'react'
import { Menu as LiMenu } from '@headlessui/react'
import Link from 'next/link'
import ConnectModal from '../ConnectModal'


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

export default function DesktopNav({ navItems, setSelected, isOpen, handleConnect, connected, setIsOpen }: any) {

  return (
    <>
      <ul className='flex justify-center items-center w-full ' >

        <LiMenu as="li" className={`capitalize mx-2 `}>

          <LiMenu.Button className='flex md:text-sm lg:text-md border-0 items-center capitalize'>Marketplace{<DropDown />}
          </LiMenu.Button>
          <LiMenu.Items as="div" className='relative z-10'>
            <ul className='absolute flex flex-col justify-center items-center space-y-4  bg-[#e4e2e2] w-[200px] h-fit py-5 my-2 inset-0 rounded-md text-brandpurple p-4 font-semibold'>

              <li className='w-full'>
                <Link href="/">
                  Home
                </Link>
              </li>
            </ul>
          </LiMenu.Items>
        </LiMenu>

        <LiMenu as="li" className={`capitalize mx-2 `}>

          <LiMenu.Button className='flex md:text-sm lg:text-md border-0 items-center capitalize'>Creator{<DropDown />} </LiMenu.Button>
          <LiMenu.Items as="div" className='relative z-10'>
            <ul className='absolute space-y-4 bg-[#e4e2e2]  w-[200px] h-fit py-5 flex flex-col justify-center items-center my-2 inset-0 rounded-md text-brandpurple p-4 font-semibold'>

              <li className='w-full'>
                <Link href="/create-cad">
                  Create On CMP
                </Link>
              </li>

              <li className='w-full'>
                <Link href="/create-near">
                  Create On Near
                </Link>
              </li>

              <li className='w-full'>
                <Link href="/profile/me">
                  Profile
                </Link>
              </li>

            </ul>
          </LiMenu.Items>
        </LiMenu>

        <LiMenu as="li" className={`capitalize mx-2 `}>

          <LiMenu.Button className='flex md:text-sm border-0 lg:text-md items-center capitalize'>Launchpad{<DropDown />} </LiMenu.Button>
          <LiMenu.Items as="div" className='relative z-10'>
            <ul className='absolute space-y-4  bg-[#e4e2e2]  w-[200px] h-[100px] py-4 my-2 inset-0 rounded-md text-brandpurple p-4 flex flex-col justify-center items-center font-semibold'>
              <li className='w-full'>
                <Link href="/launchpad">
                  Launchpad
                </Link>
              </li>

              <li className='w-full'>
                <Link href="/stake">
                  Stake Nft
                </Link>
              </li>

            </ul>
          </LiMenu.Items>
        </LiMenu>

        <li>
          <button
            className='md:text-sm lg:text-md border-2 border-brandyellow py-2 rounded-lg'
            onClick={() => handleConnect()}>
            {connected ? "Disconnect Wallet" : "Connect Wallet"}
          </button>
        </li>
      </ul>

      <ConnectModal isOpen={isOpen} setSelected={setSelected} setIsOpen={setIsOpen} />

    </>
  )
}


