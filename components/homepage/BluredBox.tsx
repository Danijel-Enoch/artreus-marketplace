import React from 'react'

const LeftArrowButton=(props:React.HTMLProps<HTMLButtonElement>)=>{
    return(
        <button {...props as any}>
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="none"
    viewBox="0 0 48 48"
    className='z-10 translate-x-32 '
  >
    <g filter="url(#filter0_d_1_2)">
      <circle cx="23" cy="23" r="17" fill="#422E21"></circle>
      <circle
        cx="23"
        cy="23"
        r="16.85"
        stroke="#F3BA2F"
        strokeWidth="0.3"
      ></circle>
    </g>
    <path
      fill="#F4F3FF"
      stroke="#000"
      d="M17.452 33.954h.01c.29.013.576-.025.835-.107.26-.082.476-.204.638-.347h.001l10.992-9.639s0 0 0 0c.236-.21.332-.44.332-.646 0-.206-.097-.437-.332-.647l-.004-.003h0l-10.62-9.64-.007-.006-.006-.006a1.639 1.639 0 00-.518-.33 2.304 2.304 0 00-.704-.163 2.47 2.47 0 00-.743.056c-.239.056-.451.145-.626.258l-.009.005-.008.006a1.36 1.36 0 00-.406.35.823.823 0 00-.162.373.696.696 0 00.047.367c.05.124.139.252.272.372l.002.002h0l9.499 8.628.415.377-.423.37-9.85 8.61s0 0 0 0a1.048 1.048 0 00-.28.372.7.7 0 00-.053.366.81.81 0 00.154.372c.09.126.222.248.395.352l1.159.298zm0 0h-.012m.012 0h-.012m0 0c-.432 0-.838-.11-1.147-.298l1.147.298z"
    ></path>
    <defs>
      <filter
        id="filter0_d_1_2"
        width="48"
        height="48"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feMorphology
          in="SourceAlpha"
          radius="2"
          result="effect1_dropShadow_1_2"
        ></feMorphology>
        <feOffset dx="1" dy="1"></feOffset>
        <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0.229167 0 0 0 0 0.0916667 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_2"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_2"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
        </button>
    )
}

export default function BluredBox(props:React.HTMLProps<HTMLButtonElement> &{showArrow?:boolean}) {
  const newProps={...props}
  delete newProps.showArrow;
  return (
    <div className=' right-0   flex items-center sticky'>
      {props.showArrow&&<LeftArrowButton {...props}/>}
  
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="149"
    height="395"
    fill="none"
    viewBox="0 0 149 395"
  >
    <g filter="url(#filter0_d_670_2653)">
      <rect
        width="149"
        height="395"
        fill="url(#paint0_linear_670_2653)"
        rx="5"
        shapeRendering="crispEdges"
      ></rect>
    </g>
    <defs>
      <filter
        id="filter0_d_670_2653"
        width="149"
        height="395"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset></feOffset>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_670_2653"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_670_2653"
          result="shape"
        ></feBlend>
      </filter>
      <linearGradient
        id="paint0_linear_670_2653"
        x1="93"
        x2="15"
        y1="199"
        y2="198"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDBDBD"></stop>
        <stop offset="1" stopColor="#BDBDBD" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
    
    </div>

  )
}
