import ProductList from "../../components/products/ProductList";
import PaginatedItems from "../../components/ui/Pagination";
import DUMMY_DATA from "../../pages/productpage/database";
import SearchBar from '../../components/ui/SearchBar'

function ProductPage(props) {

  return (
    <ProductList products={DUMMY_DATA} />
  );
}

export default ProductPage;