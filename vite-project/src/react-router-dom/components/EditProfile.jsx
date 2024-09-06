import React, { useContext, useEffect, useState } from "react";
import Password from "./Password";
import { useNavigate, useParams } from "react-router-dom";
import { validateForm } from "../utils/validation";
import { toast } from "react-toastify";
import { UserData } from "../Context/UserContext";

const EditProfile = () => {
  const { setLoginUser, logginUser, setUser } = useContext(UserData);
  const { id } = useParams();
  const navigate = useNavigate();
  let allUser = JSON.parse(localStorage.getItem("user"));

  const [editData, setEditData] = useState({
    name: "",
    avatar: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(editData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    const { name, avatar, password } = editData;
    const updatedUser = allUser.map((item) =>
      item.id === Number(id) ? { ...item, name, avatar, password } : item
    );
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    if (logginUser.id === Number(id)) {
      setLoginUser(editData);
      localStorage.setItem("loginUser", JSON.stringify(editData));
      navigate("/profile");
    } else {
      navigate("/users");
    }
    setErrors({});
    toast.success("data updated successfully");
  };

  useEffect(() => {
    const data = allUser.find((item) => item.id === Number(id));
    setEditData(data);
  }, [id]);
  return (
    <div>
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
        <div className="text-center mb-16">
          <h4 className="text-gray-800 text-base font-semibold mt-6">
            Edit into your account
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
                value={editData.name}
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
                disabled={true}
                name="email"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter email"
                value={editData.email}
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
                value={editData.password}
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
                value={editData.avatar}
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter confirm password"
                onChange={handleChange}
              />
              {errors.avatar && (
                <p className="text-red-500 text-sm">{errors.avatar}</p>
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
