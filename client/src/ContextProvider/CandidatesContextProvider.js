import React, { createContext, useEffect, useState } from "react";
import {serverURL} from '../config';

const initContext = { candidates: [] };
export const CandidatesContext = createContext(initContext);
export const CandidatesContextProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);
  const [candidate, setCandidate] = useState();
  const [searchTitle, setSearchTitle] = useState("");
  const [selectLocation, setSelectLocation] = useState("all");
  const filteredCandidates = candidates.filter((candidate) => {
    return (
      (candidate.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
        candidate.location === selectLocation) ||
      (selectLocation === "all" &&
        candidate.title.toLowerCase().includes(searchTitle.toLowerCase()))
    );
  });

  useEffect(() => {
    fetch(`${serverURL}candidate/all`)
      .then((res) => res.json())
      .then((data) => {
        setCandidates(data);
      });
  }, []);

  return (
    <CandidatesContext.Provider
      value={{candidate,
        setCandidate,
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
