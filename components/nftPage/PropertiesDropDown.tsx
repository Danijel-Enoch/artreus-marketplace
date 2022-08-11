import React from 'react'
import DropDown from './DropDown'
export type Feature={
    featureType:string,
    value:string
}
type props={
    features :Feature[]
}
export default function PropertiesDropDown({features}:props) {
  return (
    <DropDown label="Properties">
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
           {features.map(({featureType,value},index)=>(
               <li key={index} className="bg-[#C1C1BF]  inline-flex flex-col px-2   md:p-1 md:pr-8 rounded-md text-brandbrown font-semibold " >{featureType.toUpperCase()} <span className='block font-bold  mt-3 capitalize'>{value}</span></li>
           ))}
        </ul>
    </DropDown>
  )
}
