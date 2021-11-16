import Modal from '../ui/Modal';
import { useEffect, useState } from 'react';
import { ClassNames } from '@emotion/react';
import classes from './Cart.module.css'
import axios from 'axios';
import CartContext from '../store/cart-context';
import CartItem from "./CartItem";

function Cart(props) {
  const [cartItem, setcartItem] = useState([])

  useEffect(() => {
    axios.get('https://store-1064b-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
      .then(res => res.data).then(response => {
        const datas = []

        for (const key in response) {
          const datax = {
            id: key, 
            ...response[key]
          }
          datas.push(datax)
        }
        setcartItem(datas)
    })
  }, [])


  return (
    <>
      <Modal onClose={props.onCloseCart}>
        {/* {cartItems} */}
        {cartItem.flatMap((item) => (
          <ul>
            <CartItem
              name={item['name']}
              price={item['price']}
            />
          </ul>
        ))}
        <button onClick={props.onCloseCart} className={classes.button_alt}>
          Close
        </button>
      </Modal>
      
    </>
  );
}

export default Cart;
