const NftCollectionCard = ({ name, imageUri, tokenId }: { name: string, imageUri: string, tokenId: string }) => {
  return (
    <div className='inline-block w-[250px]cursor-pointer -z-10 rounded-[5px]'>
      <div className="w-full">
        <img src={imageUri} className='w-[230px] h-[230px] object-cover rounded-t-[5px]' />
      </div>
      <div className='bg-brandpurple p-2 text-white flex flex-col justify-center items-center space-y-2 rounded-b-md'>
        <p className=' font-semibold text-base'>{name} #{tokenId}</p>
        <p className='text-brandyellow  font-semibold text-sm'>{name}</p>
      </div>
    </div>
  )
}
export default NftCollectionCard;