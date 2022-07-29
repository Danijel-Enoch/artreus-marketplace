import React from 'react'
import { captureRejectionSymbol } from 'stream'
export type FeaturedNft={
  name:string,
  description:string,
  imageUrl:string
}
type props ={
  featuredNfts:FeaturedNft[]
}
export default function FeaturedNfts({featuredNfts}:props) {
  
  
  const [name,setName]=React.useState(featuredNfts[0].name)
  const [description,setDescription]=React.useState(featuredNfts[0].description)
  const [imageUrl,setImageUrl]=React.useState(featuredNfts[0].imageUrl)
  const current=React.useRef(0)
  const [currentIndex,setCurrentIndex]=React.useState(0)
  
  
  React.useEffect(()=>{

  const interval=  setInterval(function(){
      
    
    
    
    if(current.current >= featuredNfts.length){
     
     current.current =0
     setCurrentIndex(current.current)
     
    }
  
    // setImageUrl(featuredNfts[current.current].imageUrl)
    // setName(featuredNfts[current.current].name)
    // setDescription(featuredNfts[current.current].description) 
    
    current.current=current.current + 1 
    setCurrentIndex(current.current + 1)

    
      
     
    
    
    
       
    },4500)
    
    return ()=> clearInterval(interval)

  },[])
  return (
    <>
  
   {featuredNfts.map(({name,imageUrl,description},index)=>(
      <div key={index} className={`py-6 px-10 flex space-x-6 lg:h-[400px] ${!(index === (currentIndex -2))?'hidden':'visible'} '`}>
     
      <div className=''>
          <h1 className="text-4xl font-extrabold text-brandbrown mb-5 w-[10ch]">{name}</h1>
          <p className='w-[50ch]'>{description}</p>
      <button className=' font-semibold bg-brandyellow text-black py-2 px-6 rounded mt-10'>Explore Collection</button>
        </div>
        <div className='pl-20 w-full h-full'>
          <img src={`${imageUrl}`} className='w-full h-full'/>
        </div>
  </div>  
   ))}
  <div className='mb-5 flex space-x-2 justify-center'>
   
    {featuredNfts.map((_,index)=>(<div key={index} className={`w-[50px] p-1 ${!(index === (currentIndex -2))?'bg-[#6F6F6F]':'bg-[#eee]'}  `}></div>))}
  </div>
  </>
  )
}
