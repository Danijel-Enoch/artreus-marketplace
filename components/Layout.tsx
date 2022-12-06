import React from 'react'
import Footer from './Footer/Footer'
import { useRouter } from 'next/router'
import useWindowSize from '../hooks/useWindowSize';
import DesktopNav from './nav/DesktopNav';
import MobileNav from './nav/MobileNav';
import MobileMenuNav from './nav/MobileMenuNav';
import MobileSearchBar from './nav/MobileSearchBar';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';

import { nearWallet } from '../contracts-connector/near/near-interface'
import { useAppContext } from '../contexts/AppContext';
import Header from './nav/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {

  const router = useRouter()
  const size = useWindowSize();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  const [showMobileSearch, setShowMobileSearch] = React.useState(false)
  const navItems = ['marketplace', 'creator', "launchPad", 'networks', 'all']

  const metamask = useAppContext()

  React.useEffect(() => {
    nearWallet.startUp()
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
        nearWallet.signOut()
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

    if (selected == 'nearWallet' && !nearWallet.connected) {
      try {
        nearWallet.signIn()
        setConnected(nearWallet?.connected)
      } catch (error) {
        console.log(error)
      }
    }
  }, [selected])


  React.useEffect(() => {
    if (metamask.connected || nearWallet.connected) {
      setConnected(true)
    } else {
      setConnected(false)
    }
  }, [metamask.connected, nearWallet.connected])

  return (
    <div className='relative'>
      <Header />

      <div className={router.pathname !== "/profile/me" ? `md:px-10` : `px-0`}>
        <div className='flex justify-between items-center gap-x-5 flex-row md:my-5 invisible md:visible bg-[#2F2F2F1A] border-[#2F2F2F1A] outline-none px-6 py-2 rounded-full h-[2rem] w-[50%] mx-auto'>
          <input type="text" placeholder="Search Collections or creator" className='text-bodycopy border-2 border-black' />
          <AiOutlineSearch color='#2F2F2FB2' />
        </div>

        <div className='-translate-y-10 md:translate-y-0'>
          {children}
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Layout
