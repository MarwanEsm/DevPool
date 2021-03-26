import React, { useContext } from "react";
import EmployerNavBar from "../EmployerRegistrationPageComponent/NavBarEmployer";
import EmployerForm from "../EmployerRegistrationPageComponent/EmployerForm";
import Footer from "../LandingPageComponents/Footer";
// import { useHistory } from "react-router-dom";
// import { EmployerContext } from "../ContextProvider/EmployerContextProvider";

function EmployersUsersPage() {
 
    return (
      <div>
        <EmployerNavBar />
        <EmployerForm />
        <Footer />
      </div>
    );
 
}

export default EmployersUsersPage;
