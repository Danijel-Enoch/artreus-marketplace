import React from 'react'

type props = {
    navItems: string[],
    navHeader: string
}
export default function FooterNav({ navItems, navHeader }: props) {
    return (
        <section>
            <nav className='space-y-6'>
                <h2 className='text-base leading-9 font-medium'>{navHeader}</h2>
                <ul className='space-y-6 text-base leading-10'>
                    {navItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}
