import React from 'react'
import { featured } from '../constants'
import PodcastCard from './PodcastCard'

const Podcast = () => {
  return (
    <div>
      <div className='bg-gray-300'>
        <div className='text-center my-10 py-10'>
        <h3 className='text-orange-600 font-semibold'>Direct from the Blog Posts</h3>
        <h2 className='text-[2.5rem] font-bold px-6'>Checkout our latest news and articles</h2>
      </div>
      </div>
    <div className='my-20 wraper max-h-[600px] border-x-gray-100 border-y-gray-100  overflow-x-auto flex gap-8'>
        {featured.map((featured)=>(
            <PodcastCard key={featured.id} {...featured}/>
        ))}

      </div>
    </div>
  )
}

export default Podcast