import classes from './Navbar.module.css';
import Link from 'next/link'
import ProductSearched from '../products/ProductSearched';
import DUMMY_DATA from "../products/database";
import ProductList from '../products/ProductAll'
import { Container } from '@mui/material';
import CartIcon from './CartIcon';


function Navbar(props) {
  return (
    <div className={classes.container}>
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>React Store</Link>
      <nav>
        <ul>
          <li style={{width:'auto'}}>
            <Link href='/'>Products</Link>
          </li>
          {/* <li style={{width:'30px'}}> 
            <Link href='/cartpage'>Cart</Link>
          </li> */}
          <li >
            <button onClick={props.onShow} className={classes.button}>
              <span>CART </span>
              <span className={classes.badge}>{5}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Navbar;
