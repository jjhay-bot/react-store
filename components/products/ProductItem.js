// import { useRouter } from "next/router";
// import Card from '../ui/Card';
// import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import AddItem from '../carts/AddItem';
// import Button from '@mui/material/Button';

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
