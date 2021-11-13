import '../styles/globals.css'
import Navbar from "../components/layout/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='navOffset'>
        <Navbar/>
      </div>
      <Component {...pageProps} />
    </>

  );
}

export default MyApp
