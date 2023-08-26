import React from 'react'
import { explore } from '../constants'

const Explore = () => {
  return (
    <div className='flex justify-center items-center sm:flex-row flex-col gap-8'>
      <div className='flex flex-col justify-start sm:px-10 my-6'>
        <h3 className='text-orange-600 font-semibold text-[1rem] '>Enjoy New Shows</h3>
        <p className='font-semibold sm:text-[2.5rem] text-[1.5rem] py-4'>Check out the latest podcast playlist</p>
        <p className='max-w-[450px] text-gray-500 py-5 sm:text-[1rem] text-[0.9rem]'>
          Nam ultrices odio a felis lobortis convallis. In ex nunc, ornare non condimentum et, egestas vel massa. Nullam hendrerit felis quis pellentesque porttitor.
        </p>
        <p className='max-w-[450px] text-gray-400 py-5 sm:text-[1rem] text-[0.9rem]'>
          Aenean lobortis bibendum turpis et auctor. Nam iaculis, lectus vulputate cursus interdum, lacus odio commodo ipsum, nec condimentum purus tellus eu metus. Vivamus volutpat vitae dolor non suscipit.
        </p>

        <button type='button' className='bg-orange-600 text-white sm:text-[1rem] text-[0.8rem] py-3 px-5 my-3 rounded-[50px] w-[200px] '>VIEW ALL EPISODES</button>
      </div>

      <div className='flex flex-col sm:px-5 explore'>
        <div className='item'>
          {explore.map((explore)=>(
            <div key={explore.id} className='my-10 border-b border-gray-400 pb-4'>
              <div>
              <img src={explore.img} className='cursor-pointer'/>
              </div>
             <div className='my-4 text-gray-400 text-[1rem]'>
              {explore.title}
             </div>
              <div className='text-[1.3rem] font-medium'>
                {explore.text}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore