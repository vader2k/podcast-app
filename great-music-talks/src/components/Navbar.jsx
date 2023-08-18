import {useState} from 'react'

import { navLinks } from '../constants';
import { microphone, close, menu } from '../assets'


const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className='w-full flex py-3 items-center navbar '>
      <div className='flex justify-start items-center gap-2'>
        <img src={microphone} alt='microphone' className='w-[80px] h-[80px]'/>
        <p className='font-poppins'>Great Music Great Talks</p>
      </div>

      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={()=> settoggle((prev)=>(!prev))}/>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10 text-white`}>
        <ul className='list-none'>
              {navLinks.map((nav, index) =>(
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ?'mb-0':'mb-4'}`}>
                  <a href={`#${nav.id} hover:underline`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar