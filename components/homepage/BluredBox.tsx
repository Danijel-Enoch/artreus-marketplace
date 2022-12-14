import React from 'react'

export const LeftArrowButton = (props: React.HTMLProps<HTMLButtonElement>) => {
  return (<button {...props as any} >
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1_2)">
        <circle cx="22.9993" cy="23" r="17" transform="rotate(178.32 22.9993 23)" fill="#5D50C6" />
        <circle cx="22.9993" cy="23" r="16.85" transform="rotate(178.32 22.9993 23)" stroke="#F3BA2F" strokeWidth="0.3" />
      </g>
      <path d="M28.2237 11.8885L28.2123 11.8883C27.9234 11.8841 27.6383 11.9299 27.3817 12.0196C27.1247 12.1094 26.9116 12.2377 26.7539 12.3852L26.7529 12.3861L16.0488 22.342C16.0484 22.3423 16.0481 22.3427 16.0477 22.343C15.8189 22.5592 15.7295 22.7928 15.7355 22.998C15.7415 23.2035 15.8448 23.4319 16.0867 23.6346L16.0907 23.6379L16.0906 23.6379L26.9888 32.9626L26.9953 32.9682L27.0016 32.974C27.1365 33.0977 27.3145 33.2071 27.5293 33.2885C27.7439 33.3699 27.9852 33.4193 28.2374 33.4309C28.4896 33.4424 28.7425 33.4155 28.9789 33.3528C29.2155 33.2902 29.4253 33.1945 29.597 33.0768L29.6054 33.0711L29.6139 33.0657C29.7867 32.9574 29.9182 32.8323 30.0087 32.7035C30.0986 32.5756 30.1462 32.4472 30.1602 32.3259C30.1742 32.2055 30.1562 32.0827 30.1027 31.961C30.0485 31.8379 29.9561 31.7124 29.8195 31.5965L29.8177 31.595L29.8177 31.595L20.0701 23.2492L19.6439 22.8843L20.0553 22.5028L29.6487 13.6064C29.6489 13.6063 29.649 13.6061 29.6492 13.6059C29.781 13.4832 29.8684 13.353 29.9177 13.227L30.3834 13.4092L29.9177 13.227C29.9665 13.1022 29.9794 12.9786 29.9608 12.8595C29.9421 12.7396 29.8899 12.6146 29.796 12.4922C29.7015 12.369 29.5664 12.2511 29.3908 12.1516L28.2237 11.8885ZM28.2237 11.8885L28.235 11.8881M28.2237 11.8885L28.235 11.8881M28.235 11.8881C28.6674 11.8748 29.0765 11.9737 29.3907 12.1515L28.235 11.8881Z" fill="#F4F3FF" stroke="black" />
      <defs>
        <filter id="filter0_d_1_2" x="0" y="-0.000183105" width="48" height="48.0003" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_2" />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.229167 0 0 0 0 0.0916667 0 0 0 0 0 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" />
        </filter>
      </defs>
    </svg>

  </button>)
}
export const RightArrowButon = (props: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button {...props as any}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        viewBox="0 0 48 48"
        className='z-10  '
      >
        <g filter="url(#filter0_d_1_2)">
          <circle cx="23" cy="23" r="17" fill="#5D50C6"></circle>
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
export function LeftBluredBox({ className }: { className: string }) {


  return (

    <svg className={` ${className}`} viewBox="0 0 150 353" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1035_4824)">
        <rect x="149.248" y="352" width="149" height="352" rx="5" transform="rotate(179.96 149.248 352)" fill="url(#paint0_linear_1035_4824)" shapeRendering="crispEdges" />
      </g>
      <defs>
        <filter id="filter0_d_1035_4824" x="0.00390625" y="0.00360107" width="149.24" height="352.098" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1035_4824" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1035_4824" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_1035_4824" x1="242.248" y1="529.337" x2="164.251" y2="528.215" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f5f5f5" />
          <stop offset="1" stopColor="#f5f5f5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>




  )
}
export function RightBluredBox({ className }: { className: string }) {


  return (



    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 149 395"
      className={` ${className}`}
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
          <stop stopColor="#f5f5f5"></stop>
          <stop offset="1" stopColor="#f5f5f5" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>



  )
}
