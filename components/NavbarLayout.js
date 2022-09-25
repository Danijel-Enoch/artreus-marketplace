import React from 'react'
import Logo from './Logo'
import Footer from './Footer'
import { useRouter } from 'next/router'
import useWindowSize from '../hooks/useWindowSize';
import DesktopNav from './nav/DesktopNav';
import MobileNav from './nav/MobileNav';
import MobileMenuNav from './nav/MobileMenuNav';
import MobileSearchBar from './nav/MobileSearchBar';
import Image from 'next/image';


export default function Main({children}) {
  const router=useRouter()
  const size=useWindowSize();
  const [showMobileMenu,setShowMobileMenu]=React.useState(false)
 const [showMobileSearch,setShowMobileSearch]=React.useState(false)
  const navItems=['marketplace','creator',"launchPad",'networks','all']
 
  return (
    <>
    {!showMobileSearch&&(  <header className='flex  justify-between py-4 px-6 bg-brandpurple  '>
       <button className='b lock' onClick={()=>{router.push('/')}} >
       {/* <Logo className='h-7 '/> */}
       <div className='w-32 h-5 relative'>
        <Image src={`/ArtLogo.png`}  layout='fill'/>
       </div>
        
      </button>
      <div>
    <nav className='text-white w-full '>
      {size.width&&size.width >= 765?(<DesktopNav navItems={navItems}/>):<MobileNav onClick={()=>{setShowMobileMenu(!showMobileMenu)}} onSearch={()=>{setShowMobileMenu(false);setShowMobileSearch(true)}}/>}
     
    
  </nav>
      </div>    
    </header>)}
  
  {showMobileSearch&&( <MobileSearchBar onSearch={()=>{}} onBackButtonPresssed={()=>{setShowMobileSearch(false)}}/>)}
  
   {showMobileMenu&&<MobileMenuNav/>}
   
    
    <div>
          <div className='-translate-y-10 md:translate-y-0'>
          {children}
          </div>
         
          <Footer/>

    </div>
    
    </>
  )
}
