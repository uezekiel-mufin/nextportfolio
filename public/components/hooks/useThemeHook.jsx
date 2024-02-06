import { useEffect, useState } from 'react';

const useThemeHook = () => {
	// function to handle theme change
	const [theme, setTheme] = useState('');

	useEffect(() => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  // document.documentElement.classList.add('dark')
		handleTheme('dark');
			setTheme('dark');
} else {
  // document.documentElement.classList.remove('dark')
			handleTheme('light');
			// dispatch(toggleTheme('light'));
			setTheme('light');
}
		// if (localStorage.theme === 'dark') {
		// 	// if the user has set a theme, set the theme to the theme in the localstorage
		// 	// dispatch(toggleTheme('dark'));
		// 	handleTheme('dark');
		// 	setTheme('dark');
		// } else if (!localStorage.theme && !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		// 	// if the user has not set a theme and the system theme is dark, set the theme to dark
		// 	handleTheme('dark');
		// 	// dispatch(toggleTheme('dark'));
		// 	setTheme('dark');
		// } else {
		// 	// if the user has not set a theme and the system theme is light, set the theme to light
		// 	handleTheme('light');
		// 	// dispatch(toggleTheme('light'));
		// 	setTheme('light');
		// }
	}, []);

	const handleTheme = (color) => {
		if (color === 'dark') {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
			setTheme('dark');
			// dispatch(toggleTheme('dark'));
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme= 'light';
			setTheme('light');
			// dispatch(toggleTheme('light'));
		}
	};
	return { theme, handleTheme };
};

export default useThemeHook;
