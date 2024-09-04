import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import HoverUser from "./HoverUser";
import { UserData } from "../Context/UserContext";

const Heder = () => {
  const {user,setUser} = useContext(UserData)
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const userFetchData = async () => {
    const userToken = JSON.parse(localStorage.getItem("user-token"));
    if (!userToken) {
      setIsLoggedIn(false);
      return;
    }
    try {
      const user = await fetch(
        " https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (!user.ok) {
        console.log("User not found");
        localStorage.removeItem("user-token");
        setIsLoggedIn(false);
        return;
      }
      const data = await user.json();
      setUser(data)
      setIsLoggedIn(true);
    } catch (error) {
      console.log(`Something went wrong : ${error}`);
      setIsLoggedIn(false);
    }
  };
  useEffect(() => {
    userFetchData();
  }, [navigate]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("user-token");
    setUser({});
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <div>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-12"
                alt="Logo"
              />
            </Link>
            <div className="flex items-center lg:order-2">
              {isLoggedIn  ? (
                <>
                  <span
                    className=" bg-blue-300 rounded-full text-2xl h-12 w-12"
                    onMouseEnter={handleMouseEnter}
                  >
                    <img
                      src={user?.avatar}
                      alt="img"
                      className="h-full w-full object-contain rounded-full"
                    />
                  </span>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log in
                </Link>
              )}
              {isHovered && (
                <HoverUser
                  setIsHovered={setIsHovered}
                  userData={user}
                  setUserData={setUser}
                  handleLogout={handleLogout}
                />
              )}
              {/* <HoverUser/> */}
            </div>
            <div
              className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium md:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Github
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                {!isLoggedIn  && (
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Heder;
