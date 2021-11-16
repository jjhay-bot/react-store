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
import classes from "./ProductAll.module.css";
import AddItem from '../carts/AddItem';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'barcode', label: 'barcode', minWidth: 100 },
  { id: 'price', label: 'price', minWidth: 100, format: (value) => value.toFixed(2) },
  { id: 'brand', label: 'brand', minWidth: 100 },
  { id: 'category', label: 'category', minWidth: 100 },
];

function Searched(props) {
  const [rows, setrows] = useState(props.products)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  console.log(rows);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const sortbyname = useCallback (() => {
    setrows(props.products.sort((a, b) => a.name > b.name? 1 : -1))
    setPage(0);
  },[props.products])

  const sortbarcode = useCallback (() => {
    setrows(props.products.sort((a, b) =>{return a.barcode > b.barcode? 1 : -1}))
    setPage(0);
  },[props.products])

  const sortbyprice = useCallback(() => {
    setrows(props.products.sort((a, b) => a.price - b.price))
    setPage(0);
  },[props.products])

  const sortbybrand = useCallback(() => {
    setrows(props.products.sort((a, b) => a.brand > b.brand? 1 : -1))
    setPage(0);
  },[props.products])

  const sortbycategory = useCallback(() => {
    setrows(props.products.sort((a, b) => a.category > b.category? 1 : -1))
  },[props.products])

  const cartRecord = []

  return (
    <Container sx={{paddingTop: '11rem', paddingBottom: '1rem',  }}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: `65vh` }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>
                  <button type='submit' onClick={sortbyname} className={classes.button}>Name</button>
                </TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold', width: '150px' }}>
                  <button type='submit' onClick={sortbyname} className={classes.button}>Barcode</button>
                </TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold', width: '125px' }}>
                  <button type='submit' onClick={sortbyprice} className={classes.button}>Price</button>
                </TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold', width: '125px' }}>
                  <button type='submit' onClick={sortbyname} className={classes.button}>Brand</button>
                </TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold', width: '150px' }}>
                  <button type='submit' onClick={sortbyname} className={classes.button}>Category</button>
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
  );
}

export default Searched;