import React, { useState, createContext } from "react";

const initContext = { user:[] };
export const AuthContext = createContext(initContext);
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  


  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
