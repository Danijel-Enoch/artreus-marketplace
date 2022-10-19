import React from 'react'
import FooterNav from './FooterNav'
import FooterSocialLinks from './FooterSocialLinks'

export default function Footer() {
  return (
    <footer className='md:px-12 md:py-12 border-y border-[#2F2F2F1A] flex space-y-10 md:space-y-0 flex-col items-center md:items-start md:flex-row md:space-x-16 md:mt-16'>


        <section className='flex flex-col md:mt-5 md:mt-0 md:ml-5'>
            <h2 className='font-medium text-xl mb-6'>Get the latest Artreus updates</h2>
         <div className='inline-flex md:block'>
         <input type="text" placeholder="your email" className='inline-block md:inline text-[#666] bg-[#2F2F2F1A] py-2 px-4 rounded h-12 w-full md:w-[420px] outline-none'/>
            <button className='whitespace-nowrap md:whitespace-normal bg-brandpurple py-1 px-4 text-white rounded  -translate-x-20'>I'm in</button>
         </div>
           
             
          
            
        </section>
        <div className='flex space-x-16'>
        <FooterNav navHeader='Marketplace' navItems={['Explore','Blog','How it Works','Jobs','Help Center']}/>
       <FooterNav navHeader='Links' navItems={['Launchpad','Blog','How it Works','Jobs','Help Center']}/>

        </div>
      
       <section className='flex flex-col items-center md:block'>
           <h2 className='font-medium text-xl'>Join the Artreus Community</h2>
           <FooterSocialLinks/>
       </section>
    </footer>
  )
}
