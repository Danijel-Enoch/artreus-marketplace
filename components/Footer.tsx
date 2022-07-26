import React from 'react'
import FooterNav from './FooterNav'
import FooterSocialLinks from './FooterSocialLinks'

export default function Footer() {
  return (
    <div className='px-8 py-10 border-t border-[#444] flex space-x-16 mt-16'>


        <section className=''>
            <h2 className='font-bold text-xl mb-4'>Get the latest Artreus updates</h2>
            <input type="text" placeholder="your email" className='text-[#666] bg-[#f8f8f8] py-2 px-4 rounded w-[300px]'/>
            <button className=' bg-brandbrown py-1 px-4 text-white rounded -translate-x-20'>I'm in</button>
        </section>
       <FooterNav navHeader='Marketplace' navItems={['Explore','Blog','How it Works','Jobs','Help Center']}/>
       <FooterNav navHeader='Links' navItems={['Launchpad','Blog','How it Works','Jobs','Help Center']}/>
       <section>
           <h2 className='font-bold text-xl'>Join the Artreus Community</h2>
           <FooterSocialLinks/>
       </section>
    </div>
  )
}
