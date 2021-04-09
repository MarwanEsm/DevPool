import React, { createContext, useEffect, useState } from 'react'


const initContext = {id :[]};
export const IdContext = createContext (initContext);
export const IdContextProvider = ({children}) =>{
    const {id, setId} = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/candidate/:id')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setId(data.id);
          });
      }, []);

    return(
        <IdContext.Provider value={id}>{children}</IdContext.Provider>
    )
}

export default IdContextProvider;