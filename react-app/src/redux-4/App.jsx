import Products from "./components/Products";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectRoute from "./auth/ProtectRoute";
import Order from "./components/Order";


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectRoute ><Products/></ProtectRoute>} />
          <Route path="/cart" element={<ProtectRoute ><Cart /></ProtectRoute>} />
          <Route path="/order" element={<ProtectRoute ><Order /></ProtectRoute>} />
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
