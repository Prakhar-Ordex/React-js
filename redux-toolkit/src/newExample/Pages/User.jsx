import React, { useContext } from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {user?.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
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
                {person.role}
              </p>
              <div>
                <Link
                  to={`/edit/${person?.id}`}
                  className="bg-blue-500 rounded-md p-0.5 m-1 text-white bold text-xl"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteAccount(person.id)}
                  className="bg-red-500 rounded-md p-0.5 m-1 text-white bold text-xl"
                >
                  delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
