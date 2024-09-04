import React, { createContext, useState } from 'react'

export const UserData = createContext();

const UserContext = ({children}) => {
  const [user, setUser] = useState({});
  console.log(user)
  return (
    <UserData.Provider value={{ user, setUser }}>
      {children}
    </UserData.Provider>
  );
}

export default UserContext
