import React from 'react'
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import ConnectModal from '../ConnectModal'


const DropDown = () => {
  return (<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="#301300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>)
}

const MenuItem = ({ showMenu }: any) => {

  const handleMenuClick = (close: any) => {
    close()
    showMenu(false)
  }

  return (
    <div className='w-full'>
      <Menu as="div" className={'w-full'} >
        <Menu.Button className="border-0 w-full mt-1 p-4 text-bodycopy bg-[#fff] flex justify-between items-center font-semibold capitalize">
          Marketplace <DropDown />
        </Menu.Button>
        <Menu.Items className='text-bodycopy'>
          <Menu.Item>
            {({ close }) => (
              <div className='px-8 py-2 space-y-4'>
                <span className='w-full'>
                  <Link href="/" onClick={() => (handleMenuClick(close))}>
                    Home
                  </Link>
                </span>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>

      <Menu as="div" className={'w-full'} >
        <Menu.Button className="w-full p-4 border-0 bg-[#fff] flex justify-between items-center font-semibold text-bodycopy capitalize">Creator <DropDown />
        </Menu.Button>
        <Menu.Items>
          <ul className='px-8 py-2 flex flex-col space-y-4 text-bodycopy ' >

            <Menu.Item>
              {({ close }) => (
                <span className='w-full'>
                  <Link href="/create" onClick={() => (handleMenuClick(close))}>
                    Create
                  </Link>
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ close }) => (
                <span className='w-full'>
                  <Link href="/profile/me" onClick={() => (handleMenuClick(close))}>
                    Profile
                  </Link>
                </span>
              )}
            </Menu.Item>
          </ul>
        </Menu.Items>
      </Menu>

      {/* <Menu as="div" className={'w-full'}>
        <Menu.Button className="w-full border-0 p-4 bg-[#fff] flex justify-between items-center font-semibold capitalize text-bodycopy">Launchpad <DropDown />
        </Menu.Button>
        <Menu.Items>
          <ul className=' px-8 p-2 flex flex-col space-y-4 text-bodycopy' >

            <Menu.Item>
              {({ close }) => (
                <span className='w-full'>
                  <Link href="/launchpad" onClick={() => (handleMenuClick(close))}>
                    Launchpad
                  </Link>
                </span>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ close }) => (
                <span className='w-full'>
                  <Link href="/stake" onClick={() => (handleMenuClick(close))}>
                    Stake Nft
                  </Link>
                </span>
              )}
            </Menu.Item>
          </ul>
        </Menu.Items>
      </Menu> */}
    </div>
  )
}

export default function MobileMenuNav({ showMenu, setSelected, isOpen, handleConnect, connected, setIsOpen }: any) {

  return (
    <div className='md:hidden bg-[#fff] absolute w-full z-10'>
      <MenuItem showMenu={showMenu} />

      <div className='flex justify-center px-6 py-4 bg-[#fff]'>
        <button
          className='bg-brandpurple px-6 py-2 border-0 flex items-center font-semibold'
          onClick={() => handleConnect()}>
          {connected ? "Disconnect Wallet" : "Connect Wallet"}
        </button>
      </div>

      <ConnectModal isOpen={isOpen} setSelected={setSelected} setIsOpen={setIsOpen} />
    </div>
  )
}
