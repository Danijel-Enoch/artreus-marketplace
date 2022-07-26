import React from 'react'

type props={
    navItems:string[],
    navHeader:string
}
export default function FooterNav({navItems,navHeader}:props) {
  return (
    <section>
    <nav className='space-y-6'>
        <h2 className='text-lg font-semibold'>{navHeader}</h2>
        <ul className='space-y-6'>
            {navItems.map((item)=>(
                <li key={item}>{item}</li> 
            ))}
        </ul>
    </nav>
</section>
  )
}
