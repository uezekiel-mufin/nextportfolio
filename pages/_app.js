import Navbar from '../public/components/navbar';
import '../styles/globals.css';
import Particlejs from '../public/components/particles';
import Footer from '../public/components/footer';
function MyApp({ Component, pageProps }) {
	return (
		<>
			<main>
				<Navbar />
				<section className=''>
					<Component {...pageProps} />
				</section>
				<hr />
				<Footer />
				<Particlejs />
			</main>
		</>
	);
}

export default MyApp;
