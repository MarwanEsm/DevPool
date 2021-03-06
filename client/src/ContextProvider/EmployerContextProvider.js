import React,{useState, useEffect, createContext} from 'react';
import {serverURL} from '../config'

const initContext = {employer:[]};
export const EmployerContext = createContext(initContext);
export const EmployerContextProvider = ({children})=>{
    const [employer, setEmployer] = useState();
    useEffect(()=>{
        fetch(`${serverURL}employer/all`)
        .then(res=> res.json())
        .then(data=>{console.log();
            setEmployer(data)
        })
    })
    return(
        <EmployerContext.Provider value = {{employer, setEmployer}}>{children}</EmployerContext.Provider>
    )
}


export default EmployerContextProvider;