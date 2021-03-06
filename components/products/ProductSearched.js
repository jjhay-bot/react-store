import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useCallback, useRef, useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import classes from "./ProductSearched.module.css";
import ProductAll from "./ProductAll";

import CartContext from "../store/cart-context";
import Paper from '@mui/material/Paper';
import Table2 from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button2 from '@mui/material/Button';
import { Container2 } from '@mui/material';
// import classes from "./ProductAll.module.css";
import AddItem from '../carts/AddItem';

function SearchBar(props) {
    const [name, setName] = useState('');
    const [foundName, setFoundName] = useState('');

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
 
    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
          const results = props.products.filter((product) => {
            return product.name.toLowerCase().startsWith(keyword.toLowerCase());
            // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundName(results);
        
        } else {
        setFoundName(props.products);   
        // If the text field is empty, show all users
        }
        setName(keyword);
    };

    // if (foundName === '') {
    //   setFoundName(results);
    // }
    
   
    const sortbyname = useCallback (() => {
      setFoundName(foundName.sort((a, b) => a.name > b.name? 1 : -1))
      if (page === 0) {
        setPage(1);
      } else {
        setPage(0);
      }
      console.log('sortbyname');
    },[foundName, page])
  
    const sortbybarcode = useCallback (() => {
      setFoundName(foundName.sort((a, b) =>{return a.barcode > b.barcode? 1 : -1}))
      setPage(0);
      if (page === 0) {
        setPage(1);
      } else {
        setPage(0);
      }
      console.log('sortbarcode');
    },[foundName, page])
  
    const sortbyprice = useCallback(() => {
      setFoundName(foundName.sort((a, b) => a.price - b.price))
      console.log('sortbyprice');
      if (page === 0) {
        setPage(1);
      } else {
        setPage(0);
      }
    },[foundName, page])

    const sortbybrand = useCallback(() => {
      setFoundName(foundName.sort((a, b) => a.brand > b.brand? 1 : -1))
      setPage(0);
      console.log('sortbybrand');
      if (page === 0) {
        setPage(1);
      } else {
        setPage(0);
      }
    },[foundName, page])
  
    const sortbycategory = useCallback(() => {
      setFoundName(foundName.sort((a, b) => a.category > b.category? 1 : -1))
      setPage(0);
      console.log('sortbycategory');
      if (page === 0) {
        setPage(1);
      } else {
        setPage(0);
      }
    },[foundName, page])

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    
    if (foundName) {
      const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'barcode', label: 'barcode', minWidth: 100 },
        { id: 'price', label: 'price', minWidth: 100, format: (value) => value.toFixed(2) },
        { id: 'brand', label: 'brand', minWidth: 100 },
        { id: 'category', label: 'category', minWidth: 100 },
      ];

      const datatable = (
        <Container className={classes.tabledata} style={{padding:'1rem', paddingTop: '7.5rem'}}>
          <Paper sx={{ width: '100%', overflow: 'hidden', maxWidth: "1100px", position: 'absolute' }}>
            <TableContainer sx={{ maxHeight: `65vh` }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead >
                  <TableRow>
                    <TableCell scope="col" sx={{ fontWeight: 'bold', padding: '1rem'}}>
                      <button type='submit' onClick={sortbyname} className={classes.button1} sx={{width:"100%", marginLeft: '-12.5px'}}>Name  <img width='16px' height='20px' src="https://img.icons8.com/material-outlined/24/000000/sort.png"/></button>
                    </TableCell>
                    <TableCell scope="col" sx={{ fontWeight: 'bold', width: '150px' }}>
                      <button type='submit' onClick={sortbybarcode} className={classes.button}>Barcode  <img width='16px' height='20px' src="https://img.icons8.com/material-outlined/24/000000/sort.png"/></button>
                    </TableCell>
                    <TableCell scope="col" sx={{ fontWeight: 'bold', width: '125px' }}>
                      <button type='submit' onClick={sortbyprice} className={classes.button}>Price  <img width='16px' height='20px' src="https://img.icons8.com/material-outlined/24/000000/sort.png"/></button>
                    </TableCell>
                    <TableCell scope="col" sx={{ fontWeight: 'bold', width: '125px' }}>
                      <button type='submit' onClick={sortbybrand} className={classes.button}>Brand  <img width='16px' height='20px' src="https://img.icons8.com/material-outlined/24/000000/sort.png"/></button>
                    </TableCell>
                    <TableCell scope="col" sx={{ fontWeight: 'bold', width: '150px' }}>
                      <button type='submit' onClick={sortbycategory} className={classes.button}>Category  <img width='16px' height='20px' src="https://img.icons8.com/material-outlined/24/000000/sort.png"/></button>
                    </TableCell>
                    <TableCell scope="col" sx={{ fontWeight: 'bold', width: '110px' }} >
                      <button  className={classes.button} style={{ cursor: 'initial'}} >Add to Cart</button>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {foundName
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
              count={foundName.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Container>
      )
    }

  return (
    <>  
      <div className={classes.justify}>
        <Form className={classes.rounded_searchbar}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v2.png" alt='search' className={classes.icon}/>
          <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={name}
              onChange={filter}    
              className={classes.input}
          />
        </Form>
        {foundName && datatable} 
      </div>

      {!foundName && <ProductAll 
        foundName={foundName} 
        products={props.products} 
        onSearch={filter} 
        onChange={filter} 
        // sortbyname={sortbyname}
        // sortbarcode={sortbybarcode}
        // sortbyprice={sortbyprice}
        // sortbybrand={sortbybrand}
        // sortbycategory={sortbycategory}
      />}
    </>
  );
}

export default SearchBar;