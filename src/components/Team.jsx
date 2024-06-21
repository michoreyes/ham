import React from 'react'
import styles,{layout} from '../style'
import mj from '../assets/mj.jpg';
import bundang from '../assets/bundang.jpg';
import micho from '../assets/micho.jpg';
import olimps from '../assets/olimps.jpg';
import hazel from '../assets/hazel.jpg';

const Team = () => {
  return (
    <section className={`bg-gray-900 py-32 ${layout.section}`}>
			<div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl py-12">
    <div className="">
        <h3
            className="text-center font-[Quicksand] text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
            Our Team
        </h3>
    </div>

    <div className="grid lg:grid-cols-3 lg:gap-4 mt-4 lg:mt-8">

        <div className="lg:flex lg:items-center lg:justify-between border p-4 rounded mt-4 lg:mt-0">
            <div className="flex-1 min-w-0 mt-5 lg:mt-0">
                    <div className="flex">
                        <div>
                            <div className="flex lg:mt-0 lg:ml-0">
                                <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-400 mt-1">
                                    <img className="rounded-full" src={hazel}/>
                                </span>
                            </div>

                        </div>

                        <div className="ml-4">
                            <h2 className="text-lg font-semibold text-white font-poppins">
															Ms. Hazel Anne F. Mendoza
                            </h2>
                            <div className="text-white font-semibold text-sm pt-2 font-poppins">
															Founder/Digital Marketing Director
                            </div>

                        </div>
                    </div>
                
            </div>
        </div>

        <div className="lg:flex lg:items-center lg:justify-between border p-4 rounded mt-4 lg:mt-0">
            <div className="flex-1 min-w-0 mt-5 lg:mt-0">
               
                    <div className="flex">
                        <div>
                            <div className="flex lg:mt-0 lg:ml-0">
                                <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-400 mt-1">
                                    <img className="rounded-full" src={bundang}/>
                                </span>
                            </div>

                        </div>

                        <div className="ml-4">
                            <h2 className="text-lg font-semibold text-white font-poppins">
															Ms. Kyla F. Bautista
                            </h2>
                            <div className="text-white font-semibold text-sm pt-2 font-poppins"> 
                              Graphics Designer
                            </div>
                        </div>
                    </div>
             
            </div>
        </div>

        <div className="lg:flex lg:items-center lg:justify-between border p-4 rounded mt-4 lg:mt-0">
            <div className="flex-1 min-w-0 mt-5 lg:mt-0">
              
                    <div className="flex">
                        <div>
                            <div className="flex lg:mt-0 lg:ml-0">
                                <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-400 mt-1">
                                    <img className="rounded-full" src={mj}/>
                                 </span>
                            </div>

                        </div>

                        <div className="ml-4">
                            <h2 className="text-lg font-semibold text-white font-poppins">
														Mr. Mhar John A. Delos Santos
                            </h2>
                            <div className="text-white font-semibold text-sm pt-2 font-poppins">
															UI / UX Designer
                            </div>
                        </div>
                    </div>
               
            </div>
        </div>

				<div className="lg:flex lg:items-center lg:justify-between border p-4 rounded mt-4 lg:mt-0">
            <div className="flex-1 min-w-0 mt-5 lg:mt-0">
                
					
                    <div className="flex">
                        <div>
                            <div className="flex lg:mt-0 lg:ml-0">
                                <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-400 mt-1">
                                    <img className="rounded-full" src={olimps}/>
                                </span>
                            </div>

                        </div>

                        <div className="ml-4">
                            <h2 className="text-lg font-semibold text-white font-poppins">
															Mr. John Paul DC. Olimpo
                            </h2>
                            <div className="text-white font-semibold text-sm pt-2 font-poppins">
															Front-End Developer
                            </div>

                        </div>
                    </div>
              
            </div>
        </div>

				<div className="lg:flex lg:items-center lg:justify-between border p-4 rounded mt-4 lg:mt-0">
            <div className="flex-1 min-w-0 mt-5 lg:mt-0">
                
                    <div className="flex">
                        <div>
                            <div className="flex lg:mt-0 lg:ml-0">
                                <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-400 mt-1">
                                    <img className="rounded-full" src={micho}/>
                                 </span>
                            </div>

                        </div>

                        <div className="ml-4">
                            <h2 className="text-lg font-semibold text-white font-poppins">
														Mr. Micho F. Reyes
                            </h2>
                            <div className="text-white font-semibold text-sm pt-2 font-poppins">
															Back-End Developer
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
</div>
    </section>
  )
}

export default Team