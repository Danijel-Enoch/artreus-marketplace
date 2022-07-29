import React,{Children, ReactNode, useRef, useState} from 'react'
import { LeftBluredBox, RightBluredBox } from './BluredBox';
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
  const step=120;
  const [left,setLeft]=useState(step)
  const [showLeftArrow,setShowLeftArrow]=useState(false);
  const [showRightArrow,setShowRightArrow]=useState(true);
  
  const scrollLeft=()=>{
        const containerElement =containerRef?.current as unknown as HTMLDivElement
        const containerWidth=containerElement.clientWidth;
        const itemsPerScroll=totalItemsLength/5;
      
        const horizontalWidth=Math.floor((itemsPerScroll -1) * containerWidth)  + 120;
        
        if(horizontalWidth - (-left) <= 0) {
         setShowRightArrow(false);
         return;
        }
        setShowLeftArrow(true);
        setLeft(left -step)
     
        
    
   
  }
  const scrollRight=()=>{
    if(left >= step){
      setShowLeftArrow(false)
      return
    }
    setShowRightArrow(true)
    setLeft(left + step)
   
  }
  
  // },[])
  return (
    <>
    
   
    <div ref={containerRef} className='flex space-x-4 relative items-center overflow-hidden '>
        <LeftBluredBox showArrow={showLeftArrow} onClick={()=>{scrollRight()}}/>
      
        <div  className='flex items-center space-x-2 relative transition-all ease-out duration-500 my-8' style={{left:left}}>
        {children}
        </div>
        <RightBluredBox showArrow={showRightArrow} onClick={()=>{scrollLeft()}}/>
      
    </div>
    </>
  )
}
