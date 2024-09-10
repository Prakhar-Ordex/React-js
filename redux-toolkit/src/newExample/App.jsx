import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import ProtectedRoute from "./Auth/ProtectedRoute";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import User from "./Pages/User";
import Github from "./Pages/Github";
import Profile from "./Pages/Profile";
import EditProfile from "./Components/EditProfile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout   />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<ProtectedRoute Component={About} />} />
            <Route
              path="contact"
              element={<ProtectedRoute Component={Contact} />}
            />
            <Route path="user/:userId" element={<User />} />
            <Route path="github" element={<ProtectedRoute Component={Github} />} />
            <Route
              path="profile"
              element={<ProtectedRoute Component={Profile} />}
            />
            <Route
              path="edit/:id"
              element={<EditProfile />}
            />
            <Route path="users" element={<User/>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
