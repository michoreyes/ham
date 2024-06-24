import React, { useState } from 'react'
import styles,{ layout } from '../style'
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Portfolio = () => {

	const slides = [
    {
        url: p1,
    },
    {
        url: p2,
    },
    {
        url: p3,
    },
    {
        url: p4,
    },
    {
        url: p5,
    },
	]

	const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className={`${layout.sectionReverse} mt-10`} id='portfolio'>
			<div className={`flex-col ${layout.sectionImgReverse}`}>
				<div className="max-w-[550px] xs:h-[650px] h-[520px] w-full m-auto sm:py-16 py-4 px-4 relative group">
					<div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-contain 
					 rounded-3xl bg-no-repeat bg-center duration-500"></div>
					{/* Left Arrow */}
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] 
					left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactLeft onClick={prevSlide} size={30}/>
					</div>
					{/* Right Arrow */}
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] 
					right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactRight onClick={nextSlide} size={30}/>
					</div>
				</div>
			</div>

			<div className={`${layout.sectionInfo}`}>
				<h2 className={`${styles.heading2}`}>Graphic Designs</h2>
				<p className={`max-w-[470px] mt-5 ${styles.desc}`}>HAM Digital Marketing Services specializes in innovative, eye-catching graphic designs, transforming ideas into stunning visual experiences for all media.</p>
			</div>
    </section>
  )
}

export default Portfolio