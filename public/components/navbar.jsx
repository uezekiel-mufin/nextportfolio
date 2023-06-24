import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenuFold } from 'react-icons/ai';
import SideNav from './SideNav';
import { useRouter } from 'next/router';

const links = [
	{
		id: 1,
		name: 'Home',
		link: '/',
	},
	{
		id: 2,
		name: 'About',
		link: '/about',
	},
	{
		id: 3,
		name: 'Portfolio',
		link: '/portfolio',
	},
	{
		id: 4,
		name: 'Contact Us',
		link: '/contact',
	},
];

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);
	const { pathname } = useRouter();

	const openMenu = () => {
		setIsMenu((prev) => !prev);
	};

	const closeMenu = () => {
		setIsMenu(false);
	};

	return (
		<nav className=' w-full fixed top-0 flex flex-row h-[80px] shadow-lg items-center justify-between bg-white z-[999]'>
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
					<span className='text-4xl text-[#3e143f]' onClick={openMenu}>
						<AiOutlineMenuFold />
					</span>
				</div>
				<ul id='Menu' className='hidden  md:flex md:mx-12 justify-around gap-10 items-center  '>
					{links.map((link) => (
						<Link href={link.link} key={link.id}>
							<li className={`cursor-pointer hover:text-[#944d97] transition-all duration-300 ease-linear active:text-red font-sans font-semibold text-lg ${link.link === pathname ? 'text-[#b958bd]' : ''}`}>{link.name}</li>
						</Link>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
