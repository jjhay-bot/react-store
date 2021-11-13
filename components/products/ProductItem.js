import { useRouter } from "next/router";
import Card from '../ui/Card';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';


function ProductItem(props) {
  const route = useRouter();                  //use to update new route (push or replace -> back & history))

  function showDetailsHandler() {
    route.push('/' + props.id)                //router.push(url, as, options)   ,props.id as identifier
  }

  const { name, barcode, price, brand, category  } = props

  return (
    <TableRow >
      <TableCell>{name}</TableCell>
      <TableCell>{barcode}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>{brand}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell className='centered'>
        <Button variant="contained" color="success">
          Add
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ProductItem;

import * as React from 'react';
import Stack from '@mui/material/Stack';
