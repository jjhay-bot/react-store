import Cart from "../../components/carts/Cart";
import { useState } from "react";
import Products from "../../components/products/Products";
import Navbar from "../../components/layout/Navbar";
import CartProvider from '../../components/store/CartProvider';

function ProductPage(props) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  console.log(cartIsShown)


  return (
    <CartProvider>
      <Navbar onShow={showCartHandler} />
      <Products/>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
    </CartProvider>
  );
}

export default ProductPage;