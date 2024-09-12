import React from "react";
import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
