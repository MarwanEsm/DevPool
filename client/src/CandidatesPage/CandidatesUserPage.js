import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CandidateNavBar from "../CandidateRegistrationPageComponents/NavBarCandidate";
import CandidateForm from "../CandidateRegistrationPageComponents/CandidateForm";
import Footer from "../LandingPageComponents/Footer";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

function CandidatesUserPage() {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  if (user && user.owner === "candidate") {
    return (
      <div>
        <CandidateNavBar />
        <CandidateForm />
        <Footer />
      </div>
    );
  }else{
    history.push('CandidateProfile')
  }
}

export default CandidatesUserPage;
