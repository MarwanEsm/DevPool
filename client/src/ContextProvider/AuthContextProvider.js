import React, { useState, createContext, useEffect } from "react";
import {serverURL} from '../config';

const initContext = { user:[] };
export const AuthContext = createContext(initContext);
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
 
    useEffect(() => {
      fetch(`${serverURL}user/all`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUser(user
            );
        });
    }, []);

  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
