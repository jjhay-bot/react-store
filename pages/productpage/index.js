import ProductList from "../../components/products/ProductList";
import DUMMY_DATA from "./database";

function ProductPage(props) {
  return (
    <ProductList products={DUMMY_DATA} />
    
  );
}

export default ProductPage;