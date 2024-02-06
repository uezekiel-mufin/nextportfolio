'use client';
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaHome, FaNetworkWired, FaInfoCircle, FaPhoneAlt, FaTools } from 'react-icons/fa';
import Image from 'next/image';

const links = [
	{
		id: 1,
		name: 'Home',
		link: 'home',
		icon: <FaHome />,
	},
	{
		id: 4,
		name: 'Skills',
		link: 'skills',
		icon: <FaTools />,
	},
	{
		id: 3,
		name: 'Portfolio',
		link: 'project',
		icon: <FaNetworkWired />,
	},
	{
		id: 2,
		name: 'About',
		link: 'about',
		icon: <FaInfoCircle />,
	},
	{
		id: 5,
		name: 'Contact Us',
		link: 'contact',
		icon: <FaPhoneAlt />,
	},
];

const SideNav = ({ closeMenu }) => {
	const linkClick = (id) => {
		closeMenu();
	};

	return (
		<div className='fixed top-0 left-0 right-0 bg-primary-bg-light dark:bg-primary-bg-dark w-full z-10 flex   md:px-24 pb-4 md:py-7 h-screen'>
			<div className='flex flex-col gap-4 w-full '>
				<div className='flex  bg-nav-bg-dark py-3 px-4 justify-between items-center'>
					<span className='flex  italic'>
						<Image src='/images/ezekiel.jpg' width={80} height={30} alt='logo' className=' cursor-pointer w-full h-full' />
					</span>
					<span className='md:hidden cursor-pointer font-extrabold text-primary-text-light dark:text-primary-text-dark flex  text-xl' aria-hidden='true'>
						<AiOutlineCloseCircle onClick={() => closeMenu()} className='h-6 w-6 ' />
					</span>
				</div>

				<section className=' mt-4 flex flex-col gap-4 text-xl px-4'>
					{links.map((link) => (
						<li key={link.id} onClick={() => linkClick(link.id)} className='list-none cursor-pointer hover:scale-105 transaition-all duration-300 ease-in-out'>
							<a href={`#${link.link}`} className='flex items-center gap-3 list-none'>
								<span className=' text-primary-text-light dark:text-primary-text-dark'>{link.icon}</span>
								<span className='text-primary-text-light dark:text-primary-text-dark'>{link.name}</span>
							</a>
						</li>
					))}
				</section>
			</div>
		</div>
	);
};

export default SideNav;
