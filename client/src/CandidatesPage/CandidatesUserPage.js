import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CandidateNavBar from "../CandidateRegistrationPageComponents/NavBarCandidate";
import CandidateForm from "../CandidateRegistrationPageComponents/CandidateForm";
import Footer from "../LandingPageComponents/Footer";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

function CandidatesUserPage() {
  return (
    <div>
      <CandidateNavBar />
      <CandidateForm />
      <Footer />
    </div>
  );
}

export default CandidatesUserPage;
