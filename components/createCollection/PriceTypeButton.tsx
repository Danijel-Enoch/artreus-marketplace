import React from 'react'
import Logo from '../Logo'
type props={
  title:string,
  active:boolean,
  logo?:'price'|'time'
}
export default function PriceTypeButton(props:React.HTMLProps<HTMLButtonElement>&props) {
  const inActiveColor= '#77685F'
  
  return (
    <button  {...props as any} style={{border:`1px solid ${props.active?'black':inActiveColor}`}} className={`flex px-1  md:px-6 py-2 items-center rounded-md whitespace-nowrap ${props.active?'text-black':'text-[#77685F]'}`}>
     {props.logo === 'price' || props.logo ==undefined&&(<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.938 0H8.93801C8.52601 0 7.94901 0.239 7.65801 0.53L0.219015 7.969C0.0787469 8.10992 0 8.30067 0 8.4995C0 8.69833 0.0787469 8.88907 0.219015 9.03L6.65801 15.469C6.79894 15.6093 6.98968 15.688 7.18851 15.688C7.38735 15.688 7.57809 15.6093 7.71901 15.469L15.158 8.03C15.45 7.738 15.688 7.162 15.688 6.75V0.75C15.6875 0.55125 15.6083 0.360791 15.4678 0.220253C15.3272 0.079715 15.1368 0.000527891 14.938 0V0ZM11.188 6C10.991 5.99993 10.7959 5.96106 10.6138 5.88559C10.4318 5.81012 10.2664 5.69954 10.1271 5.56016C9.98786 5.42078 9.87739 5.25533 9.80204 5.07325C9.7267 4.89118 9.68795 4.69605 9.68801 4.499C9.68808 4.30195 9.72696 4.10685 9.80243 3.92482C9.87789 3.7428 9.98847 3.57742 10.1279 3.43813C10.2672 3.29884 10.4327 3.18837 10.6148 3.11303C10.7968 3.03768 10.992 2.99893 11.189 2.999C11.587 2.99913 11.9686 3.15735 12.2499 3.43884C12.5312 3.72033 12.6891 4.10204 12.689 4.5C12.6889 4.89796 12.5307 5.27956 12.2492 5.56087C11.9677 5.84217 11.586 6.00013 11.188 6V6Z" fill={props.active?'black':inActiveColor}/>
</svg>)}
{props.logo === 'time'&&(<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM13.293 14.707L9 10.414V4H11V9.586L14.707 13.293L13.293 14.707V14.707Z" fill={props.active?'black':inActiveColor}/>
</svg>
)}
<p className='ml-1 md:ml-3'>{props.title}</p>


    </button>
  )
}
