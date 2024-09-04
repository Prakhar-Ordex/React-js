import React, { useContext } from "react";
import { UserData } from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserData);
  return (
    <div>
      <h1 className="text-center font-bold text-2xl bg-slate-400">User Profile</h1>
      <div className="w-full flex ">
        <span className="m-auto  ">
          <img
            src={user?.avatar}
            alt=""
            className="h-40 w-40 object-cover rounded-full "
          />
        </span>
      </div>
      <div>
        <h1 className="text-center font-bold text-2xl">Name : {user?.name}</h1>
        <h1 className="text-center font-bold text-xl">Email : {user?.email}</h1>
        <h1 className="text-center font-bold text-xl">Role : {user?.role}</h1>
      </div>
    </div>
  );
};

export default Profile;
