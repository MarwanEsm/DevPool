import React, { useState, createContext, useEffect } from "react";

const initContext = { user:[] };
export const AuthContext = createContext(initContext);
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
    useEffect(() => {
      fetch("http://localhost:5000/user/all")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setUser(user);
        });
    }, []);

  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
