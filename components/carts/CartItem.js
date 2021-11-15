import classes from './CartItem.module.css';

const CartItem = (props) => {

  return (
    <li className={classes['cart-item']}>
      <div>
        <h4>{props.name}</h4>
        {/* <div className={classes.summary}>
          <span className={classes.amount}>{props.price}</span>
        </div> */}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;