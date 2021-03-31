import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CandidateNavBar from "../CandidateRegistrationPageComponents/NavBarCandidate";
import CandidateForm from "../CandidateRegistrationPageComponents/CandidateForm";
import Footer from "../LandingPageComponents/Footer";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";

function CandidatesUserPage() {
  const history = useHistory();
  const { candidate } = useContext(CandidatesContext);
  const {user} =useContext(AuthContext)
  if (!candidate) {
    return (
      <div>
        <CandidateNavBar />
        <CandidateForm />
        <Footer />
      </div>
    );
  } else {
    history.push(`/individualProfile/${user._id}`);
  }
}

export default CandidatesUserPage;
