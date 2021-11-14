import classes from './Navbar.module.css';
import Link from 'next/link'
import { Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function Navbar(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Store</div>
      <nav>
        <ul>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <li>
            <Link href='/'>Products</Link>
          </li>
          <li>
            <Link href='/cartpage'>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
