//Homepage (root)
import ProductPage from "./products";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import Footer from '../components/layout/Footer'

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Store</title>
        <meta 
          name="description"
          content="Online grocery store project using reactJS and nextJS!"
        />
      </Head>
      <ProductPage />
      {/* <Footer /> */}
    </>

  );
}

export default HomePage;