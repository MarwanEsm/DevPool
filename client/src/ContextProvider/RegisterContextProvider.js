// import React, { useState, useEffect, createContext } from "react";

// const initContext = { isRegistered: [] };
// export const RegisterContext = createContext(initContext);
// export const RegisterContextProvider = ({ children }) => {
//   const [isRegistered, setIsRegistered] = useState();
//   useEffect(() => {
//     fetch("http://localhost:5000/candidate/isRegistered")
//       .then((res) => res.json())
//       .then((data) => setIsRegistered(data));
//   });
//   return (
//     <RegisterContext.Provider value={{isRegistered, setIsRegistered}}>
//       {children}
//     </RegisterContext.Provider>
//   );
// };

// export default RegisterContextProvider;
