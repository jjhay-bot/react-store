import classes from './Navbar.module.css';
import Link from 'next/link'
import ProductSearched from '../products/ProductSearched';
import DUMMY_DATA from "../products/database";
import ProductList from '../products/ProductAll'
import { Container } from '@mui/material';


function Navbar(props) {
  return (
    <div className={classes.container}>
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>React Store</Link>
      <nav>
        <ul>
          <li>
            <Link href='/'>Products</Link>
          </li>
          <li>
            <Link href='/cartpage'>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Navbar;
