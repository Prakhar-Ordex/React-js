import React, { useState } from "react";
import Password from "../Components/Password";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/user/userSlice";

const Login = () => {
  const { users } = useSelector(state => state.users)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email) {
      setErrors({ ...errors, email: "Email is required" });
    } else if (!/^\S+@\S+\.\S+$/.test(userData.email)) {
      setErrors({ ...errors, email: "Email address is invalid" });
    } else if (!userData.password) {
      setErrors({ ...errors, password: "Password is required" });
    } else {
      setErrors({ email: "", password: "" });
      userLogin();
    }
  };
  const userLogin = () => {
    if (users) {
      let findUser = users.find((item) => item.email === userData.email);
      if (findUser) {
        if (
          findUser.email === userData.email &&
          findUser.password === userData.password
        ) {
          dispatch(loginUser(findUser))
          navigate("/profile");
        } else {
          alert("Email or Password incorrect");
        }
      } else {
        alert("this email id not register");
      }
    } else {
      alert("you are not  register ");
      navigate("/register");
    }
  };
  return (
    <div>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={userData.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    placeholder="name@company.com"
                    onChange={handleInputChange}
                  />
                  <span className="text-red-500 bold">
                    {errors.email && errors.email}
                  </span>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <Password
                    onChange={handleInputChange}
                    value={userData.password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  <span className="text-red-500 bold">
                    {errors.password && errors.password}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  {/* <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline "
                >
                  Forgot password?
                </a> */}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-400"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
