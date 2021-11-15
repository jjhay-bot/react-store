import DUMMY_DATA from './database'
import ProductAll from "./ProductAll";

function SortBy(props) {
  const sortName = DUMMY_DATA.sort((a, b) => a.name > b.name? 1 : -1)

  const sortBarcode = DUMMY_DATA.sort((a, b) =>{return a.barcode > b.barcode? 1 : -1})
  console.log(sortBarcode);
  const sortPrice = DUMMY_DATA.sort((a, b) => a.price - b.price)

  const sortBrand = DUMMY_DATA.sort((a, b) => a.brand > b.brand? 1 : -1)

  const sortCategory = DUMMY_DATA.sort((a, b) => a.category > b.category? 1 : -1)

  return (
    < >
      {/* {sortBrand} */}
      <ProductAll products={DUMMY_DATA} >Price2</ProductAll>

    </>
  );
}

export default SortBy;


