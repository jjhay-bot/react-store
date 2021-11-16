import TableCell from '@mui/material/TableCell';
import AddItem from '../carts/AddItem';

function ProductItem(props) {

  return (
    <>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.barcode}</TableCell>
      <TableCell>{props.price}</TableCell>
      <TableCell>{props.brand}</TableCell>
      <TableCell>{props.category}</TableCell>
      <TableCell>
        <AddItem 
          onAddNewItem={addToCartHandler}
        />
      </TableCell>
    </>
  );
}

export default ProductItem;
