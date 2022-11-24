import React from 'react'
import Footer from './Footer'
import { useRouter } from 'next/router'
import useWindowSize from '../hooks/useWindowSize';
import DesktopNav from './nav/DesktopNav';
import MobileNav from './nav/MobileNav';
import MobileMenuNav from './nav/MobileMenuNav';
import MobileSearchBar from './nav/MobileSearchBar';
import Image from 'next/image';
import { useWalletSelector, WalletSelectorContextValue } from '../contexts/WalletSelector';
import { useAppContext, VALUES } from '../contexts/AppContext';
import {AiOutlineSearch} from 'react-icons/ai';


export default function Main({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const size = useWindowSize();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  const [showMobileSearch, setShowMobileSearch] = React.useState(false)
  const navItems = ['marketplace', 'creator', "launchPad", 'networks', 'all']

  const nearWallet = useWalletSelector()
  const metamask = useAppContext()

  const [selected, setSelected] = React.useState(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [app, setApp] = React.useState<VALUES | WalletSelectorContextValue | null>(null)

  const handleConnectButton = () => {

    if (app == null) {
      setIsOpen(true)
      return
    } else if (app.connected) {
      app.logOut()
      setApp(null)
      setSelected(null)
      sessionStorage.removeItem('walletType')
      return
    }

    setSelected(null)
    setApp(null)
    setIsOpen(true)
  }

  if (selected == 'metamask' && app != metamask) {
    setApp(metamask)
  }

  if (selected == 'nearWallet' && app != nearWallet) {
    setApp(nearWallet)
  }

  if (app != null) {
    if (app == nearWallet) {
      app.setConnectedValue(app.selector.isSignedIn())
    }

    if (app.connected == false) {
      app.logIn()
    } else {
      localStorage.setItem('accType', JSON.stringify({ name: 'metamask', connected: 'true' }))
    }
  }

  console.log(app)


  return (
    <div className='relative'>


      {!showMobileSearch && (
        <header className='flex justify-between py-4 px-3 bg-brandpurple '>
          <button className='b lock border-0' onClick={() => { router.push('/') }} >
            {/* <Logo className='h-7 '/> */}
            <div className='w-[8rem] h-[20px] relative'>
              <Image src={`/ArtLogo.png`} layout='fill' />
            </div>
          </button>

          <div>
            <nav className='text-white w-fit w-full '>
              <div className='hidden md:flex'>
                <DesktopNav navItems={navItems} isOpen={isOpen} handleConnect={handleConnectButton} setSelected={setSelected} app={app} setApp={setApp} setIsOpen={setIsOpen} />
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

        <div className='flex justify-between items-center gap-x-5 flex-row md:my-5 invisible md:visible bg-[#2F2F2F1A] border-[#2F2F2F1A] outline-none px-6 py-2 rounded-full h-[2rem] w-[50%] mx-auto'>
          <input type="text" placeholder="Search Collections or creator" className='text-bodycopy border-2 border-black' />
          <button className='p-0 m-0 border-0 cursor-pointer'><AiOutlineSearch color='#2F2F2FB2' /></button>
        </div>

        <div className='-translate-y-10 md:translate-y-0'>
          {children}
        </div>

        <Footer />

      </div>




    </div>
  )
}
