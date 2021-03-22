import React,{useState, useEffect, createContext} from 'react';

const initContext = {employers:[]};
export const EmployerContext = createContext(initContext);
export const EmployerContextProvider = ({children})=>{
    const [employers, setEmployers] = useState();
    useEffect(()=>{
        fetch('"http://localhost:5000/employer/all"')
        .then(res=> res.json())
        .then(data=>{console.log();
            setEmployers(data)
        })
    })
    return(
        <EmployerContext.Provider value = {{employers, setEmployers}}>{children}</EmployerContext.Provider>
    )
}


export default EmployerContextProvider;