import classes from './Navbar.module.css';
import Link from 'next/link'

function Navbar(props) {
  return (
    <div className={classes.container}>
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>React Store</Link>
      <nav>
        <ul>
          <li style={{width:'auto'}}>
            <Link href='/products'>Products</Link>
          </li>
          <li style={{width:'8rem'}}>
            <button onClick={props.onShow} className={classes.button} >
              <span>CART </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Navbar;
