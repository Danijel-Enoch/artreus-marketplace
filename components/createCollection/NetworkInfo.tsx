import React from 'react'

export default function NetworkInfo({address,network}:{address:string,network:string}) {
  return (
<div className='ml-1 md:ml-4'>
    <div>{address}</div>
    <div>{network}</div>
   
 </div>
  )
}
