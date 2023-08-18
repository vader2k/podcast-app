import React from 'react'
import { angel } from '../assets'
const Host = () => {
  return (
    <div className='flex flex-col justify-center items-center sm:my-6 my-16 mx-0'>
      <h1 className='text-[3rem] font-semibold mb-7'>Meet Our Host</h1>
      <div className='flex  flex-col  justify-center items-center'>
          <img src={angel} alt='angel' className='w-[200px] h-[200px] rounded-full'/>
          <p className='my-6 text-[1.3rem] text-orange-600'>Alphonsus Angel</p>
          <p className='sm:text-[1.3rem] max-w-[650px] ss:leading-[3rem] py-3 text-gray-500'>
          Music enthusiast, writer and public speaker, Angel ,also known as Strangel on the show, is a student of the university of Lagos who amongst many things, is commited to having a very healthy music appetite and has decided to preach this culture to as many poeple as possible in her lifetime.
          </p>
          <p className='py-3 text-orange-600'>
            <a href="">
              alphonsusangelkachi@gmail.com
            </a>
          </p>
      </div>
    </div>
  )
}

export default Host