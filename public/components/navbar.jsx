import React, { useState, useEffect } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import SideNav from './SideNav';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LightDarkToggle from './LightDarkToggle';

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
		name: 'Contact Me',
		link: '#contact',
	},
];

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [activeLink, setActiveLink] = useState('Home');
	const { pathname } = useRouter();

	const sections = ['section1', 'section2', 'section3'];

	const observerCallback = (entries) => {
		console.log(entries);
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const currentSection = entry.target.id;
				console.log(`User is in ${currentSection}`);
				// You can update state or perform other actions here
			}
		});
	};

	useEffect(() => {
		const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
		links.forEach((section) => {
			const sectionRef = document.getElementById(section.link);
			if (sectionRef) {
				observer.observe(sectionRef);
			}
		});

		return () => {
			observer.disconnect();
		};
	});

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
		<nav className={` left-0 w-full transition-all bg-nav-bg  pr-4 md:px-12 lg:px-12  py-4 ease-linear duration-100 fixed -top-1 flex flex-row  items-center justify-between ${scroll ? ' shadow-lg' : ''} z-[999]`}>
			<span className='flex  italic'>
				<Image src='/images/newlogo2.png' width={80} height={40} alt='logo' className=' cursor-pointer w-full h-full' />
			</span>
			{isMenu && (
				<div className='md:hidden animate-slide-in fixed z-10 top-0 left-0 right-0 h-screen bg-[#fff] w-full'>
					<SideNav closeMenu={closeMenu} />
				</div>
			)}
			<div className='flex relative items-center gap-4'>
				<ul id='Menu' className='hidden  md:flex justify-around gap-5 xl:gap-10 items-center  '>
					{links.map((link) => (
						<a href={link.link} key={link.id} onClick={() => setActiveLink(link.name)}>
							<li className={`cursor-pointer hover:text-custom-white transition-all   text-nav-text-light duration-200 ease-linear active:text-red font-sans font-semibold text-base lg:text-lg ${link.name === activeLink ? 'text-custom-white' : ''}`}>{link.name}</li>
						</a>
					))}
				</ul>
			</div>
			<LightDarkToggle />
			<div className='flex  justify-end w-full md:hidden'>
				<span className='text-3xl font-extrabold text-white' onClick={openMenu}>
					<AiOutlineMenuFold />
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
