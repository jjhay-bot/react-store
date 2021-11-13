import classes from './Navbar.module.css';
import Link from 'next/link'

function Navbar(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Store</div>
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
  );
}

export default Navbar;
