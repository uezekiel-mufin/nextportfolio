'use client';
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import { FaHome, FaNetworkWired, FaInfoCircle, FaPhoneAlt, FaTools } from 'react-icons/fa';
import Image from 'next/image';

const links = [
	{
		id: 1,
		name: 'Home',
		link: '/',
		icon: <FaHome />,
	},
	{
		id: 2,
		name: 'About',
		link: '/about',
		icon: <FaInfoCircle />,
	},
	{
		id: 3,
		name: 'Portfolio',
		link: '/portfolio',
		icon: <FaNetworkWired />,
	},
	{
		id: 4,
		name: 'Skills',
		link: '/skills',
		icon: <FaTools />,
	},
	{
		id: 5,
		name: 'Contact Us',
		link: '/contact',
		icon: <FaPhoneAlt />,
	},
];

const SideNav = ({ closeMenu }) => {
	const linkClick = (id) => {
		closeMenu();
	};

	return (
		<div className='fixed top-0 left-0 right-0 bg-white w-full z-10 flex  px-4 md:px-24 pb-4 md:py-7 h-screen'>
			<div className='flex flex-col gap-4 w-full '>
				<div className='flex py-8 justify-between items-center'>
					<div className='flex flex-1 text-5xl italic  md:mx-10'>
						<Link href='/'>
							<Image src='/images/Ezekiel_logo.png' width={400} height={50} alt='logo' className=' cursor-pointer w-full h-full' />
						</Link>
					</div>
					<span className='md:hidden cursor-pointer font-extrabold flex p-3 text-xl' aria-hidden='true'>
						<AiOutlineCloseCircle onClick={() => closeMenu()} className='h-6 w-6 text-[#212121]' />
					</span>
				</div>

				<section className='  flex flex-col gap-4 text-xl'>
					{links.map((link) => (
						<li key={link.id} onClick={() => linkClick(link.id)} className='list-none cursor-pointer hover:scale-105 transaition-all duration-300 ease-in-out'>
							<Link href={link.link}>
								<a className='flex items-center gap-3 list-none'>
									<span className='text-skin-name text-[#212121]'>{link.icon}</span>
									<span className='text-[#212121]'>{link.name}</span>
								</a>
							</Link>
						</li>
					))}
				</section>
			</div>
		</div>
	);
};

export default SideNav;
