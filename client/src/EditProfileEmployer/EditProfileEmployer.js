import React from "react";
import EditProfieEmpForm from "./EditProfileEmployerForm";
import IndividualEmployerNavBar from "./NavBarEditProfileEmp";
import Footer from "../LandingPageComponents/Footer";

function EditProfileEmployer() {
  return (
    <div>
      <IndividualEmployerNavBar />
      <EditProfieEmpForm />
      <Footer />
    </div>
  );
}

export default EditProfileEmployer;
