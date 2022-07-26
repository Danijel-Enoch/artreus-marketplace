import React from 'react'
import SocialLinks from '../SocialLinks';
type props={
    name:string,
    details:string,
    imgUrl:string
}
const Stat=({label,stat}:{label:string,stat:string})=>{
    return(<li className='pl-3  text-brandbrown'><span className='block font-bold'>{stat}</span> <span className='block text-sm'>{label}</span></li>)

}

export default function Banner({name,details,imgUrl}:props) {
  return (
      <>
    <div className='w-full px-32 py-16 border-2 border-brandbrown rounded-xl' style={{background:'#333',backgroundImage:`url(${imgUrl})`,backgroundSize:'cover'}}>
      <div className='px-6 text-[#D9D9D9]'>
          <h2 className='text-4xl font-bold w-3/12'>{name}</h2>
            <p className='my-16'>{details}</p>
      </div>
       
    </div>
    <div className='-translate-y-16 translate-x-36  w-[450px] '>
        <ul className='flex  space-x-4 divide-x-2 border-2 bg-[#BDBDBD] border-brandyellow rounded-2xl divide-brandyellow py-6 px-8   items-center justify-center '>
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
