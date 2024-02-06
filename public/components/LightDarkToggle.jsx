import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import useThemeHook from './hooks/useThemeHook';

const LightDarkToggle = () => {
	const { theme, handleTheme } = useThemeHook();

	return <li className='list-none text-white cursor-pointer'>{theme === 'dark' ? <MdOutlineLightMode size={23} onClick={() => handleTheme('light')} /> : <MdDarkMode size={23} onClick={() => handleTheme('dark')} />}</li>;
};

export default LightDarkToggle;
