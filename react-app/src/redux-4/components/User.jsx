import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const User = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <>
      <ul role="list" className="divide-y divide-gray-100 py-16">
        {users.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5 px-10">
            <div className="flex min-w-0 gap-x-4">
              <img
                alt=""
                src={person.avatar}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              <Link to={`/edit/${person.id}`} className="bg-blue-200 p-1 text-blue-900 font-bold px-5 rounded-md">Edit</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default User;
