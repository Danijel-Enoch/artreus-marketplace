import React from 'react'

export default function SimpleInfo({name,creator,details,id}:{name:string,creator:string,details:string,id:string}) {
  return (
      <>
    <h2 className='font-extrabold text-2xl text-brandbrown'>{name} #{id}</h2>
      <h3 className='text-brandyellow font-bold capitalize mt-1 flex '>{creator} <button className='flex ml-6'><svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
</svg><span className='block ml-2'>Share</span> </button>
</h3>
      <p className='text-brandbrown mt-1 max-w-[60ch]'>{details}</p>
      </>
  )
}
