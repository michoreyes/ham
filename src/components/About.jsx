import React from 'react'
import styles, {layout} from '../style'

const About = () => {
  return (
    <section className={styles.flexCenter} id='about_us'>
			<div className={`flex-col ${styles.flexCenter}`}>
				<h2 className={`${styles.heading2} ${styles.flexCenter} ${styles.paddingX}`}>About Us</h2>
				<p className={`${styles.flexCenter} ${styles.desc} max-w-[720px] mt-5 text-balance text-center`}>HAM Digital Marketing Services offers a variety of digital solutions. 
				We help local businesses improve their online presence, engage with 
				customers, and achieve measurable results. At HAM Digital Marketing Services, 
				we are dedicated to helping local businesses, especially startups, 
				succeed in the digital world.</p>
			</div>
    </section>
  )
}

export default About