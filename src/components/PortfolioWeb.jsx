import React, {useState} from 'react'
import styles,{layout} from '../style'
import woof from '../assets/woof.gif'
import tahol from '../assets/tahol.gif'
import arf from '../assets/arf.gif'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const PortfolioWeb = () => {

  const slides = [
    {
      url: woof,
    },
    {
      url: tahol,
    },
    {
      url: arf,
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
    <section className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>Web Designs</h2>
				<p className={`max-w-[470px] mt-5 ${styles.desc}`}>HAM Digital Marketing Services crafts user-friendly, visually stunning websites, enhancing online presence with custom, responsive, and modern design solutions.</p>
			</div>

      <div className={`${layout.sectionImg} flex-col`}>
        <div className="max-w-[750px] xs:h-[550px] h-[520px] w-full m-auto sm:py-16 py-4 px-4 relative group">
          <div className="w-full h-full bg-contain rounded-3xl bg-no-repeat bg-center duration-500" 
          style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
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
    </section>
  )
}

export default PortfolioWeb