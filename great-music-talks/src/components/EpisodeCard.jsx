import React from 'react'
const EpisodeCard = ({title, head, icon, img, content }) => {
  return (
    <div className='container md:h-[600px] h-[550px] w-[300px]  ep-box'>
        <img src={img} alt='podcast' className='md:w-[500px] md:h-[320px] w-[300px] h-[50%] ' />
        <div className='flex gap-3 pt-10 pb-10 text-center sm:px5 px-5'>
            <img src={icon} alt='microphone' className='w-[30px]'/>
            <p className='font-semibold text-orange-600'>
                {title}
            </p>
        </div>
        <h2 className={`font-bold sm:text-[1.2rem] text-[1rem] sm:px-5 px-5`}>
            {head}
        </h2>
        <p className='pt-5 sm:px-5 px-5 text-[0.8rem]'>
            {content}
        </p>
    </div>
  )
}

export default EpisodeCard