const NftCollectionCard=({name,imageUri,tokenId}:{name:string,imageUri:string,tokenId:string})=>{
    return(<div className='w-[250px] corsor-pointer -z-10'>
        <div className="w-full ">
          <img  src={imageUri} className='w-full h-[200px] object-cover'/>
        </div>
      
    <div className='bg-[#0C0602] p-2 text-white flex flex-col justify-center items-center space-y-2'>
        <p className=' font-semibold'>{name} #{tokenId}</p>
        
       <p className='text-brandyellow  text-semibold'>{name}</p> 
      
         </div> 
    
     </div>)
}
export default NftCollectionCard;