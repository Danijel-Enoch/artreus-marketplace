import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import ShareButton from './ShareButton'

export default function SimpleInfo({name,creator,details,id}:{name:string,creator:string,details:string,id:string}) {
  const size=useWindowSize()
  return (
      <div className='space-y-2   mt-4 md:mt-0'>
    <h2 className='font-extrabold text-2xl text-brandbrown'>{name} #{id}</h2>
      <h3 className='text-brandyellow font-bold capitalize mt-1 flex '>{creator}  {size.width&&size.width >=765&&( <ShareButton/>)}   
</h3>
      <p className='text-brandbrown mt-1 max-w-[60ch]'>{details}</p>
      </div>
  )
}
