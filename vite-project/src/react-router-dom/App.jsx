import React from "react";
import Heder from "./components/Heder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Github from "./components/Github";
import User from "./components/User";
import Longin from "./components/Login";
import ProtectRout from "./components/ProtectedRoute";
import Register from "./components/Register";
import UserContext from "./Context/UserContext";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <UserContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<ProtectRout Component={About} />} />
              <Route
                path="contact"
                element={<ProtectRout Component={Contact} />}
              />
              <Route path="user/:userId" element={<User />} />
              <Route
                path="github"
                element={<ProtectRout Component={Github} />}
              />
              <Route
                path="profile"
                element={<Profile/>}
              />
              <Route path="login" element={<Longin />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext>
    </>
  );
};

export default App;
