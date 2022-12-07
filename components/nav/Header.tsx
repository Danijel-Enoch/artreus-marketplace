import React from 'react'
import DesktopNav from '../nav/DesktopNav';
import MobileNav from '../nav/MobileNav';
import MobileMenuNav from '../nav/MobileMenuNav';
import MobileSearchBar from '../nav/MobileSearchBar';
import Image from 'next/image';


import { nearWallet } from '../../contracts-connector/near/near-interface'
import { useAppContext } from '../../contexts/AppContext';
import Link from 'next/link';

const Header = () => {

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
    <>
      {!showMobileSearch && (
        <header className='flex justify-between py-4 px-3 bg-brandpurple '>
          <div className='a-center'>
            <Link className='block border-0' href='/' >
              <div className='w-[8rem] h-[20px] relative'>
                <Image alt='ArtLogo' src={`/ArtLogo.png`} layout='fill' />
              </div>
            </Link>
          </div>

          <div>
            <nav className='text-white w-fit '>
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

      {showMobileMenu && <MobileMenuNav showMenu={setShowMobileMenu} isOpen={isOpen} handleConnect={handleConnectButton} setSelected={setSelected} connected={connected} setIsOpen={setIsOpen} />}
    </>
  )
}

export default Header