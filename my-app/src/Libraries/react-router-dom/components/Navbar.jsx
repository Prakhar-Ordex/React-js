import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    console.log(location)
  return (
    <>
      <nav>
        <div>
          <h2>LOGO</h2>
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "red",
                    background:isActive ? "blue" : "",
                  textDecoration: "none",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "red",
                    background:isActive ? "red" : "",
                  textDecoration: "none",
                };
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              state={{name:"Prakhar Tripathi"}} 
              to="/service"
              style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "red",
                    background:isActive ? "green" : "",
                  textDecoration: "none",
                };
              }}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "red",
                    background:isActive ? "yellow" : "",
                  textDecoration: "none",
                };
              }}
            >
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/geturl"
              style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "red",
                    background:isActive ? "pink" : "",
                  textDecoration: "none",
                };
              }}
            >
              GetUrl
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
