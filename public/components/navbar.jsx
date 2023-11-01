import React, { useState, useEffect } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import SideNav from './SideNav';
import { useRouter } from 'next/router';
import Image from 'next/image';

const links = [
	{
		id: 1,
		name: 'Home',
		link: '#',
	},
	{
		id: 2,
		name: 'About',
		link: '#about',
	},
	{
		id: 3,
		name: 'Portfolio',
		link: '#portfolio',
	},
	{
		id: 4,
		name: 'Skills',
		link: '#skills',
	},
	{
		id: 5,
		name: 'Contact Us',
		link: '#contact',
	},
];

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [activeLink, setActiveLink] = useState('Home');
	const { pathname } = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > 30) {
				setScroll(true);
			} else if (currentScrollY <= 50) {
				setScroll(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scroll]);

	const openMenu = () => {
		setIsMenu((prev) => !prev);
	};

	const closeMenu = () => {
		setIsMenu(false);
	};

	return (
		<nav className={` left-0 w-full transition-all pr-4 md:px-12 lg:px-20  py-8 ease-linear duration-100 fixed -top-1 flex flex-row h-[95px] border-b border-blue-100 items-center justify-between ${scroll ? 'bg-white shadow-lg' : 'bg-transparent'} z-[999]`}>
			<span className='flex  italic'>
				<Image src='/images/newlogo2.png' width={120} height={70} alt='logo' className=' cursor-pointer w-full h-full' />
			</span>
			{isMenu && (
				<div className='md:hidden animate-slide-in fixed z-10 top-0 left-0 right-0 h-screen bg-[#fff] w-full'>
					<SideNav closeMenu={closeMenu} />
				</div>
			)}
			<div className='flex relative'>
				<div className='flex  justify-end w-full md:hidden'>
					<span className='text-3xl font-extrabold text-[#212121]' onClick={openMenu}>
						<AiOutlineMenuFold />
					</span>
				</div>
				<ul id='Menu' className='hidden  md:flex md:mx-12 justify-around gap-10 items-center  '>
					{links.map((link) => (
						<a href={link.link} key={link.id} onClick={() => setActiveLink(link.name)}>
							<li className={`cursor-pointer hover:text-[#3b5998] transition-all duration-300 ease-linear active:text-red font-sans font-semibold text-lg ${link.name === activeLink ? 'text-[#3b5998]' : ''}`}>{link.name}</li>
						</a>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
