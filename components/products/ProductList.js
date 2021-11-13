import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DUMMY_DATA from '../../pages/productpage/database';
import ProductItem from './ProductItem';
import { Container } from 'react-bootstrap';

const rows = DUMMY_DATA

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 'auto' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <tr >
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Barcode</TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Price</TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold'}}>Brand</TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Category</TableCell>
                <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Add to Cart</TableCell>
              </tr>
            </TableHead>
            <TableBody >
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
