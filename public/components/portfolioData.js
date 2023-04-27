import Forkify from '../../public/images/forkify.png';
import Bankist from '../../public/images/bankist.png';
import Hotel from '../../public/images/hotel_red.png';
import Apple from '../../public/images/appleclone.png';
import Zicomm2 from '../../public/images/zicomm2.png';
import blog from '../../public/images/ezzyblog2.png';

const data = [
	{
		id: 1,
		image: blog,
		name: 'Tech Talks',
		description: 'A NextJS and SanityIo blog site for tech related articles',
		technologies: 'NextJS || TYpeScript || TailwindCSS || Sanityio',
		liveDemo: 'https://ezzyblog.vercel.app',
		Github: 'https://github.com/Ezzywealth/ezzyblog',
	},
	{
		id: 2,
		image: Zicomm2,
		name: 'Zicomm-v2',
		description: 'A mini e-commerce store for furniture sales ',
		technologies: 'NextJs || TailwindCSS || Redux-toolkit || mongoDB ',
		liveDemo: 'https://zicomm-v2.vercel.app/',
		Github: 'https://github.com/Ezzywealth/nextJSecommerce',
	},
	{
		id: 3,
		image: Hotel,
		name: 'Hotel Reddington',
		description: 'A simple website desgin for a hotel',
		technologies: 'ReactJS || TailwindCSS || React-Router || Framer Motion',
		liveDemo: 'https://hotelred.netlify.app/',
		Github: 'https://github.com/Ezzywealth/hotel',
	},
	{
		id: 4,
		image: Forkify,
		name: 'Forkify Recipes',
		description: 'A web app for getting recipes for the available search queries.',
		technologies: 'NextJS || React Icons || TailwindCSS',
		liveDemo: 'https://forkify-app-six.vercel.app/',
		Github: 'https://github.com/Ezzywealth/forkify_app',
	},
	{
		id: 5,
		image: Apple,
		name: 'Apple-clone',
		description: 'A redesign of the apple e-commerce website ',
		technologies: 'Typescript || NextJs || TailwindCSS || headless-ui || sanityIO  ',
		liveDemo: 'https://apple-clone-neon.vercel.app/',
		Github: 'https://github.com/Ezzywealth/apple-clone-typescript',
	},
	{
		id: 6,
		image: Bankist,
		name: 'Mini Bankist',
		description: 'A web mini app for financial transactions between users.',
		technologies: 'ReactJS || CSS || React-Icons',
		liveDemo: 'https://bankist-ezzy.netlify.app/',
		Github: 'https://github.com/Ezzywealth/newBankist',
	},
];
export default data;
