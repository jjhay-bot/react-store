import Cart from "../../components/carts/Cart";
import { useState } from "react";
import Products from "../../components/products/Products";
import Navbar from "../../components/layout/Navbar";
import CartProvider from '../../components/store/CartProvider';
import DUMMY_DATA from "../../components/products/database";


function ProductPage(props) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Navbar onShow={showCartHandler} />
      <Products products={DUMMY_DATA}/>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
    </CartProvider>
  );
}

export default ProductPage;