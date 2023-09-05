import Navbar from '../public/components/navbar';
import '../styles/globals.css';
import Particlejs from '../public/components/particles';
import Footer from '../public/components/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TawkToWidget from '../public/components/Tawk';

function MyApp({ Component, pageProps }) {
	return (
		<main className='relative'>
			<TawkToWidget />
			<ToastContainer />
			<Navbar />
			<section className=''>
				<Component {...pageProps} />
			</section>
			<Particlejs />
			<section className=''>
				<Footer />
			</section>
		</main>
	);
}

export default MyApp;
