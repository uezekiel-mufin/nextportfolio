import Fmb from '../../public/images/fmb.png';
import Ncce from '../../public/images/ncce.png';
import AzTrades from '../../public/images/aztrades.png';
import Visa from '../../public/images/visaven.png';
import blog from '../../public/images/ezzyblog2.png';

const data = [
	{
		id: 1,
		image: Visa,
		name: 'VisaVenai',
		description: 'A web application designed to help student visa applicants prepare for their visa interviews, offering a platform to practice and improve their interview skills.',
		technologies: 'NextJS || TYpeScript || TailwindCSS || MySQL',
		liveDemo: 'https://visavenai.com',
		Github: '',
	},
	{
		id: 2,
		image: blog,
		name: 'Tech Talks',
		description: 'A technology-focused blog site built with Next.js and Sanity.io, offering a platform to share and explore articles related to the tech industry.',
		technologies: 'NextJS || TYpeScript || TailwindCSS || Sanityio',
		liveDemo: 'https://ezzyblog.vercel.app',
		Github: 'https://github.com/Ezzywealth/ezzyblog',
	},
	{
		id: 3,
		image: Fmb,
		name: 'FirstMonie',
		description: 'A web application that enables users to perform banking transactions seemlessly. ',
		technologies: 'NextJs || TailwindCSS || Redux-toolkit || mongoDB',
		liveDemo: 'https://firstmoniebank.com/',
		Github: '',
	},
	{
		id: 5,
		image: AzTrades,
		name: 'AzTrades',
		description: 'A cryptocurrrency investment platform, that shows you price of current crypto prices.',
		technologies: 'NextJs || TailwindCSS || Redux-toolkit || mongoDB',
		liveDemo: 'https://azcryptoinvestment.com/',
		Github: '',
	},
	{
		id: 6,
		image: Ncce,
		name: 'NCCE',
		description: 'A web application that enable organization verify the authenticity of a certificate in Nigeria.',
		technologies: 'NextJS || TailwindCSS || TypeScript',
		liveDemo: 'https://nccecertificate.raadaa.com/',
		Github: '',
	},
];
export default data;
