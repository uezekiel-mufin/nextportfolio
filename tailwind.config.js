/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './public/components/**/*.{js,ts,jsx,tsx}'],
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
		},
	},
	plugins: [],
};
