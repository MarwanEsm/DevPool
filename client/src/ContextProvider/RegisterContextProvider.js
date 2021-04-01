import React, { useState, useEffect, createContext } from "react";

const initContext = { isRegistered: false };
export const RegisterContext = createContext(initContext);
export const RegisterContextProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/user/isRegistered")
      .then((res) => res.json())
      .then((data) => setIsRegistered(true));
  });
  return (
    <RegisterContext.Provider value={(isRegistered, setIsRegistered)}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
