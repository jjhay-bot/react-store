import { useState } from 'react';
import classes from './CartItem.module.css';

import axios from 'axios';


const CartItem = (props) => {
  const [amount, setamount] = useState(props.amount)

  const addItem = () => {
    setamount(amount + 1)
  };

  const removeItem = () => {
    if (amount <= 1) {
      setamount(0)
      axios.delete('https://store-1064b-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
      .then(() => console.log('Delete successful'));
    } else {
      setamount(amount - 1)
    }
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h5 className={classes.item}>{props.name}</h5>
        <div className={classes.summary}>
          <span className={classes.price}>₱{props.price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>

      <div className={classes.actions}>
        <button className={classes.price} onClick={removeItem}>−</button>
        <button className={classes.price} onClick={addItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;