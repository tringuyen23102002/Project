  import React from "react";
  import { Route, Routes } from "react-router-dom";
  import Home from "./pages/Home/Home";
  import Contact from "./pages/contact/Contact";
  import Shop from "./pages/shop/Shop";
  import About from "./pages/about/About";
  import Cart from "./pages/Cart/Cart";
  import Checkout from "./pages/checkout/Checkout";
  import Product_detail from "./pages/product_detail/Product_detail";
import { AppProvider } from "./Components/Appcontext";
  export default function App() {
    return (
      <AppProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shop/:id" element={<Product_detail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/product_detail" element={<Product_detail />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </AppProvider>
    );
  }
    