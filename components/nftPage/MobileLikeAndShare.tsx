import React from 'react'
import LikeButton from './LikeButton'
import ShareButton from './ShareButton'

export default function MobileLikeAndShare() {
  return (
    <div className='flex justify-between my-4'>
        <LikeButton/> <ShareButton/>
    </div>
  )
}
