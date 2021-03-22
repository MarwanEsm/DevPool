import React from "react";
import RegissterNavBar from '../RegistrationPageComponents/NavBarRegister';
import RegistrationForm from '../RegistrationPageComponents/RegistrationForm';
import Footer from '../LandingPageComponents/Footer';

function RegistrationPage() {
  return(
    <div>
      <RegissterNavBar/>
      <RegistrationForm/>
      <Footer/>
    </div>
  )
}
  


export default RegistrationPage;
