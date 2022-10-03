import React from 'react'
import SocialLinks from '../SocialLinks';
type props={
    name:string,
    details:string,
    imgUrl:string
}
const Stat=({label,stat}:{label:string,stat:string})=>{
    return(<li className='pl-3 whitespace-nowrap  text-brandpurple'><span className='block text-sm md:text-lg font-bold'>{stat}</span> <span className='block text-xs md:text-sm'>{label}</span></li>)

}

export default function Banner({name,details,imgUrl}:props) {
  return (
      <>
    <div className='mt-5 md:mt-0 px-5  w-full md:px-32 md:py-16 border-2 border-brandpurple md:rounded-xl' style={{background:'#333',backgroundImage:`url(${imgUrl})`,backgroundSize:'cover'}}>
      <div className='md:px-6 text-[#D9D9D9]'>
          <h2 className='mt-4 md:mt-0 text-2xl md:text-4xl font-bold w-[10ch]'>{name}</h2>
            <p className=' my-6  md:my-16 w-[30ch] md:w-[50ch] '>{details}</p>
      </div>
       
    </div>
    <div className='ml-5 md:ml-0 -translate-y-5 md:-translate-y-16 md:translate-x-36   md:w-[450px] '>
        <ul className='inline-flex md:flex  space-x-4 divide-x-2 border-2 bg-[#f5f5f5] border-brandyellow rounded-2xl divide-brandyellow px-4 py-2 md:py-6 md:px-8   items-center justify-center '>
            <Stat label="Items" stat="5000"/>
            <Stat label="Listed" stat="500"/>
            <Stat label="Floor Price" stat="500.00"/>
            <Stat label="Volume Tracked" stat="-----"/>
        </ul>

       <SocialLinks twitter='' discord='' watchCount='' website=''/>
    </div>
   
    </>
  )
}
