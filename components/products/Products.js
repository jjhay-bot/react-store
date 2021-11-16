import ProductSearched from "./ProductSearched";
import ProductAll from "./ProductAll";

function Products(props) {
  return (
    // <ProductAll products={DUMMY_DATA}/>
    <ProductSearched products={props.products} />
  );
}

export default Products;
