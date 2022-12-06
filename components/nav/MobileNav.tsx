import React from 'react'
import { useRouter } from "next/router"

export default function MobileNav({ onClick, onSearch }: { onClick: () => void, onSearch: () => void }) {
  const router = useRouter();

  return (
    <>
      <ul className='flex space-x-3 items-center relative'>
        <li>
          <button name="search-button-mobile" className='border-0' onClick={() => { onSearch() }}>
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0833 13.3333H14.1617L13.835 13.0183C14.9783 11.6883 15.6667 9.96167 15.6667 8.08333C15.6667 3.895 12.2717 0.5 8.08333 0.5C3.895 0.5 0.5 3.895 0.5 8.08333C0.5 12.2717 3.895 15.6667 8.08333 15.6667C9.96167 15.6667 11.6883 14.9783 13.0183 13.835L13.3333 14.1617V15.0833L19.1667 20.905L20.905 19.1667L15.0833 13.3333ZM8.08333 13.3333C5.17833 13.3333 2.83333 10.9883 2.83333 8.08333C2.83333 5.17833 5.17833 2.83333 8.08333 2.83333C10.9883 2.83333 13.3333 5.17833 13.3333 8.08333C13.3333 10.9883 10.9883 13.3333 8.08333 13.3333Z" fill="#F5F5F5" />
            </svg>

          </button>
        </li>
        <li><button name="account-button-mobile" className='border-0' onClick={() => router.push("/profile/me")}>
          <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00015 2.46146C10.1848 2.46146 11.154 3.43069 11.154 4.61531C11.154 5.79993 10.1848 6.76916 9.00015 6.76916C7.81554 6.76916 6.8463 5.79993 6.8463 4.61531C6.8463 3.43069 7.81554 2.46146 9.00015 2.46146ZM9.00015 13.2307C11.9078 13.2307 15.2463 14.6199 15.4617 15.3845H2.53861C2.7863 14.6092 6.10323 13.2307 9.00015 13.2307ZM9.00015 0.307617C6.62015 0.307617 4.69246 2.23531 4.69246 4.61531C4.69246 6.99531 6.62015 8.923 9.00015 8.923C11.3802 8.923 13.3078 6.99531 13.3078 4.61531C13.3078 2.23531 11.3802 0.307617 9.00015 0.307617ZM9.00015 11.0768C6.12477 11.0768 0.384766 12.5199 0.384766 15.3845V17.5384H17.6155V15.3845C17.6155 12.5199 11.8755 11.0768 9.00015 11.0768Z" fill="#F5F5F5" />
          </svg>

        </button></li>
        <li>
          <button name="menu-button-mobile" className='border-0' onClick={() => onClick()}>
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.333008 0.833496V3.16683H23.6663V0.833496H0.333008ZM0.333008 7.8335V10.1668H23.6663V7.8335H0.333008ZM0.333008 14.8335V17.1668H23.6663V14.8335H0.333008Z" fill="#F5F5F5" />
            </svg>

          </button>
        </li>



      </ul>





    </>
  )
}
