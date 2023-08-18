import React from 'react'
import { microphone } from '../assets'
import styles from '../style'
const Support = () => {
  return (
    <div className={`${styles.padding} w-full flex flex-wrap gap-3 flex-1  justify-center items-center  support`}>
      <div className={`flex flex-col gap-5`}>
      <img src={microphone} alt='microphone' className='w-[150px] h-[150px] sm:hidden block'/>
        <p className='text-orange-600 font-semibold text-[1rem]'>Enjoy Our New Shows</p>
        <p className='sm:text-[2.5rem] text-[1.5rem] text-white'>Support and listen to our latest apple podcast</p>
        <button type='button' className='bg-orange-600 text-white text-[0.8rem] outline-none px-4 py-4 rounded-[50px] hover:text-orange-600 hover:bg-dimWhite w-[200px]'>START DONATING</button>
      </div>
 
    </div>
  )
}

export default Support