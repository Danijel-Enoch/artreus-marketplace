import React from 'react'
import Footer from './Footer'
import { useRouter } from 'next/router'
import useWindowSize from '../hooks/useWindowSize';
import DesktopNav from './nav/DesktopNav';
import MobileNav from './nav/MobileNav';
import MobileMenuNav from './nav/MobileMenuNav';
import MobileSearchBar from './nav/MobileSearchBar';
import Image from 'next/image';
import { useAppContext } from '../contexts/AppContext';

import { Wallet } from '../contracts-connector/near/near-wallet'
import { walletSignIn } from '../contracts-connector/near/near-interface'

export default function Main({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const size = useWindowSize();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  const [showMobileSearch, setShowMobileSearch] = React.useState(false)
  const navItems = ['marketplace', 'creator', "launchPad", 'networks', 'all']

  const metamask = useAppContext()

  const [nearWallet, setNearWallet] = React.useState<Wallet | null>(null)

  React.useEffect(() => {
    const wallet = new Wallet({ createAccessKeyFor: 'artreus.danieldave.testnet' })
    setNearWallet(wallet)
  }, [])

  const [selected, setSelected] = React.useState(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [connected, setConnected] = React.useState(false)


  const handleConnectButton = () => {

    if (!connected) {
      setIsOpen(true)
      return
    } else if (connected) {
      if (selected == 'metamask') {
        metamask.signOut()
      } else {
        nearWallet?.signOut()
      }
      setConnected(false)
      setSelected(null)
      return
    }

    setSelected(null)
    setIsOpen(true)
  }

  React.useEffect(() => {

    if (selected == 'metamask' && !metamask.connected) {
      metamask.signIn()
    }

    if (selected == 'nearWallet' && !nearWallet?.connected) {
      try {
        setConnected(walletSignIn())
        console.log(connected)
      } catch (error) {
        console.log(error)
      }
    }
  }, [selected])

  console.log(nearWallet)


  React.useEffect(() => {
    if (metamask.connected || nearWallet?.connected) {
      setConnected(true)
    } else {
      setConnected(false)
    }
  }, [metamask.connected, nearWallet?.connected])





  return (
    <div className='relative'>


      {!showMobileSearch && (
        <header className='flex justify-between py-4 px-3 bg-brandpurple '>
          <button className='b lock' onClick={() => { router.push('/') }} >
            {/* <Logo className='h-7 '/> */}
            <div className='w-[8rem] h-[20px] relative'>
              <Image src={`/ArtLogo.png`} layout='fill' />
            </div>
          </button>

          <div>
            <nav className='text-white w-fit w-full '>
              <div className='hidden md:flex'>
                <DesktopNav navItems={navItems} isOpen={isOpen} handleConnect={handleConnectButton} setSelected={setSelected} connected={connected} setIsOpen={setIsOpen} />
              </div>

              <div className='md:hidden'>
                <MobileNav onClick={() => { setShowMobileMenu(!showMobileMenu) }} onSearch={() => { setShowMobileMenu(false); setShowMobileSearch(true) }} />
              </div>

            </nav>
          </div>
        </header>)}

      {showMobileSearch && (<MobileSearchBar onSearch={() => { }} onBackButtonPresssed={() => { setShowMobileSearch(false) }} />)}

      {showMobileMenu && <MobileMenuNav />}



      <div className={router.pathname !== "/profile/me" ? `md:px-10` : `px-0`}>

        <div className=' flex justify-center items-center md:my-5 invisible md:visible'>
          <input type="text" placeholder="Search Collections or creator" className='md:w-[80%]  bg-[#2F2F2F1A] border border-[#2F2F2F1A] outline-none px-6 py-2 rounded-full' />
          <button>
            <svg className="w-4 h-4 -translate-x-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6124 15.516C19.0648 13.534 19.7154 11.0767 19.4338 8.63572C19.1523 6.19471 17.9595 3.95001 16.094 2.35069C14.2286 0.75138 11.828 -0.0845965 9.37265 0.0100132C6.91728 0.104623 4.58817 1.12284 2.8513 2.86096C1.11442 4.59908 0.0978694 6.92891 0.00501667 9.38435C-0.0878361 11.8398 0.749858 14.2397 2.35051 16.1041C3.95115 17.9684 6.19671 19.1596 8.63792 19.4394C11.0791 19.7192 13.536 19.0669 15.5169 17.613H15.5154C15.5604 17.673 15.6084 17.73 15.6624 17.7855L21.4374 23.5605C21.7187 23.842 22.1002 24.0002 22.4981 24.0003C22.896 24.0004 23.2777 23.8425 23.5591 23.5612C23.8406 23.28 23.9988 22.8984 23.9989 22.5005C23.9991 22.1026 23.8412 21.721 23.5599 21.4395L17.7849 15.6645C17.7313 15.6102 17.6736 15.5601 17.6124 15.5145V15.516ZM17.9994 9.75C17.9994 10.8334 17.786 11.9062 17.3714 12.9071C16.9568 13.9081 16.3491 14.8175 15.583 15.5836C14.8169 16.3497 13.9075 16.9574 12.9065 17.372C11.9056 17.7866 10.8328 18 9.74939 18C8.66599 18 7.59319 17.7866 6.59226 17.372C5.59132 16.9574 4.68185 16.3497 3.91576 15.5836C3.14968 14.8175 2.54199 13.9081 2.12739 12.9071C1.71279 11.9062 1.49939 10.8334 1.49939 9.75C1.49939 7.56196 2.36859 5.46354 3.91576 3.91637C5.46294 2.36919 7.56136 1.5 9.74939 1.5C11.9374 1.5 14.0358 2.36919 15.583 3.91637C17.1302 5.46354 17.9994 7.56196 17.9994 9.75Z" fill="#301300" />
            </svg>

          </button>


        </div>

        <div className='-translate-y-10 md:translate-y-0'>
          {children}
        </div>

        <Footer />

      </div>




    </div>
  )
}
