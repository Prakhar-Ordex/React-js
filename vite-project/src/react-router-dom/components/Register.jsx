import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../Context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserData);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [loading, setLoading] = useState(false);  
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    registerUser(newUser);
  };

  const registerUser = async (newUser) => {
    try {
      setLoading(true);
      const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const user = await response.json();
      console.log(user)
      setUser(user)
      navigate("/profile", { state: { user } });
    } catch (error) {
      console.error("Failed to register user:", error.message);
      alert("Something went wrong")
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!newUser.name.trim()) errors.name = "Name is required";
    if (!newUser.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(newUser.email))
      errors.email = "Invalid email address";
    if (!newUser.password.trim()) errors.password = "Password is required";
    if (!newUser.avatar.trim()) errors.avatar = "Avatar URL is required";
    return errors;
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
              <input
                name="password"
                type="password"
                value={newUser.password}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter password"
                onChange={handleChange}
              />
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
              disabled={loading}
              type="submit"
              className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              {loading ? "Loading..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
