const ProfileCollectionCard = ({ name, imageUri, description }) => {
  return (
    <div className='md:w-[200px] p-2 overflow-hidden'>
      <img src={imageUri} className='w-full rounded-t-md h-[120px]' />
      <div className='bg-brandpurple p-2 rounded-b-md text-white flex flex-col justify-center items-center space-y-2'>
        <p className='text-brandyellow  text-semibold'>{name}</p>
        <p className="text-white text-center">{description}</p>

      </div>

    </div>)
}
export default ProfileCollectionCard;