import React from 'react'

export default function ImagePreview(props: any) {
  const { imageUrl } = props
  const { classes } = props
  return (
    <div className={`w-[100%] h-[100%] md:mt-4 ${classes}`}>
      <p className='mb-2 font-bold text-bodycopy'>Image Pre-view</p>
      <div className='flex justify-center items-center'>
        <div className='w-[100%] h-[550px] bg-[#ccc] rounded-lg flex justify-center items-center bg-cover' style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundColor: "#2F2F2F1A" }}>
          <p className='text-[#918f8f] text-center px-2'>{imageUrl ? "" : "Preview Image before minting Nft"}</p>
        </div>
      </div>

    </div>
  )
}
