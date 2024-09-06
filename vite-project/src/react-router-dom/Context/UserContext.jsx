import React, { createContext, useEffect, useState } from "react";

export const UserData = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [logginUser, setLoginUser] = useState(
    JSON.parse(localStorage.getItem("loginUser"))
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const deleteAccount = (id) => {
    let deleteData = user.filter((item) => item.id !== id);
    localStorage.setItem('user' , JSON.stringify(deleteData));  
   setUser(deleteData)
  }

  useEffect(() => {
    if (logginUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <UserData.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        setLoginUser,
        logginUser,
        deleteAccount
      }}
    >
      {children}
    </UserData.Provider>
  );
};

export default UserContext;
