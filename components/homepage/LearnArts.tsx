import React from 'react'
import SectionTitle from '../SectionTitle'
import CollectionBody from './CollectionBody'
import CollectionHeader from './CollectionHeader'

export type artVideos = {
  name: string,
  description: string
  imageUrl: string
}


export default function LearnArts({ learnArts }: { learnArts: artVideos[] }) {
  const artsVideos = Array.from(Array(10).keys())
  return (
    <section>
      <CollectionHeader>
        <SectionTitle title="Learn Arts" />
      </CollectionHeader>
      <CollectionBody totalItemsLength={artsVideos.length}>
        {learnArts.map((videos, index) => (
          <div className='inline-block h-max bg-brandpurple w-[230px] rounded-[5px] ' key={index}>
            <img src={videos.imageUrl} className='rounded-t-[5px] w-[230px] h-[230px] object-cover' />
            <div className='flex flex-col justify-center items-center px-20 py-5'>
              <h5 className='font-medium text-base text-white'>{videos.name}</h5>
              <h5 className='font-medium text-base text-brandyellow'>{videos.description}</h5>
            </div>
          </div>
        ))}
      </CollectionBody>
    </section>
  )
}
