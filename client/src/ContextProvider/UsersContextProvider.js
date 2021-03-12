import React, { useState, useEffect, createContext } from "react";

const initContext = { users: [] };
export const UsersContext = createContext(initContext);

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
