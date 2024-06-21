import React from 'react'
import kineme from '../assets/kineme.png';
import rocket from '../assets/rocket.png';
import styles from '../style';
import Button from './Button';
import { Link } from 'react-router-dom';


const Hero = () => {


  return (
    <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style={{ backgroundImage: `url(${kineme})`, height: '500px' }}>
				<h1 className={`text-white ${styles.heading2} ${styles.marginY}`}>Welcome to 
					<span className='font-[Bungee]'> HAM</span></h1>
					<p className={`text-white ${styles.paragraph}`}>Start up, blast off!</p>
					<div className={`${styles.flexCenter} mt-6`}>
						<Button laman={'Start with us!'} styles={'z-[100]'}/>
					</div>
			
    </div>
  )
}

export default Hero