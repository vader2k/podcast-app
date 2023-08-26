import React from 'react'
import { mail } from '../assets'


const Newsletter = () => {
  return (
    <div className='bg-orange-600 flex flex-col sm:gap-5 letter'>
      <div className='flex sm:flex-row flex-col  items-center text-white gap-5'>
        <img src={mail}/>
        <div>
          <p className='text-white'>Get early access to the new episodes.</p>
          <p className='sm:text-[2rem] text-[1.5rem] py-3'>Subscribe to the newsletter!</p>
        </div>
      </div>

      <div>
        <form className='relative py-5'>
          <input type='email' placeholder='Email address' className='p-3 rounded-[50px] outline-none  h-[80px] sm:w-[500px] md:w-[500px] w-[350px] '>
          </input>
          <button type='button' className='rounded-full w-[80px] py-3 px-5 text-white bg-orange-600 font-semibold absolute top-9 sm:left-[75%] left-[70%]'>GO</button>
        </form> 
      </div>
    </div>
  )
}

export default Newsletter