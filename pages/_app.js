import Navbar from "../public/components/navbar";
import "../styles/globals.css";
import Particlejs from "../public/components/particles";
import Footer from "../public/components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <hr />
      <Footer />
      <Particlejs />
    </>
  );
}

export default MyApp;
