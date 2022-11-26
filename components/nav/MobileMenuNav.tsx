import React from 'react'
import { Menu } from '@headlessui/react'
import Link from 'next/link'


const MenuItem = () => {
    return (
        <div className='w-full'>
            <Menu as="div" className={'w-full'} >
                <Menu.Button className="border-0 w-full mt-1 p-4 text-bodycopy bg-[#fff] flex justify-between items-center font-semibold capitalize">Marketplace<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#301300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </Menu.Button>
                <Menu.Items className="text-bodycopy 
                ">
                    <ul className='px-8 py-2 space-y-4 ' >
                        <li className='w-full]'>
                            <Link href="/" className='text-bold'>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/new" className='text-bold'>
                                New Collection
                            </Link>
                        </li>
                        <li>
                            <Link href="/auctions" className='text-bold'>
                                Auctions
                            </Link>
                        </li>
                    </ul>
                </Menu.Items>
            </Menu>

            <Menu as="div" className={'w-full'} >
                <Menu.Button className="w-full p-4 border-0 bg-[#fff] flex justify-between items-center font-semibold text-bodycopy capitalize">Creator<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#301300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </Menu.Button>
                <Menu.Items>
                    <ul className='px-8 py-2 space-y-4 text-bodycopy ' >

                        <li>
                            <Link href="/create">
                                <a>Create</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/profile/me">
                                <a>Profile</a>
                            </Link>
                        </li>
                    </ul>
                </Menu.Items>
            </Menu>

            <Menu as="div" className={'w-full'}>
                <Menu.Button className="w-full border-0 p-4 bg-[#fff] flex justify-between items-center font-semibold capitalize text-bodycopy">Launchpad<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#301300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </Menu.Button>
                <Menu.Items>
                    <ul className=' px-8 p-2 space-y-4 text-bodycopy' >
                        <li>
                            <Link href="/launchpad">
                                <a>Launchpad</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/stake">
                                <a>Stake Nft</a>
                            </Link>
                        </li>
                    </ul>
                </Menu.Items>
            </Menu>


        </div>


    )
}

export default function MobileMenuNav() {
    const menuItems = ['marketplace', 'creators', 'launchpad', 'networks']
    return (
        <div className='md:hidden bg-[#fff] absolute w-full z-10'>
            <MenuItem />
            <div className='flex justify-center px-6 py-4 bg-[#fff]'>
                <button className='bg-brandpurple px-6 py-2 border-0 flex items-center font-semibold '><svg className='mr-2' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2.25C7.9625 2.25 8.75 3.0375 8.75 4C8.75 4.9625 7.9625 5.75 7 5.75C6.0375 5.75 5.25 4.9625 5.25 4C5.25 3.0375 6.0375 2.25 7 2.25ZM7 11C9.3625 11 12.075 12.1287 12.25 12.75H1.75C1.95125 12.12 4.64625 11 7 11ZM7 0.5C5.06625 0.5 3.5 2.06625 3.5 4C3.5 5.93375 5.06625 7.5 7 7.5C8.93375 7.5 10.5 5.93375 10.5 4C10.5 2.06625 8.93375 0.5 7 0.5ZM7 9.25C4.66375 9.25 0 10.4225 0 12.75V14.5H14V12.75C14 10.4225 9.33625 9.25 7 9.25Z" fill="#FFF" />
                </svg>
                    Account</button>

            </div>

        </div>
    )
}










// import React from 'react'
// import { Menu } from '@headlessui/react'

// const MenuItem = ({ title }: { title: string }) => {
//     return (
//         <Menu as="div" className={'w-full'} >
//             <Menu.Button className="w-full p-4 bg-[#ccc] flex justify-between items-center font-semibold capitalize">{title}<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M1 1L5 5L9 1" stroke="#301300" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
//             </svg>
//             </Menu.Button>
//             <Menu.Items >
//                 <ul className=' px-8 p-2 space-y-4' >

//                     <li>New Collection</li>
//                     <li>Launchpad</li>
//                     <li>Auctions</li>


//                 </ul>
//             </Menu.Items>

//         </Menu>

//     )
// }

// export default function MobileMenuNav() {
//     const menuItems = ['marketplace', 'creators', 'launchpad', 'networks']
//     return (
//         <div className='md:hidden bg-[#bdbdbd] absolute w-full z-10'>
//             {menuItems.map((item, index) => (
//                 <MenuItem title={item} key={index} />
//             ))}
//             <div className='flex justify-center px-6 py-4 bg-[#ccc]'>
//                 <button className='bg-brandyellow px-6 py-2 flex items-center font-semibold '><svg className='mr-2' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M7 2.25C7.9625 2.25 8.75 3.0375 8.75 4C8.75 4.9625 7.9625 5.75 7 5.75C6.0375 5.75 5.25 4.9625 5.25 4C5.25 3.0375 6.0375 2.25 7 2.25ZM7 11C9.3625 11 12.075 12.1287 12.25 12.75H1.75C1.95125 12.12 4.64625 11 7 11ZM7 0.5C5.06625 0.5 3.5 2.06625 3.5 4C3.5 5.93375 5.06625 7.5 7 7.5C8.93375 7.5 10.5 5.93375 10.5 4C10.5 2.06625 8.93375 0.5 7 0.5ZM7 9.25C4.66375 9.25 0 10.4225 0 12.75V14.5H14V12.75C14 10.4225 9.33625 9.25 7 9.25Z" fill="#3A1801" />
//                 </svg>
//                     Account</button>

//             </div>

//         </div>
//     )
// }
