import React, { Children, ReactNode, useEffect, useRef, useState } from 'react'
import { LeftArrowButton, LeftBluredBox, RightArrowButon, RightBluredBox } from './BluredBox';
type props = {
  children: ReactNode,
  totalItemsLength: number,
  className?: string
}

export default function CollectionBody({ children, totalItemsLength, className }: props) {
  const scrollContainerRef = useRef(null);
  const step = 550;
  const [prevLeft, setPrevLeft] = useState(0);
  const [nextLeft, setNextLeft] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0)
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current as unknown as HTMLDivElement;
    setScrollWidth(scrollContainer.scrollWidth)

  }, [])
  const scrollLeft = () => {
    const scrollContainer = scrollContainerRef.current as unknown as HTMLDivElement;
    setPrevLeft(nextLeft)
    scrollContainer.scrollLeft = scrollContainer.scrollLeft + step;
    setNextLeft(scrollContainer.scrollLeft)
  }
  const scrollRight = () => {
    const scrollContainer = scrollContainerRef.current as unknown as HTMLDivElement;
    setPrevLeft(nextLeft)
    scrollContainer.scrollLeft = (scrollContainer.scrollLeft - step)
    setNextLeft(scrollContainer.scrollLeft)


  }

  // },[])
  return (
    <>
      <div className='flex relative items-center overflow-x-hidden '>
        <LeftBluredBox className='hidden md:block h-full -translate-x-10 md:translate-x-0  w-[150px] absolute' />
        <LeftArrowButton className={`hidden active:bg-transparent md:block z-10 border-0  ${prevLeft && nextLeft != 0 && prevLeft === nextLeft && "invisible"}`} onClick={() => { scrollLeft() }} />
        <div ref={scrollContainerRef} className='space-x-2 overflow-x-scroll md:overflow-x-hidden scroll-smooth  px-2 md:px-8 whitespace-nowrap'>
          {children}
        </div>
        <RightArrowButon onClick={() => { scrollRight() }} className={`hidden active:bg-transparent md:block z-10 border-0  ${nextLeft === 0 && "invisible"}`} />
        <RightBluredBox className='hidden md:block h-full translate-x-10 md:translate-x-0 w-[150px] absolute right-0' />
        {/* <RightBluredBox className=''/>
         {/* <div className='relative h-[200px]'>
        </div>  */}
      </div>
    </>
  )
}
