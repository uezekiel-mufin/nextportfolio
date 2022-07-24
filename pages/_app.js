import Navbar from "../public/components/navbar";
import "../styles/globals.css";
import Particlejs from "../public/components/particles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Particlejs />
    </>
  );
}

export default MyApp;
