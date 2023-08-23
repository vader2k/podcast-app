import React, { useState } from 'react'
import styles from '../style';
import { episode } from '../constants';
import EpisodeCard from './EpisodeCard';


const Episodes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div >
        <div className='flex flex-col justify-center'>
          <h3 className='py-5 text-orange-600'>Enjoy New shows</h3>
          <h2 className={`sm:text-[2.5rem] text-[30px] mb-10 ${styles.heading2}`}>
            Latest Episodes
          </h2>
        </div>

        <div className={`my-10 wraper max-h-[600px] border-x-gray-100 border-y-gray-100  overflow-x-auto flex gap-8 mx-5' `}>
          {episode.map((episode)=>(
            <EpisodeCard key={episode.id} {...episode}/>
          ))}
        </div>
        
    </div>
  )
}

export default Episodes


