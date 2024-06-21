import React, {useEffect} from 'react'
import styles from '../style'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const PriceSmm = () => {

	const navigate = useNavigate();
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth} z-[1000]`}>
          <Navbar style={'hidden'}/>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gray-900`}>
        <div className={`${styles.boxWidth} `}>
          <div className="pt-5 bg-gray-900" id="pricing">
            <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="font-[Quicksand] font-semibold text-3xl leading-7 text-indigo-400">Social Media Management</h1>
                <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Whether its just you, or your entire
                    team - weve got you covered.</p>
          </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">Choose the product that works best</p>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                
                <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                    <div className="flex items-center justify-between gap-x-4">
                    <h2 id="product1" className="text-lg font-semibold leading-8 text-white">Basic</h2>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-300">Product details for Basic Package</p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">Php 15,000 / month</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
                    </p>
                    <a href="/order" aria-describedby="product1"
                    className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
                    Now</a>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"></path>
                        </svg>1 Social Media Platform Management (Facebook)</li>
                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"></path>
                        </svg>10 Social Media Posts (Graphics + Content)</li>
                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"></path>
                        </svg>3 post boosting per month (only for FB)</li>
												<li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                        </svg>and more..</li>
                    </ul>
                </div>

                
                <div className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
                    <div className="flex items-baseline justify-between gap-x-4">
                    <h2 id="product2" className="text-lg font-semibold leading-8 text-white">Standard</h2>
                    <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">Most popular</p>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-300">The most popular choice. Product details for Standard Package</p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">Php 30,000 / month</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
                    </p>
                    <a href="/order" aria-describedby="product2"
                    className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
                    Now</a>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"></path>
                        </svg>2 Social Media Platforms Management (Facebook and Instagram)</li>
                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"></path>
                        </svg>20 Social Media Posts (Graphics + Content)</li>
                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"></path>
                        </svg>4 post boosting per month (only for FB)</li>
												<li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"></path>
                        </svg>and more...</li>
                    </ul>
                </div>

                
                <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                    <div className="flex items-center justify-between gap-x-4">
                    <h2 id="product3" className="text-lg font-semibold leading-8 text-white">Premium</h2>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-300">Product details for Premium Package</p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">Php 50,000 / month</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
                    </p>
                    <a href="/order" aria-describedby="product3"
                    className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
                    Now</a>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"></path>
                        </svg>3 Social Media Platforms Management (Facebook, Instagram, Youtube)</li>
                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                        </svg>30 Social Media Posts (Graphics + Content)</li>
                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                        </svg>8 post boosting per month (only for FB)</li>
												<li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                        <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"></path>
                        </svg>and more..</li>
                    </ul>
                </div>
                </div>
								<div className={`mt-10 ${styles.flexCenter}`}>
									<Button laman={'Back'} styles={'px-10'} onClick={() => navigate('/')}/>
								</div>
            </div>
            </div>
						
        </div>
      </div>
    </div> 
  )
}

export default PriceSmm