import React from 'react'
import Navbar from './components/Navbar';
import styles from './style';
import Hero from './components/Hero';
import Offers from './components/Offers';


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth} z-[1000]`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`${styles.flexCenter} ${styles.marginY}`}>
        <div className='w-full z-[1]'>
         <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Offers />
        </div>
      </div>
    </div>
  )
}

export default App