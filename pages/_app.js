import Navbar from '../public/components/navbar';
import '../styles/globals.css';
import Particlejs from '../public/components/particles';
import Footer from '../public/components/footer';
function MyApp({ Component, pageProps }) {
	return (
		<main className='relative custom-scrollbar'>
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
