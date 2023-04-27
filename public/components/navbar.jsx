import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenuFold } from 'react-icons/ai';
import SideNav from './SideNav';

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);

	const openMenu = () => {
		setIsMenu((prev) => !prev);
	};
	const closeMenu = () => {
		setIsMenu((prev) => !prev);
	};

	return (
		<nav className=' w-full fixed flex flex-row h-[80px] items-center justify-between bg-white z-[999]'>
			<span className='flex flex-1 text-5xl italic mx-2 md:mx-10'>
				<Link href='/'>
					<h1 className='logo'>EU</h1>
				</Link>
			</span>
			{isMenu && (
				<div className='md:hidden animate-slide-in fixed z-10 top-0 left-0 right-0 h-screen bg-[#fff] w-full'>
					<SideNav closeMenu={closeMenu} />
				</div>
			)}
			<div className='flex relative'>
				<div className='flex mx-4  w-full md:hidden'>
					<span className='text-4xl text-[#944d97]' onClick={openMenu}>
						<AiOutlineMenuFold />
					</span>
				</div>
				<ul id='Menu' className='hidden  md:flex md:mx-12 justify-around gap-10 items-center  '>
					<Link href='/'>
						<li onClick={() => closeMenu()} className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base '>
							Home
						</li>
					</Link>
					<Link href='/about'>
						<li onClick={() => closeMenu()} className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base'>
							About
						</li>
					</Link>
					<Link href='/portfolio'>
						<li onClick={() => closeMenu()} className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base'>
							Porfolio
						</li>
					</Link>
					<Link href='/contact'>
						<li onClick={() => closeMenu()} className='cursor-pointer hover:text-red-500 active:text-red font-sans font-medium text-base'>
							Contact
						</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
