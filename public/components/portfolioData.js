import Fmb from '../../public/images/fmb.png';
import Ncce from '../../public/images/ncce.png';
import AzTrades from '../../public/images/aztrades.png';
import Visa from '../../public/images/visaven.png';
import blog from '../../public/images/ezzyblog2.png';

const data = [
	{
		id: 1,
		image: '/images/visaven.png',
		name: 'VisaVenai',
		description: 'A web application designed to help student visa applicants prepare for their visa interviews, offering a platform to practice and improve their interview skills.',
		technologies: 'NextJS || TYpeScript || TailwindCSS || MySQL',
		liveDemo: 'https://visavenai.com',
		Github: 'https://github.com/Obhenimen/visaqueryapp',
		duration: '2 Months',
		teamSize: '2',
		category: 'AI',
		projectStatus: 'Completed',
		results: 'Designed and developed a web application to assist student visa applicants in improving their interview skills. The project utilized Next.js for server-side rendering, TypeScript for codebase integrity, Tailwind CSS for responsive and modern styling, and MySQL for secure data storage.',
		features: {
			chatBot: 'The application features a chatbot that simulates a real-life visa interview, allowing users to practice and improve their interview skills.',
			faq: 'The platform offers a comprehensive FAQ section, providing users with a wealth of information to help them prepare for their visa interviews.',
			expertSupport: 'The application offers expert support to users, providing them with the opportunity to receive professional guidance and advice.',
		},
	},
	{
		id: 2,
		image: '/images/ezzyblog2.png',
		name: 'Tech Talks',
		description: 'An exquisitely designed technology-focused blog site, meticulously constructed using the dynamic Next.js framework and the versatile content management system, Sanity.io. This platform presents an engaging and interactive hub where tech enthusiasts, industry professionals, and avid readers come together to share and explore a vast collection of articles dedicated to the ever-evolving tech industry',
		technologies: 'NextJS || TYpeScript || TailwindCSS || Sanityio',
		liveDemo: 'https://ezzyblog.vercel.app',
		Github: 'https://github.com/Ezzywealth/ezzyblog',
		duration: '1 Month',
		teamSize: '1',
		category: 'Blogging',
		projectStatus: 'Completed',
		results: 'Created a technology-focused blog site powered by Next.js and Sanity.io. The platform enables the sharing and exploration of articles related to the tech industry. The project integrated TypeScript for type safety, Tailwind CSS for sleek design, and Sanity.io for efficient content management.',
		features: {
			articles: 'The platform features a wide array of articles related to the tech industry, allowing users to explore and share their favorite articles.',
			comments: 'The application offers a comment section for each article, enabling users to share their thoughts and opinions.',
			search: 'The platform features a search bar, allowing users to search for specific articles based on keywords.',
		},
	},
	{
		id: 3,
		image: '/images/fmb.png',
		name: 'FirstMonie',
		features: {
			dashboard: 'Users gain immediate access to their financial overview, where they can monitor account balances and transaction histories with ease.',
			receipts: 'The application allows users to conveniently download detailed transaction receipts, offering complete transparency for all financial activities.',
			deposits: 'Seamlessly conduct both deposits and withdrawals, offering users flexibility in managing their finances.',
			adminPanel: 'The inclusion of an administrative panel ensures robust control and management over user accounts, providing unparalleled administrative capabilities.',
		},
		description: `An innovative online banking application meticulously crafted with Next.js, MongoDB, and the seamless styling of Tailwind CSS. This sophisticated platform empowers users with a comprehensive array of banking capabilities.`,
		technologies: `Next.js || TailwindCSS || Redux-toolkit || mongoDB`,
		technologies: 'NextJs || TailwindCSS || Redux-toolkit || mongoDB ',
		liveDemo: 'https://firstmoniebank.com/',
		Github: 'https://github.com/Ezzywealth/First_Monie',
		duration: '5 Weeks',
		teamSize: '4',
		category: 'Web Development',
		projectStatus: 'Completed',
		results: 'Engineered a web application for seamless banking transactions. The project harnessed Next.js for efficient server-side rendering, Tailwind CSS for professional styling, Redux Toolkit for state management, and MongoDB for data storage.',
	},
	{
		id: 4,
		image: '/images/aztrades.png',
		name: 'AzTrades',
		description: `An advanced and user-centric cryptocurrency investment platform designed to offer a comprehensive overview of the ever-fluctuating cryptocurrency market. This sophisticated platform empowers users, from novice investors to seasoned traders, with real-time data on the current prices of a vast array of cryptocurrencies. It's a one-stop solution for staying informed and making informed investment decisions in the dynamic world of digital assets.`,
		technologies: 'NextJs || TailwindCSS || Redux-toolkit || mongoDB',
		liveDemo: 'https://azcryptoinvestment.com/',
		Github: 'https://github.com/Ezzywealth/AzTrades',
		duration: '3 Weeks',
		teamSize: '1',
		category: 'Cryptocurrency',
		projectStatus: 'completed',
		results: 'Developed a cryptocurrency investment platform displaying real-time crypto prices. The project utilized Next.js for fast server-side rendering, Tailwind CSS for a sleek and responsive UI, Redux Toolkit for state management, and MongoDB for data storage.',
		features: {
			cryptoPrices: 'The platform displays real-time cryptocurrency prices, allowing users to monitor the market and make informed investment decisions.',
			portfolio: 'Users can view their portfolio, which displays their current investments and their respective values.',
			transactions: 'The application offers a detailed overview of all transactions, providing users with a comprehensive history of their investment activities.',
		},
	},
];
export default data;
