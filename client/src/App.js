import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage.jsx'
// import LandingPage from "./LandingPage/landingPage";
// import CandidatesContextProvider from "./ContextProvider/CandidatesContextProvider";
// import UsersContextProvider from "./ContextProvider/UsersContextProvider";
// import AuthContextProvider from "./ContextProvider/AuthContextProvider";
// import RegistrationPage from "./RegistrationPage/RegistrationPage";
// import LoginPage from "./LoginPage/LoginPage";
// import CandidatesUserPage from "./CandidatesPage/CandidatesUserPage";
// import EmployersUserPage from "./EmployerPage/EmployersUserPage";
// import CandidateProfile from "./CandidateProfile/CandidateProfile";
// import ChatScreen from "./ChatScreen/ChatScreen";
// import IndividualProfile from "./Individualprofile/IndividualProfile";
// import EmployerIndividualProfile from "./EmployerIndividualProfile/EmployerIndividualProfile";
// import EditProfileCandidate from "./EditProfile/EditProfileCandidate";
// import CandidateIndividualForEmployers from "./CandidatesIndividualForEmployers/CandidatesIndividualForEmployers";
// import EditProfileEmployer from "./EditProfileEmployer/EditProfileEmployer";
// import ForgetPasswordPage from "./ForgetPassword/ForgetPasswordPage";
// import ResetPasswordForm from './ForgetPassword/ResetPasswordForm';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return <Router> {/* Wrap your Switch and Route components with Router */}
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      {/* Add more Route components for your other paths */}
    </Switch>
  </Router>


}

export default App;
