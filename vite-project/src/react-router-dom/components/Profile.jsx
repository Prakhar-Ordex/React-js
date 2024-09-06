import React, { useContext } from "react";
import { UserData } from "../Context/UserContext";
import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
  const {  setIsLoggedIn, logginUser,deleteAccount } = useContext(UserData);
  const navigate = useNavigate();
  const deleteProfile = () => {
    let confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      deleteAccount(logginUser.id)
      localStorage.removeItem("loginUser");
      navigate("/register");
      setIsLoggedIn(false);
    }
  };
  return (
    <div>
      <div className="bg-gray-300">
        <h1 className="text-center font-bold text-2xl">User Details</h1>
        <p className="text-center text-gray-600">
          You can see your personal details here.
        </p>
      </div>

      <div className="w-full flex ">
        <span className="m-auto  ">
          <img
            src={logginUser?.avatar}
            alt=""
            className="h-40 w-40 object-cover rounded-full "
          />
        </span>
      </div>
      <div>
        <h1 className="text-center font-bold text-2xl">
          Name : {logginUser?.name}
        </h1>
        <h1 className="text-center font-bold text-xl">
          Email : {logginUser?.email}
        </h1>
        <h1 className="text-center font-bold text-xl">
          Role : {logginUser?.role}
        </h1>
      </div>
      <div className="flex justify-center bg-red-300 p-10 items-center">
        <button
          className="bg-red-500 rounded-md p-2 text-white"
          onClick={deleteProfile}
        >
          Delete My Account
        </button>
      </div>
      <div className="flex justify-center bg-blue-300 p-10 items-center">
        <Link
          className="bg-blue-500 rounded-md p-2 text-white"
          to={`/edit/${logginUser?.id}`}
        >
          Edit My Account
        </Link>
      </div>
    </div>
  );
};

export default Profile;
