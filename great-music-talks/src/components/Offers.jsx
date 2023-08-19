import React from 'react'
import { woman, play} from '../assets'

const Offers = () => {
  return (
    <div className='flex items-center justify-center sm:flex-row flex-col  sm:my-28 my-6 gap-5 py-10'>
      <div className='relative w-[100%] m-auto'>
        <img id='woman' src={woman} alt='smiling woman' className='sm:w-[500px] sm:h-[500px] w-[300px] h-[400px]'/>
        <button className='sm:hidden block text-center justify-center items-center bg-white p-10 rounded-full absolute top-[70%] left-[55%]'>
          <img src={play}></img>
        </button>
      </div>

      <div className='max-w-[500px] sm:mx-10'>
      <h3 className='text-orange-600 text-[1rem]  '>
              special offer to voice over
          </h3>
          <h2 className='font-semibold sm:text-[2.5rem] text-[2rem] py-5'>
              Best podcast for <br className='sm:hidden block'/>your curious mind
          </h2>
          <p className='font-semibold sm:text-[1.5rem] text-[1rem] text-gray-600'>
            our pick of the best podcast on Spotify, Apple podcast & more covering technology, culture, science , politics & new ideas.
          </p>
          <p className='py-6 sm:text[1rem] text-[0.8rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet vitae dolorum nesciunt autem iusto ratione nam rerum impedit ut commodi similique, obcaecati ipsa soluta? Consequuntur eaque praesentium rem ipsam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <button type='button' className='bg-orange-600 mt-5 py-3 px-4 text-white sm:text-[0.8rem] text-[0.6rem] rounded-[30px]'>DISCOVER MORE</button>
      </div>
    </div>
  )
}

export default Offers