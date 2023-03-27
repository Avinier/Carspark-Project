import { useReducer } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const cartContext = {
    items: [],
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
