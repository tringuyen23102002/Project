import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "../product/Product";
import Cart from "../Cart/Cart";

export default function Section6({ productItems, cartItems,}) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Shop productItems={productItems} />}
        />
        <Route
          path="/cart"
          element={
            <React.Fragment>
              <Cart cartItems1={cartItems}  />
              
            </React.Fragment>
          }
        />
      </Routes>
    </div>
  );
}
