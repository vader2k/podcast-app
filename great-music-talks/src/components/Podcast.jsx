import React from 'react'
import { featured } from '../constants'
import PodcastCard from './PodcastCard'
import { lines } from '../assets'

const Podcast = () => {
  return (
    <div>
      <div className='poddy h-full bg-cover bg-repeat bg-center backdrop-blur'>
        <div className='text-center mt-10 py-10'>
        <h3 className='text-orange-600 font-semibold'>Direct from the Blog Posts</h3>
        <h2 className='sm:text-[2.5rem] text-[2rem] font-bold px-6 py-3'>Checkout our latest news and articles</h2>
      </div>
      </div>
    <div className='mb-20 wraper max-h-[600px] border-x-gray-100 border-y-gray-100  overflow-x-auto flex gap-8 mx-5 '>
        {featured.map((featured)=>(
            <PodcastCard key={featured.id} {...featured}/>
        ))}

      </div>
    </div>
  )
}

export default Podcast