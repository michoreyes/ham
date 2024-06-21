import React from 'react'
import styles, {layout} from '../style'
import {whyus} from '../constants'


const WhyCard = ({Icon, label, subtext}) => (
	<div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-8 py-16 bg-secondary">
			<div className="w-11 h-11 flex justify-center items-center bg-white rounded-full">
				<Icon size={24}/>
			</div>
			<h3 className='mt-5 font-poppins text-3xl leading-normal font-bold text-white'>
				{label}
			</h3>
			<p className='mt-3 break-words font-[Quicksand] text-lg leading-normal text-slate-grey text-white'>
				{subtext}
			</p>
	</div>
)
	

const AboutUs = () => {


  return (
    <section className={layout.section}>
			<div className="max-container flex justify-center flex-wrap gap-10">
				{whyus.map((why) => (
					<WhyCard key={why.label} {...why} />
				))}
			</div>
    </section>
  )
}

export default AboutUs