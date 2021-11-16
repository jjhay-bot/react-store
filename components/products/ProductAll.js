import { useState, useCallback, useMemo } from 'react';
import CartContext from "../store/cart-context";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import AddItem from '../carts/AddItem';
import classes from "./ProductAll.module.css";


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'barcode', label: 'barcode', minWidth: 100 },
  { id: 'price', label: 'price', minWidth: 100, format: (value) => value.toFixed(2) },
  { id: 'brand', label: 'brand', minWidth: 100 },
  { id: 'category', label: 'category', minWidth: 100 },
];

function ProductAll(props) {
  const [rows, setrows] = useState(props.products)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const cartRecord = []



  // .tabledata {
  //   display: flex;
  //   justify-content: center;
  //   width: 100vw;
  //   position: fixed;
  //   z-index: 5;
  //   background-color: transparent;
  //   padding: 6rem 0  1rem 0;
  // }

  return (
    <>
      <Container sx={{paddingTop: '11rem', paddingBottom: '3rem', height: '100vh', width: '100vw' }}>
        <Paper sx={{ width: '95%', overflow: 'hidden', marginLeft: '2.5%' }}>
          <TableContainer sx={{ maxHeight: `65vh` }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell scope="col" sx={{ fontWeight: 'bold' }}>
                    <button type='submit' onClick={props.sortbyname} className={classes.button}>Name</button>
                  </TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 'bold', width: '150px' }}>
                    <button type='submit' onClick={props.sortbyname} className={classes.button}>Barcode</button>
                  </TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 'bold', width: '125px' }}>
                    <button type='submit' onClick={props.sortbyprice} className={classes.button}>Price</button>
                  </TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 'bold', width: '125px' }}>
                    <button type='submit' onClick={props.sortbyname} className={classes.button}>Brand</button>
                  </TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 'bold', width: '150px' }}>
                    <button type='submit' onClick={props.sortbyname} className={classes.button}>Category</button>
                  </TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 'bold', width: '110px' }} >Add to Cart</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          
                          const value = row[column.id];
                          return (
                            <>
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                            </>
                          );
                        })}
                        <TableCell>
                          <AddItem 
                            barcode={row.barcode}
                            name={row.name}
                            price={row.price}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </>
  );
}

export default ProductAll;