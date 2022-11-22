import React from 'react'
import FooterNav from './FooterNav'
import FooterSocialLinks from './FooterSocialLinks'

export default function Footer() {
  return (
    <footer className='md:px-6 md:py-12 border-y border-[#2F2F2F1A] flex space-y-10 md:space-y-0 pb-10 flex-col items-center md:items-start md:flex-row md:space-x-10 md:mt-16 text-black'>


      <div className='w-full'>

        <section className='flex flex-col my-10'>
          <h2 className='font-medium text-xl mb-6 text-center'>Get the latest Artreus updates</h2>

          <div className='flex w-full justify-center'>
            <div className='w-[70%] md:w-[90%] flex justify-center'>
              <input type="text" placeholder="your email" className='align-center inline-block md:inline text-[#666] bg-[#2F2F2F1A] py-2 pl-4 rounded h-12 w-full m-auto outline-none' />

              <button className='whitespace-nowrap md:whitespace-normal bg-brandpurple py-1 px-4 text-white rounded w-fit'>I'm in</button>
            </div>

          </div>

        </section>

        <section className='mt-16 w-[80%] mx-auto flex-col j-center items-center md:block'>
          <h2 className='font-medium text-center text-xl'>Join the Artreus Community</h2>
          <FooterSocialLinks />
        </section>
      </div>

      <div className='space-x-36 md:space-x-10 j-center w-[80%] mx-auto'>
        <FooterNav navHeader='Marketplace' navItems={['Explore', 'Blog', 'How it Works', 'Jobs', 'Help Center']} />
        <FooterNav navHeader='Links' navItems={['Launchpad', 'Blog', 'How it Works', 'Jobs', 'Help Center']} />
      </div>


    </footer>
  )
}
