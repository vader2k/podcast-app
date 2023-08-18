import React from 'react'
const EpisodeCard = ({title, head, icon, img, content }) => {
  return (
    <div className='container h-[600px] sm:p-5 '>
        <img src={img} alt='podcast' className='w-[400px] h-[320px] ' />
        <div className='flex gap-3 pt-10 pb-10 text-center'>
            <img src={icon} alt='microphone' className='w-[30px]'/>
            <p className='font-semibold text-orange-600'>
                {title}
            </p>
        </div>
        <h2 className={`font-bold text-[1.3rem] `}>
            {head}
        </h2>
        <p className='pt-5'>
            {content}
        </p>
    </div>
  )
}

export default EpisodeCard