import React from 'react'

import { soundcloud, spotify, apple } from '../assets'
import styles from '../style'

const Hero = () => {
  return (
    <div className={`w-full  justify-center items-center flex flex-col hero  ${styles.padding}`}>
      <div className={`font-bold text-center text-[40px] sm:text-[60px] text-white sm:tracking-wider tracking-normal sm:whitespace-pre-line whitespace-normal `}>
        <span className='sm:font-bold font-light'>Listen </span><br className='sm:hidden flex'/>To us Daily
      </div>

      <div className='flex w-full sm:gap-7 gap-4 items-center justify-center pt-7 mt-5'>
          <button type='button' className='bg-orange-600 rounded-[50px] text-white hover:text-orange-600 hover:bg-dimWhite'>
            <div className='flex items-center justify-center gap-2 py-2 px-5  text-[0.8rem] font-semibold'>
              <img src={soundcloud} alt='soundcloud' className='w-[25px] h-[30px] object-contain '/>
              soundcloud
            </div>
          </button>

          <button type='button' className='bg-orange-600 rounded-[50px]  text-white hover:text-orange-600 hover:bg-dimWhite'>
            <div className='flex items-center justify-center gap-2 py-2 px-5 text-[0.8rem] font-semibold'>
              <img src={spotify} alt='soundcloud' className='w-[25px] h-[30px] object-contain'/>
              spotify
            </div>
          </button>

          <button type='button' className='bg-orange-600 rounded-[50px]  text-white hover:text-orange-600 hover:bg-dimWhite'>
            <div className='flex items-center justify-center gap-2 py-2 px-5 text-[0.8rem] font-semibold'>
              <img src={apple} alt='soundcloud' className='w-[25px] h-[30px] object-contain'/>
              apple
            </div>
          </button>
          
      </div>
    </div>
  )
}

export default Hero