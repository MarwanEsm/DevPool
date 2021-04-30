import React, { useState, useEffect, createContext } from "react";
import {serverURL} from '../config';


const initContext = { users: [] };
export const UsersContext = createContext(initContext);

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${serverURL}user/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(users);
      });
  }, []);

  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
