import React, { createContext, useEffect, useState } from "react";

const initContext = { candidates: [] };

export const CandidatesContext = createContext(initContext);
export const CandidatesContextProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [selectLocation, setSelectLocation] = useState("all");
  const filteredCandidates = candidates.filter((candidate) => {
    console.log(selectLocation);
    return (
      (candidate.title
        .toLowerCase()
        .includes(searchTitle.toLowerCase()) &&
        candidate.location === selectLocation) ||
        selectLocation === "all" && candidate.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
  });

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
        candidates,
        filteredCandidates,
        selectLocation,
        setSelectLocation,
        searchTitle,
        setSearchTitle,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
};

export default CandidatesContextProvider;
