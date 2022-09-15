import React from 'react'

export default function EthLogo() {
  return (
      <div>
           <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="91"
      height="91"
      fill="none"
      viewBox="0 0 91 91"
     
    >
      <circle cx="45.5" cy="45.5" r="45.5" fill="url(#pattern0)"></circle>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00278)" xlinkHref="#image0_904_3773"></use>
        </pattern>
        <image
          id="image0_904_3773"
          width="360"
          height="360"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>

      </div>
   
  )
}