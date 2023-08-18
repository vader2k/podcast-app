import React from 'react'
import { chat, admin } from '../assets'
const PodcastCard = ({img, head, text}) => {
  return (
    <div className='item sm:min-w-[400px] min-w-[300px]'>
        <img src={img} className='h-[180px] w-[900px]' />
        <div className='sm:px-10 px-5 flex gap-10 my-5'>
            <div className='flex items-center justify-center sm:gap-3 gap-1'>
                <div><img src={admin} className='h-[20px] rounded-full'/></div> <div>admin</div>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <div><img src={chat} className='h-[20px]'/></div> <div>comment</div>
            </div>
        </div>
        <p className='sm:text-[1.5rem] text-[1.2rem] font-semibold p-5'>{head}</p>
        <p className='p-5 text-[0.8rem]'>{text}</p>
    </div>
    
  )
}

export default PodcastCard