import ProductSearched from "./ProductSearched";
import ProductAll from "./ProductAll";
// import classes from './Card.module.css';
import DUMMY_DATA from './database'

function Products(props) {
  return (
    // <ProductAll products={DUMMY_DATA}/>
    <ProductSearched products={DUMMY_DATA} />
  );
}

export default Products;
