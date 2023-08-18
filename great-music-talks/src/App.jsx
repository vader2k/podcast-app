import React from 'react'
import { Episodes, Explore, Footer, Hero, Host, Navbar, Newsletter, Offers, Podcast, Support,} from './components';
import styles from './style'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} `}>
        <Navbar/>
      </div>
      </div>
  
      <div>
        <Hero/>
      </div>
    
      <div className={`${styles.padding} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Episodes/>
        </div>
      </div>

      <div className={`${styles.padding} ${styles.flexCenter}`}>
        <Offers/>
      </div>

      <div>
        <Podcast/>
        <Support/>
      </div>
      <div className={`${styles.padding} ${styles.flexCenter}`}>
        <Explore/>
      </div>
       
      <div className={`${styles.padding} ${styles.flexCenter} `}>
        <Host/>
      </div>

      <div className={`${styles.padding} ${styles.flexCenter} bg-orange-600 sm:w-[60%] m-auto`}>
        <Newsletter />
      </div>

      <div className='bg-black'>
        <Footer/>
      </div>
    </div>
  )
}

export default App