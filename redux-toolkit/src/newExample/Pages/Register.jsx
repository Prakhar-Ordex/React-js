import React, { useState } from "react";
import Password from "../Components/Password";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchUsers } from "../Redux/user/userSlice";
import { validateForm } from "../utils/validation";

const Register = () => {
  const dispatch = useDispatch();
  const { isLoading, users } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm(newUser);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Check if the user already exists
    if (users.some((user) => user.email === newUser.email)) {
      alert("Email already exists");
      navigate("/login");
      return;
    }
    
    try {
      // Await the dispatch to ensure it's finished before navigating
      await dispatch(fetchUsers(newUser));
      
      // Navigate only after the user has been successfully registered
      navigate("/users");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  

  return (
    <div>
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
        <div className="text-center mb-16">
          <h4 className="text-gray-800 text-base font-semibold mt-6">
            Sign up into your account
          </h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block"> Name</label>
              <input
                name="name"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter name"
                value={newUser.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input
                name="email"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter email"
                value={newUser.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <Password
                value={newUser.password}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter password"
                onChange={handleChange}
              />
              {/* <input name="password" type="password" /> */}
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Avatar</label>
              <input
                name="avatar"
                type="text"
                value={newUser.avatar}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter confirm password"
                onChange={handleChange}
              />
              {errors.avatar && (
                <p className="text-red-500 text-sm">{errors.avatar}</p>
              )}
            </div>
          </div>
          <p className="text-sm font-light text-gray-500 ">
            Don’t have an account yet?{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:underline "
            >
              Sign in
            </Link>
          </p>

          <div className="!mt-12">
            <button
              disabled={isLoading}
              type="submit"
              className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              {isLoading ? "Loading..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
