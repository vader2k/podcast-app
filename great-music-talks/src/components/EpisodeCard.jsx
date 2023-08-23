import React from 'react'
const EpisodeCard = ({title, head, icon, img, content, indicator , view }) => {
  return (
    <div className='sm:min-w-[400px] min-w-[350px] md:h-[600px] h-[550px] ep-box'>
        <img src={img} alt='podcast' className='md:w-[500px] md:h-[320px] w-[100%] h-[50%] ' />
        <div className='flex gap-3 pt-10 pb-10 text-center sm:px5 px-5 items-center'>
            <img src={icon} alt='microphone' className='w-[30px]'/>
            <p className='font-semibold text-orange-600'>
                {title}
            </p>
            <p className='font-extralight text-gray-400 text-[0.8rem]'>
                {indicator}
            </p>
        </div>
        <h2 className={`font-bold sm:text-[1.2rem] text-[1rem] sm:px-5 px-5`}>
            {head}
        </h2>
        <p className='pt-5 sm:px-5 px-5 text-[0.8rem]'>
            {content}
        </p>
        <p className='pt-5  sm:px-5 px-5 text-[0.8rem] text-orange-600'>
            {view}
        </p>
    </div>
  )
}

export default EpisodeCard