import React from 'react'
import { Menu } from '@headlessui/react'
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

        <Menu as="li" className={`capitalize mx-2 `}>

          <Menu.Button className='flex md:text-sm lg:text-md border-0 items-center capitalize'>
            Marketplace{<DropDown />}
          </Menu.Button>

          <Menu.Items as="div" className='relative z-10'>
            <Menu.Item>
              {({ close }) => (
                <div className='absolute flex flex-col justify-center items-center bg-[#e4e2e2] h-fit py-2 inset-0 rounded-md text-brandpurple p-2 font-semibold'>
                  <span className='w-full border-0'>
                    <Link href="/" className='w-full px-10 pl-2 border-2 border-red-500' onClick={close}>
                      Home
                    </Link>
                  </span>
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>

        <Menu as="li" className={`capitalize mx-2 `}>

          <Menu.Button className='flex md:text-sm lg:text-md border-0 items-center capitalize'>
            Creator{<DropDown />}
          </Menu.Button>

          <Menu.Items as="div" className='relative z-10'>
            <div className='absolute bg-[#e4e2e2] w-fit h-fit inset-0 rounded-md text-brandpurple p-3 flex flex-col justify-center items-center font-semibold'>

              <Menu.Item>
                {({ close }) => (
                  <span className='w-full py-[0.3rem] border-0'>
                    <Link href="/create" className='w-full px-10 pl-2' onClick={close}>
                      Create
                    </Link>
                  </span>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ close }) => (
                  <span className='w-full py-[0.3rem] border-0'>
                    <Link href="/profile/me" className='w-full px-10 pl-2' onClick={close}>
                      Profile
                    </Link>
                  </span>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>

        <Menu as="li" className={`capitalize mx-2 `}>

          <Menu.Button className='flex md:text-sm border-0 lg:text-md items-center capitalize'>
            Launchpad{<DropDown />}
          </Menu.Button>
          <Menu.Items as="div" className='relative z-10'>
            <div className='absolute bg-[#e4e2e2] w-fit h-fit inset-0 rounded-md text-brandpurple p-3 flex flex-col justify-center items-center font-semibold'>

              <Menu.Item>
                {({ close }) => (
                  <span className='w-full py-[0.3rem] border-0'>
                    <Link href="/launchpad" className='w-full px-10 pl-2' onClick={close}>
                      Launchpad
                    </Link>
                  </span>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ close }) => (
                  <span className='w-full py-[0.3rem] border-0'>
                    <Link href="/stake" className='w-full px-10 pl-2' onClick={close}>
                      Stake Nft
                    </Link>
                  </span>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>

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


