import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserData } from "../Redux/user/userSlice";

const User = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.users);
  

  return (
    <div className="min-h-screen">
      <ul role="list" className="divide-y divide-gray-100">
        {users?.map((person) => (
          <li key={person?.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                alt=""
                src={person?.avatar}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person?.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person?.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900 p-2">
                {person?.role}
              </p>
              <div>
                <Link
                  to={`/edit/${person?.id}`}
                  className="bg-blue-500 rounded-md p-0.5 m-1 text-white bold text-xl"
                >
                  Edit
                </Link>
                <button
                  onClick={() => dispatch(deleteUserData(person?.id))}
                  className="bg-red-500 rounded-md p-0.5 m-1 text-white bold text-xl"
                >
                  delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {!users && (
        <div className="h-screen">
          <h1 className="m-auto  text-center p-2 text-2xl font-bold" >No Users Available</h1>
        </div>
      )}
    </div>
  );
};

export default User;
