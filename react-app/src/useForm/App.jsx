import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const toggle = true;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6 bg-gray-400 mt-5 rounded-md">
        <div className="text-center mb-16">
          <h4 className="text-gray-800  font-semibold mt-6 bg-green-200 rounded-md p-2 text-2xl">
            Sign up into your account
          </h4>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block"> Name</label>
              <input
                name="name"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all"
                placeholder="Enter name"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                  minLength: { value: 3, message: "Min lenght 3" },
                })}
              />
              {errors.name && (
                <p className="text-red-600 ">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input
                name="email"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all"
                placeholder="Enter email"
                {...register("email", {
                  required: { value: true, message: "Emial is required" },
                  minLength: { value: 3, message: "Min lenght 3" },
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Avatar</label>
              <input
                name="avatar"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all"
                placeholder="Enter mobile number"
                {...register("avatar", {
                  required: { value: true, message: "Avatar is required" },
                  minLength: { value: 3, message: "Min lenght 3" },
                })}
              />
              {errors.avatar && (
                <p className="text-red-500 text-sm">{errors.avatar.message}</p>
              )}
            </div>

            <div className="relative">
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="bg-gray-100  text-gray-800 text-sm px-4 py-3.5 rounded-md  outline-blue-500 transition-all relative w-full"
                placeholder="Enter password"
                {...register("password", {
                  required: { value: true, message: "passworde is required" },
                  minLength: { value: 6, message: "Min lenght 6" },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Password must be at least 8 characters long, and include an uppercase letter, a lowercase letter, and a number",
                  },
                })}
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? `📖` : `📕`}
              </span>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="!mt-12">
            <button
              type="submit"
              className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
