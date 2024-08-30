import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import NotFound from "./components/NotFound";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import GetUrlParams from "./components/GetUrlParams";

const App = () => {

  return (
    <div>
      <h4>React Router Dom </h4>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service"  element={<Service />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/geturl" element={<GetUrlParams />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
