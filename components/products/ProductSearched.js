import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import classes from "./ProductSearched.module.css";
import ProductAll from "./ProductAll";

export default function SearchBar(props) {
    const [name, setName] = useState('');
    const [foundName, setFoundName] = useState(props.products);

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
      </div>
      
      <ProductAll products={foundName}/>
    </>
  );
}