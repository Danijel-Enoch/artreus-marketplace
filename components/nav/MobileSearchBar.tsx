import React from 'react'

export default function MobileSearchBar({onBackButtonPresssed,onSearch}:{onBackButtonPresssed:()=>void,onSearch:()=>void}) {
   const recentSearches=['bored ape','crypto kitties','crypto punks','godzilla'] //fetch from local storage
    return (
      <>
    <div className='flex items-center w-full bg-brandbrown px-4 py-4' >
      <button name="left-arrow-button" onClick={()=>{onBackButtonPresssed()}}>
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1.6665L1.66667 6.99984L7 12.3332" stroke="#F4F3FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </button>
      <input  type="text" className='w-full text-[#ccc] p-1 mx-3 bg-brandbrown focus:outline-none focus:border-b' placeholder="Search"/>
      
      <button name="search-button" onClick={()=>{onSearch()}}>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0833 13.3333H14.1617L13.835 13.0183C14.9783 11.6883 15.6667 9.96167 15.6667 8.08333C15.6667 3.895 12.2717 0.5 8.08333 0.5C3.895 0.5 0.5 3.895 0.5 8.08333C0.5 12.2717 3.895 15.6667 8.08333 15.6667C9.96167 15.6667 11.6883 14.9783 13.0183 13.835L13.3333 14.1617V15.0833L19.1667 20.905L20.905 19.1667L15.0833 13.3333ZM8.08333 13.3333C5.17833 13.3333 2.83333 10.9883 2.83333 8.08333C2.83333 5.17833 5.17833 2.83333 8.08333 2.83333C10.9883 2.83333 13.3333 5.17833 13.3333 8.08333C13.3333 10.9883 10.9883 13.3333 8.08333 13.3333Z" fill="#F4F3FF"/>
        </svg>

      </button>
      </div>


      <div className='relative'>
      <div className='bg-[#ccc] px-4 pt-4 pb-48 absolute w-full z-10'>
          <div className='flex justify-between'>
            <h3 className='text-brandbrown font-semibold'>Recent</h3>
            <h3 className='text-brandbrown '>Clear</h3>

          </div>
        
          <div className='space-y-4 mt-4  flex flex-col justify-center '>
          {recentSearches.map((search,index)=>(
              <p className=' capitalize ' key={index}><svg className="inline-block mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6663 8.00016C14.6663 11.6802 11.6797 14.6668 7.99967 14.6668C4.31967 14.6668 1.33301 11.6802 1.33301 8.00016C1.33301 4.32016 4.31967 1.3335 7.99967 1.3335C11.6797 1.3335 14.6663 4.32016 14.6663 8.00016Z" stroke="#422E21" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.4729 10.1202L8.40626 8.88684C8.04626 8.6735 7.75293 8.16017 7.75293 7.74017V5.00684" stroke="#422E21" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
              {search}</p>
          ))}
          </div>
         

      </div>
   </div>

      </>
  )
}
