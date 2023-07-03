import Forkify from '../../public/images/forkify.png';
import MustFintech from '../../public/images/must_fintech.png';
import Carbooky from '../../public/images/carbooky.png';
import Apple from '../../public/images/appleclone.png';
import Zicomm2 from '../../public/images/zicomm2.png';
import blog from '../../public/images/ezzyblog2.png';

const data = [
	{
		id: 1,
		image: blog,
		name: 'Tech Talks',
		description: 'A technology-focused blog site built with Next.js and Sanity.io, offering a platform to share and explore articles related to the tech industry.',
		technologies: 'NextJS || TYpeScript || TailwindCSS || Sanityio',
		liveDemo: 'https://ezzyblog.vercel.app',
		Github: 'https://github.com/Ezzywealth/ezzyblog',
	},
	{
		id: 2,
		image: Zicomm2,
		name: 'Zicomm-v2',
		description: 'A compact online store specializing in furniture sales, providing customers with a seamless shopping experience for all their furnishing needs. ',
		technologies: 'NextJs || TailwindCSS || Redux-toolkit || mongoDB ',
		liveDemo: 'https://zicomm-v2.vercel.app/',
		Github: 'https://github.com/Ezzywealth/nextJSecommerce',
	},
	{
		id: 3,
		image: Carbooky,
		name: 'Carbooky',
		description: 'A web application dedicated to facilitating car rental services, allowing users to conveniently reserve cabs for their transportation needs.',
		technologies: 'ReactJS || ReactJS || TailwindCSS || Postgres || Ruby on Rails',
		liveDemo: 'https://carbooky.vercel.app/cabs',
		Github: 'https://github.com/Ezzywealth/cab_bookings_frontend',
	},
	{
		id: 4,
		image: Forkify,
		name: 'Forkify Recipes',
		description: 'A web application designed to retrieve recipes based on user-provided search queries, offering a convenient way to explore and discover culinary delights.',
		technologies: 'NextJS || React Icons || TailwindCSS',
		liveDemo: 'https://forkify-app-six.vercel.app/',
		Github: 'https://github.com/Ezzywealth/forkify_app',
	},
	{
		id: 5,
		image: Apple,
		name: 'Apple-clone',
		description: 'An enhanced version of the Apple e-commerce website, featuring a redesigned interface and improved user experience.',
		technologies: 'Typescript || NextJs || TailwindCSS || headless-ui || sanityIO  ',
		liveDemo: 'https://apple-clone-neon.vercel.app',
		Github: 'https://github.com/Ezzywealth/apple-clone-typescript',
	},
	{
		id: 6,
		image: MustFintech,
		name: 'Members Directory',
		description: 'A member information management dashboard that provides an interface for efficiently handling and organizing members data.',
		technologies: 'ReactJS || TailwindCSS || React-Icons',
		liveDemo: 'https://must-dashboard.netlify.app',
		Github: 'https://github.com/Ezzywealth/must_fintech',
	},
];
export default data;
