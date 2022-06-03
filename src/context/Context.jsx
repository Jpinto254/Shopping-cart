import { cartReducer } from "./Reducers";
import React, { createContext, useContext, useReducer } from "react";
import data from "./Products";
import faker from "faker";

const Cart = createContext();

export default function Context({ children }) {
  const products = [...data.products];
  console.log(products);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  console.log(state);
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export const CartState = () => {
  return useContext(Cart);
};
