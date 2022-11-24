import React,{Fragment} from 'react'
import SectionTitle from '../SectionTitle'
import SeeAllButton from './SeeAllButton'
import {Tab} from '@headlessui/react'
import Image from 'next/image'

const TabHeader=({tabTitles}:{tabTitles:string[]})=>{
    return(
    <nav className='self-center border-0 flex items-center'>
      <Tab.List className='flex bg-brandpurple space-x-2 text-white rounded-full border-0'>
      {tabTitles.map((title,i)=>(
      <Tab as={Fragment} key={i} >
        {({selected})=>(
          <button className={`py-2 px-3 ${selected&&'bg-[#FB005A] border-0 m-1 rounded-full pl-4 outline-none'}`}> {title}</button>
        )}
      
        </Tab>
      ))}
        
      </Tab.List>
      </nav>)
}
const CollectionPrice=({price}:{price:number})=>{
  return(<div className='flex space-x-2 items-center'>
                      <Image src={`/CMPBlue3D.png`} width={13} height={13}/>
    <p className='text-[#747474]'>{price}</p></div>)

}
const Collection=({name,index,floorPrice,currentPrice}:{name:string,index:number,floorPrice:number,currentPrice:number})=>{
  const percentage=Math.floor(((currentPrice-floorPrice)/floorPrice)*100)
  return(
  <div className='flex items-center p-4'>
      <div className='w-10 h-10  flex items-center space-x-1'><h3 className='font-bold text-bodycopy'>{index}</h3><img src="/profile-picture.png" className='rounded-full w-full h-full'/></div>
      <div className='ml-8 '><h3 className='font-bold text-brandpurple'>{name}</h3><h4 className='flex items-center space-x-2 text-[#747474]'><p>Floor :</p><CollectionPrice price={floorPrice}/></h4></div>
      <div className='ml-16 md:ml-10'><p className={`${percentage>0?'text-green-800':'text-red-900'} font-bold  `}>{percentage>0&&'+'}{percentage} %</p> <CollectionPrice price={currentPrice}/></div>
  </div>)
}
export default function PopularCollections() {
    const collections=Array.from(Array(12).keys()) 
    const tabTitles=['1 hour','24 hours','7days','30 days']
  return (
    <Tab.Group>
      <section className='px-0 md:px-0' >
        <div className='md:flex  md:justify-between md:items-center'> <div className='space-y-4 md:space-y-0 flex flex-col  md:flex-row md:space-x-10 '><SectionTitle title="Popular Collections"/ ><TabHeader tabTitles={tabTitles}/> <div></div></div> <SeeAllButton/></div>
     
        <Tab.Panels className='px-4'>
         {tabTitles.map((title,index)=>(
            <Tab.Panel key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection,index)=>(<Collection name={`${title}`} index={index + 1} key={index} currentPrice={2} floorPrice={5}/>))}
           </Tab.Panel>
         ))}
         
        </Tab.Panels>
        
        {/* <Collection name="Transformer" index={1} floorPrice={2} currentPrice={5}/> */}
      {/* {(items.map(()=>(<h1>Hello</h1>))} */}
    </section>
    </Tab.Group>
  )
}


{/* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="13"
  height="13"
  fill="none"
  viewBox="0 0 13 13"
>
  <path
    fill="#B87514"
    d="M6.5 13a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM4.922 5.852L6.5 4.274l1.579 1.578.918-.918L6.5 2.437 4.004 4.934l.918.918zM2.438 6.5l.918.918.918-.918-.918-.918-.918.918zm2.484.648l-.92.917.002.002L6.5 10.561l2.497-2.496-.918-.919L6.5 8.727 4.922 7.147zM8.726 6.5l.918.918.918-.918-.918-.918-.918.918zm-1.295 0L6.5 5.567l-.689.688-.079.08-.163.163-.001.001.001.001.93.93.933-.93V6.5z"
  ></path>
</svg> */}