import React, { useState } from 'react'
import styles from '../style';
import { episode} from '../constants';
import { headphone, ep1, ep2, ep3 } from '../assets';
import EpisodeCard from './EpisodeCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Episodes = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
 

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

      <Carousel responsive={responsive} showDots={true} infinite={true} customTransition="all .5" transitionDuration={500} className='caro ep-box'>
          <div className='w-[340px] h-[550px]'>
            <img className='w-[340px] h-[50%]' src={ep1}/>
            <div className='flex gap-3 pt-10 pb-10 text-center sm:px5 px-5 items-center'>
              <img src={headphone} alt='microphone' className='w-[30px] rounded-[20px]'/>
              <p className='font-semibold text-orange-600'>
                what's New
            </p>
            <p className='font-extralight text-gray-400 text-[0.8rem]'>
                Episode 1
            </p>
            </div>
            <h2 className={`font-bold sm:text-[1.2rem] text-[1rem] sm:px-5 px-5`}>
              The Zazu Episode
            </h2>
            <p className='pt-5 sm:px-5 px-5 text-[0.8rem]'>
              Did you know that Africa is the most expensive continent in the world to send and receive money?
            </p>
            <p className='pt-5  sm:px-5 px-5 text-[0.8rem] text-orange-600'>
              VIEW EPISODE
            </p>
          </div>

          <div className='w-[340px] h-[550px]'>
            <img className='w-[340px] h-[50%]' src={ep2}/>
            <div className='flex gap-3 pt-10 pb-10 text-center sm:px5 px-5 items-center'>
              <img src={headphone} alt='microphone' className='w-[30px] rounded-[20px]'/>
              <p className='font-semibold text-orange-600'>
                Fashion life
            </p>
            <p className='font-extralight text-gray-400 text-[0.8rem]'>
                Episode 2
            </p>
            </div>
            <h2 className={`font-bold sm:text-[1.2rem] text-[1rem] sm:px-5 px-5`}>
              Depressed?
            </h2>
            <p className='pt-5 sm:px-5 px-5 text-[0.8rem]'>
              Even the Good things can be depressin too. Be obsrvant, do not sweep You under the carpet. Love and light.
            </p>
            <p className='pt-5  sm:px-5 px-5 text-[0.8rem] text-orange-600'>
              VIEW EPISODE
            </p>

          </div>

          <div className='w-[340px] 4-[550px]'>
            <img className='w-[340px] h-[275px]' src={ep3}/>
            <div className='flex gap-3 pt-10 pb-10 text-center sm:px5 px-5 items-center'>
              <img src={headphone} alt='microphone' className='w-[30px] rounded-[20px]'/>
              <p className='font-semibold text-orange-600'>
                Real Music
            </p>
            <p className='font-extralight text-gray-400 text-[0.8rem]'>
                Episode 3
            </p>
            </div>
            <h2 className={`font-bold sm:text-[1.2rem] text-[1rem] sm:px-5 px-5`}>
              How to stay relevant
            </h2>
            <p className='pt-5 sm:px-5 px-5 text-[0.8rem]'>
              Just like fashion, entreprenureship and technology, the quality of music that appeals to the general public of this age.
            </p>
            <p className='pt-5  sm:px-5 px-5 text-[0.8rem] text-orange-600'>
              VIEW EPISODE
            </p>
          </div>
      </Carousel>
        
    </div>
  )
}

export default Episodes


