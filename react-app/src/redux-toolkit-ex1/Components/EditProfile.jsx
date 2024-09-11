import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Password from "./Password";
import { editUserData } from "../Redux/user/userSlice";
import { validateForm } from "../utils/validation";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const onSubmit = (data) => {
     dispatch(editUserData(data));
    navigate(`/users`);
  }
  // const handleSubmit = (e) => {
  
  // }
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")).find(
      (user) => user.id === Number(id)
    );
    if (user) {
      reset(user);
    } else {
      navigate("/not-found");
    }
  }, [id]);
  return (
    <div>
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
        <div className="text-center mb-16">
          <h4 className="text-gray-800 text-base font-semibold mt-6">
            Edit into your account
          </h4>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label className="text-gray-800 text-sm mb-2 block"> Name</label>
              <input
                name="name"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter name"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                  minLength: { value: 3, message: "Min lenght 3" },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input
                disabled={true}
                name="email"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
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
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <Password
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter password"
                handleInput={register("password", {
                  required: { value: true, message: "passworde is required" },
                  minLength: { value: 6, message: "Min lenght 6" },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Password must be at least 8 characters long, and include an uppercase letter, a lowercase letter, and a number",
                  },
                })}
              />
              {/* <input name="password" type="password" /> */}
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Avatar</label>
              <input
                name="avatar"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter confirm password"
                {...register("avatar", {
                  required: { value: true, message: "Avatar is required" },
                  minLength: { value: 3, message: "Min lenght 3" },
                })}
              />
              {errors.avatar && (
                <p className="text-red-500 text-sm">{errors.avatar.message}</p>
              )}
            </div>
          </div>
          <div className="!mt-12">
            <button
              type="submit"
              className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
