import React from 'react'
import { chat, admin } from '../assets'
const PodcastCard = ({img, head, text}) => {
  return (
    <div className='sm:min-w-[400px] min-w-[300px] sm:h-[500px] border border-gray-300 shadow-md ring-1 ring-gray-300 bg-white overflow-y-hidden'>
        <img src={img} className='h-[50%] w-[900px]' />
        <div className='sm:px-10 px-5 flex gap-10 my-5'>
            <div className='flex items-center justify-center sm:gap-3 gap-1'>
                <div><img src={admin} className='h-[20px] rounded-full'/></div> <div className='text-[0.8rem]'>admin</div>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <div><img src={chat} className='h-[20px]'/></div> <div  className='text-[0.8rem]'>comment</div>
            </div>
        </div>
        <p className='sm:text-[1.5rem] text-[1rem] font-semibold p-5'>{head}</p>
        <p className='p-5 text-[0.8rem]'>{text}</p>
    </div>
    
  )
}

export default PodcastCard