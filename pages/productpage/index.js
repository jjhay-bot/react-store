import ProductList from "../../components/products/ProductList";
import PaginatedItems from "../../components/ui/Pagination";
import DUMMY_DATA from "../../pages/productpage/database";


function ProductPage(props) {
  
  return (
    <ProductList products={DUMMY_DATA} />
    // <PaginatedItems />
  );
}

export default ProductPage;