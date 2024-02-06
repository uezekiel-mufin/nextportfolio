/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './public/components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'sm': '120px',
				'base': '320px',
				'md': '640px',
				'lg': '768px',
				'xl': '1024px',
				'2xl': '1280px',
				'3xl': '1536px',
			},
			colors: {
				'primary-bg-light': '#e9e7e7',
				'primary-bg-dark': '#5e5d5d',
				'primary-text-light': '#212121',
				'primary-text-dark': '#ffffff',
				'secondary-text-light': '#4a3032',
				'secondary-text-dark': '#e2e2e2',
				'primary-border-light': '#c4d5fa',
				'primary-border-dark': '#c4d5fa',
				'btn-bg-light': '#000000',
				'btn-bg-dark': '#ffffff',
				'nav-text-light': '#c4d5fa',
				'nav-text-dark': '#ffffff',
				'custom-white': '#f5f5f5',
				'nav-bg': '#333',
				'contact-bg-light': '#e7eeee',
				'contact-bg-dark': '#273535',
				'transparent': 'transparent',
				'none': 'none',
			},
		},
	},
	plugins: [],
};
