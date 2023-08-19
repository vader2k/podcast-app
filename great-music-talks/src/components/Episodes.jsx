import React from 'react'
import styles from '../style';
import { episode } from '../constants';
import EpisodeCard from './EpisodeCard';


const Episodes = () => {
  return (
    <div >
        <div className='flex flex-col justify-center'>
          <h3 className='py-5 text-orange-600'>Enjoy New shows</h3>
          <h2 className={`sm:text-[1rem] text-[30px] ${styles.heading2}`}>
            Latest Episodes
          </h2>
        </div>

        <div className='flex justify-center items-center pt-4 pb-4 gap-10 sm:flex-row flex-col'>
          {episode.map((episode)=>(
            <EpisodeCard key={episode.id} {...episode}/>
          ))}
        </div>
        
    </div>
  )
}

export default Episodes


