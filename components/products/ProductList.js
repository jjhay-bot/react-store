import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DUMMY_DATA from "../../pages/productpage/database";
import Button from '@mui/material/Button';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'barcode', label: 'barcode', minWidth: 100 },
  { id: 'price', label: 'price', minWidth: 100, format: (value) => value.toFixed(2) },
  { id: 'brand', label: 'brand', minWidth: 100 },
  { id: 'category', label: 'category', minWidth: 100 },
];

const rows = DUMMY_DATA

export default function StickyHeadTable() {
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
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: `calc(100vh - 10rem)` }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Barcode</TableCell>
              <TableCell scope="col" sx={{ fontWeight: 'bold' }}>Price</TableCell>
              <TableCell scope="col" sx={{ fontWeight: 'bold'}}>Brand</TableCell>
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
                    <Button variant="contained" color="success" onClick={e => console.log('ADDED TO CART')}>Add</Button>
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
  );
}
