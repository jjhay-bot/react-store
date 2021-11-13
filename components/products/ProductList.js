import ProductItem from './ProductItem';
import classes from './ProductList.module.css';
import Card from '../ui/Card';
import { Table, Container } from 'react-bootstrap';

function ProductList(props) {
  return (
    <>
      <Container>
        <ul className={classes.list}>
          <li className={classes.item}>
            <Card>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Barcode</th>
                    <th scope="col">Price</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Category</th>
                    <th scope="col" className='align-middle'>Add to Cart</th>
                  </tr>
                </thead>
                <tbody>
                {props.products.map((product) => (
                  <ProductItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    barcode={product.barcode}
                    price={product.price}
                    brand={product.brand}
                    category={product.category}
                  />        
                ))}
                </tbody>
              </Table>
            </Card>
          </li>
      </ul>
      </Container>
    </>

  );
}

export default ProductList;
