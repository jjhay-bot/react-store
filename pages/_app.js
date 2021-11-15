import '../styles/globals.css'
import Navbar from "../components/layout/Navbar";
import ShowCart from "./cartpage/index";

function MyApp({ Component, pageProps }, props) {
  return (
    <>
      {/* <Navbar onShow={props.onShowCart} /> */}
      <Component {...pageProps} />
    </>

  );
}

export default MyApp

