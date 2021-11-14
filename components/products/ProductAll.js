import { useState } from 'react';
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


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'barcode', label: 'barcode', minWidth: 100 },
  { id: 'price', label: 'price', minWidth: 100, format: (value) => value.toFixed(2) },
  { id: 'brand', label: 'brand', minWidth: 100 },
  { id: 'category', label: 'category', minWidth: 100 },
];

// let rows = props.products

function ProductAll(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setrows] = useState(props.products)


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClear =() => {
    setRowsPerPage(10);
    setPage(0);
  };

  const sortbyprice = () => {
    setrows(props.products.sort((a, b) => a.price - b.price))
    console.log(rows);
  }

  props.handleClear;

  return (
    <Container sx={{paddingTop: '11rem', paddingBottom: '3rem',  }}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: `100%` }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Barcode</TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>
                  <button type='submit' onClick={sortbyprice}>Price</button>
                </TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Brand</TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Category</TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Add to Cart</TableCell>
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
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell >
                        <Button variant="contained" color="success" onClick={e => console.log('ADDED TO CART')}>Add</Button>
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

export default ProductAll;