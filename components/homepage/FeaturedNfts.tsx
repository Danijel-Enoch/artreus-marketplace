import React from 'react'

export default function FeaturedNfts() {
  
  let nfts=Array.from(Array(4).keys()) as any
  nfts.map(()=>(
    {
      name:"Bored Ape Mutant Nfts",
  
      description:`Advised by the former Head of Twitter Gaming and Sport, we are 
      launching the worlds first ever NFTs as Esports Teams, allowing 
      holders to start and grow their own Esports teams, earn $USDC 
      from them and then auction them for a multiplier of the earning 
      potential just like a business.`,
      linkToCollection:""
    }
  ))
  const [name,setName]=React.useState(nfts[0].name)
  const [description,setDescription]=React.useState(nfts[0].description)
  const [linkToCollection,setLinkToCollection]=React.useState(nfts[0].linkToCollection)
  const [current,setCurrent]=React.useState(0)
  
  React.useEffect(()=>{

    setInterval(()=>{
        setCurrent(current + 1)
      
        // setName(nfts[current].name)
        // setDescription(nfts[current].description)
        // setLinkToCollection(nfts[current].linkToCollection)
    },2000)

  },[])
  return (
    <div className='py-6 px-10 flex space-x-6 lg:h-[400px] mb-5'>
      <div className=''>
          <h1 className="text-4xl font-extrabold text-brandbrown mb-5 w-1/2">Bored Ape Mutant Nfts</h1>
          <p className='w-[50ch]'>Advised by the former Head of Twitter Gaming and Sport, we are 
      launching the worlds first ever NFTs as Esports Teams, allowing 
      holders to start and grow their own Esports teams, earn $USDC 
      from them and then auction them for a multiplier of the earning 
      potential just like a business.</p>
      <button className=' font-semibold bg-brandyellow text-black py-2 px-6 rounded mt-10'>Explore Collection</button>
        </div>
        <div className='pl-20 w-full h-full'>
          <img src="/space_ape.png" className='w-full h-full'/>
        </div>
  </div>  
  )
}
