import React from 'react'
import styles from '../style'
import { footerLinks } from '../constants'
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col sm:mx-48 mx-8 text-white`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start '>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Our pick of the best podcasts on Spotify, Apple Podcasts and more covering all trends.</p>
        </div>

        <div className='flex flex-[1.5] w-full justify-between flex-wrap md:mt-0 mt-10 '>
          {footerLinks.map((footerLinks)=>(
            <div key={footerLinks} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white flex text-center items-center gap-4'>
                {footerLinks.title}
                <img className='w-[30px]' src={footerLinks.img}/>
              </h4>
              <ul className='mt-4'>
                {footerLinks.links.map((link)=>(
                  <li key={link} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-orange-600 cursor-pointer mt-3 `}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='text-dimWhite border-t-[1px] border-t-[#3F3E45] w-full text-center py-3'>
        <div>
          2023 vader, All rights reserved
        </div>
      </div>
    </section>
  )
}

export default Footer