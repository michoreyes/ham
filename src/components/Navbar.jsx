import React, { useState } from 'react'
import logo from '../assets/qwe.png';
import Button from './Button';
import {navLinks} from '../constants'
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const Navbar = () => {
	const [toggle, settoggle] = useState(false)
  return (
    <nav className='w-full flex py-4 justify-between items-center bg-primary'>
			<div className='flex'>
				<img src={logo} alt="logo" className='w-[165px] h-[90px] object-contain'/>
				<ul className='list-none md:flex hidden justify-start items-center flex-1'>
					{navLinks.map((link, index) => (
						<li key={link.id} className={`font-[Quicksand] font-medium cursor-pointer text-[16px] 
						text-white ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} ${index === 0 ? 'ml-10' : 'ml-0'} 
						hover:text-dimBlue`}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				
			</div>
			
			<div className='flex'>
				<Button styles={'sm:block hidden'} laman={'CONTACT US'}/>
				<div className="md:hidden flex flex-1 justify-end items-center ml-8">
						<img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' 
						onClick={() => settoggle((prev) => !prev)}/>

						<div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary absolute top-20 
						right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
							<ul className='list-none flex flex-col justify-end items-center flex-1'>
								{navLinks.map((link, index) => (
								<li key={link.id} className={`font-[Quicksand] font-medium cursor-pointer text-[16px] 
								text-white ${index === navLinks.length-1 ? 'mb-0' : 'mb-10'} hover:text-dimBlue`}>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
							</ul>
						</div>
					</div>
			</div>

    </nav>
  )
}

export default Navbar