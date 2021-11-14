import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function SearchBar(props) {
    // const { products } = props.products
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
        console.log(results);
    };




  return (
    <>
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={name}
                onChange={filter}    
            />
            <Button variant="outline-success">Search</Button>
        </Form>

        <div className="user-list">
            {foundUsers && foundUsers.length > 0 ? (
            foundUsers.map((user) => (
                <li key={user.id} className="user">
                <span className="user-name">{user.name}</span>
                </li>
            ))
            ) : (
            <h1>No results found!</h1>
            )}
        </div>

    </>
  );
}

        <Stack spacing={2} sx={{ width: 300 }}>


          <Autocomplete
            id="free-solo-demo"
            value={name}
            freeSolo
            options={props.products.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} label="Search" />}
            onChange={filter}
          />
        
          <div className="user-list">
            {foundName && foundName.length > 0 ? (
              foundName.map((user) => (
                <li key={user.id} className="user">
                  <span className="user-name">{user.name}</span>
                </li>
              ))
            ) : (
              <h1>No results found!</h1>
            )}
          </div>
        </Stack>aimport * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function SearchBar(props) {
    // const { products } = props.products
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
        console.log(results);
    };




  return (
    <>
        <Stack spacing={2} sx={{ width: 300 }}>


          <Autocomplete
            id="free-solo-demo"
            value={name}
            freeSolo
            options={props.products.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} label="Search" />}
            onChange={filter}
          />
        
          <div className="user-list">
            {foundName && foundName.length > 0 ? (
              foundName.map((user) => (
                <li key={user.id} className="user">
                  <span className="user-name">{user.name}</span>
                </li>
              ))
            ) : (
              <h1>No results found!</h1>
            )}
          </div>
        </Stack>

    </>
  );
}

        <Stack spacing={2} sx={{ width: 300 }}>


          <Autocomplete
            id="free-solo-demo"
            value={name}
            freeSolo
            options={props.products.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} label="Search" />}
            onChange={filter}
          />
        
          <div className="user-list">
            {foundName && foundName.length > 0 ? (
              foundName.map((user) => (
                <li key={user.id} className="user">
                  <span className="user-name">{user.name}</span>
                </li>
              ))
            ) : (
              <h1>No results found!</h1>
            )}
          </div>
        </Stack>