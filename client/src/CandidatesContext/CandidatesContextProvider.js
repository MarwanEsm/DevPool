import React, { createContext, useEffect, useState } from "react";

const initContext = { candidates: [] };

export const CandidatesContext = createContext(initContext);
export const CandidatesContextProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);
  const [searchlocation, setSearchLocation] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  const filteredCandidates = candidates.filter((candidate) => {
    return (candidate.location.toLowerCase().includes(searchlocation.toLowerCase()) &&
    candidate.title.toLowerCase().includes(searchTitle.toLowerCase()))})


  // const filteredCandidates! = candidates.filter((candidate) =>
  //   candidate.title.toLowerCase().includes(searchTitle.toLowerCase())
  // );

  console.log(filteredCandidates);
  useEffect(() => {
    fetch("http://localhost:5000/candidate/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCandidates(data);
      });
  }, []);

  return (
    <CandidatesContext.Provider
      value={{
        filteredCandidates,
        searchlocation,
        setSearchLocation,
        searchTitle,
        setSearchTitle,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
};

export default CandidatesContextProvider;
