import React from 'react'

type prop = React.HTMLProps<HTMLButtonElement> & {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
export default function UploadButton({ handleChange, ...props }: prop) {
  return (
    <div className='md:order-2 mt-6 md:mt-5'>

      <p className='mb-2 font-bold text-bodycopy'>Upload file</p>
      <div className=' text-[#5e5c5c]  border-4 rounded-md border-[#2F2F2F80] border-dashed p-0  md:p-8 flex flex-col items-center justify-center h-[100px] sm:h-[200px]'>
        <p className='text-center'>Mp4, Png, gif, WEBP or MP3. Max 100Mb</p>
        <label {...props as any} tabIndex={0} role="button" htmlFor='nft-upload' className='bg-brandyellow rounded-md text-brandpurple font-bold capitalize mt-4 md:mt-6 py-2 px-4'>choose file</label>
        <input className='hidden' id="nft-upload" type="file" onChange={handleChange} />
      </div>

    </div>
  )

}
