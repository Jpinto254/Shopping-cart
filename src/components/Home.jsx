import React from "react";
import { CartState } from "../context/Context";

import SingleProducts from "./SingleProducts";
import "./styles.css";
export default function Home() {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="Home">
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProducts prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
}
