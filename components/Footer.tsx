import React from 'react'
import FooterNav from './FooterNav'
import FooterSocialLinks from './FooterSocialLinks'

export default function Footer() {
  return (
    <div className='md:px-8 md:py-10 border-t border-[#444] flex space-y-10 md:space-y-0 flex-col items-center md:flex-row md:space-x-16 md:mt-16'>


        <section className='flex flex-col items-center  mt-5 md:mt-0'>
            <h2 className='font-bold text-xl mb-4'>Get the latest Artreus updates</h2>
         <div className='inline-flex md:block'>
         <input type="text" placeholder="your email" className='inline-block md:inline text-[#666] bg-[#f8f8f8] py-2 px-4 rounded  '/>
            <button className='whitespace-nowrap md:whitespace-normal bg-brandbrown py-1 px-4 text-white rounded  -translate-x-20'>I'm in</button>
         </div>
           
             
          
            
        </section>
        <div className='flex space-x-16'>
        <FooterNav navHeader='Marketplace' navItems={['Explore','Blog','How it Works','Jobs','Help Center']}/>
       <FooterNav navHeader='Links' navItems={['Launchpad','Blog','How it Works','Jobs','Help Center']}/>

        </div>
      
       <section className='flex flex-col items-center md:block'>
           <h2 className='font-bold text-xl'>Join the Artreus Community</h2>
           <FooterSocialLinks/>
       </section>
    </div>
  )
}
