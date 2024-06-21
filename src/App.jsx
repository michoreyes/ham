import React from 'react'
import Navbar from './components/Navbar';
import styles from './style';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Portfolio from './components/Portfolio';
import PortfolioWeb from './components/PortfolioWeb';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import About from './components/About';
import Bundles from './components/Bundles';
import Team from './components/Team';

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

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gray-900`}>
        <div className={`${styles.boxWidth}`}>
          <Bundles />
        </div>        
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className={`${styles.flexCenter} ${styles.heading2} mt-44`}>OUR PORTFOLIO</h1>
          <Portfolio />
          <PortfolioWeb/>
          <About/>
          <AboutUs/>
          
        </div>        
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gray-900`}>
        <div className={`${styles.boxWidth}`}>
          <Team/>
        </div>        
      </div>

       
      <div className={`${styles.paddingX} bg-primary`}>
        <Footer/>
      </div>
    </div>
  )
}

export default App