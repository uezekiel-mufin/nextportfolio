'use client';
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import TawkToWidget from './Tawk';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ParticlesContainer from './Particles';
import ThemeContext from './ThemeContext';
import useThemeHook from './hooks/useThemeHook';
const Layout = ({ children }) => {
	const { theme } = useThemeHook();
	return (
		<>
			<ThemeContext.Provider value={theme}>
				<Navbar />
				<TawkToWidget />
				<ToastContainer position='top-center' />
				{children}
				<Footer />
				{/* <ParticlesContainer /> */}
			</ThemeContext.Provider>
		</>
	);
};

export default Layout;
