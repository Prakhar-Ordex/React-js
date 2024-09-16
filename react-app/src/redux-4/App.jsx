import Products from "./components/Products";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./components/Login";
import Register from "./components/Register";


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/users" element={<User />} />
          <Route path="/edit/:id" element={<Edit />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
