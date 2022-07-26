import React,{Children, ReactNode, useRef, useState} from 'react'
import BluredBox from './BluredBox';
type ScrollOptions ={
  left?: number;
  top?: number;
  behavior?:string
}
type Scroll={
  scroll:(scrollOptions:ScrollOptions)=>void
}
type props={
  children:(props:Scroll)=>ReactNode
}


export default function CollectionBody({children,totalItemsLength}:{children:ReactNode,totalItemsLength:number}) {
  const containerRef=useRef(null);
  const [left,setLeft]=useState(0)
  const [showLeftArrow,setShowLeftArrow]=useState(true);
  const step=100;
  const scrollLeft=()=>{
        const containerElement =containerRef?.current as unknown as HTMLDivElement
        const containerWidth=containerElement.clientWidth;
        const itemsPerScroll=totalItemsLength/5;
      
        const horizontalWidth=Math.floor((itemsPerScroll -1) * containerWidth)  + 120;
        
        if(horizontalWidth - (-left) <= 0) {
         setShowLeftArrow(false);
         return;
        }
        setLeft(left -step)
     
        
    
   
  }
  
  // },[])
  return (
    <>
    
    
    <div ref={containerRef} className='flex space-x-4 relative items-center overflow-hidden '>
        <div  className='flex items-center space-x-2 relative transition-all ease-out duration-500' style={{left:left}}>
        {children}
        </div>
        <BluredBox showArrow={showLeftArrow} onClick={()=>{scrollLeft()}}/>
      
    </div>
    </>
  )
}
