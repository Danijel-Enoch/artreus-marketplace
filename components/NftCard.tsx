import { useRouter } from "next/router";
const NftCard=({name,tokenId,price,blockChain,contractAddress,imgUrl}:{blockChain:string,contractAddress:string,imgUrl:string,name:string,tokenId:string,price:string})=>{
  const router=useRouter() 
  return(
      <div className=''>
          <div className="border border-brandbrown rounded-lg ">
        <div className=' bg-[#e4e2e2] p-20 md:p-24 rounded-t-md w-full h-full' style={{backgroundImage:`url(${imgUrl})`,backgroundSize:'cover'}}></div> </div>
        <div className='border border-brandbrown p-2 md:p-4 rounded-b-md'>
          <h3 className='text-brandbrown text-lg font-bold capitalize'>{name} #{tokenId}</h3>
          <h4 className='text-brandyellow font-bold ' >{name}</h4>
          <div className='flex justify-between items-center mt-4'>
            <div className='flex'>
            <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
        viewBox="0 0 25 25"
      >
        <path
          fill="#B17E00"
          d="M12.041 24.082C5.391 24.082 0 18.692 0 12.04 0 5.391 5.39 0 12.041 0c6.65 0 12.04 5.39 12.04 12.041 0 6.65-5.39 12.04-12.04 12.04zM9.118 10.84l2.923-2.923 2.924 2.924 1.701-1.7-4.625-4.626L7.417 9.14l1.701 1.7zM4.515 12.04l1.701 1.7 1.7-1.7-1.7-1.7-1.7 1.7zm4.603 1.201l-1.703 1.699.002.002 4.624 4.624 4.625-4.626-1.7-1.701-2.925 2.925-2.923-2.923zm7.047-1.201l1.7 1.7 1.702-1.7-1.701-1.7-1.701 1.7zm-2.4-.002h.002l-1.726-1.724-1.276 1.274-.146.147-.302.303-.003.002.003.002 1.723 1.724 1.727-1.725v-.001h-.001v-.002z"
        ></path>
      </svg>
              <span className='ml-1 md:ml-2'>{price}</span></div>
           <button onClick={()=>{router.push(`/nft/${blockChain}/${contractAddress}/${tokenId}`)}} className='border border-brandbrown py-1 px-4 md:px-6 rounded-md text-brandbrown font-semibold'>Details</button>
          </div>
        </div>
        
      </div>
    )
  }
  export default NftCard;