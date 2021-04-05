import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import CandidatesContextProvider from "./ContextProvider/CandidatesContextProvider";
import UsersContextProvider from "./ContextProvider/UsersContextProvider";
import AuthContextProvider from "./ContextProvider/AuthContextProvider";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import LoginPage from "./LoginPage/LoginPage";
import CandidatesUserPage from "./CandidatesPage/CandidatesUserPage";
import EmployersUserPage from "./EmployerPage/EmployersUserPage";
import CandidateProfile from "./CandidateProfile/CandidateProfile";
import ChatScreen from "./ChatScreen/ChatScreen";
import IndividualProfile from "./Individualprofile/IndividualProfile";
import EmployerIndividualProfile from './EmployerIndividualProfile/EmployerIndividualProfile';
import EditProfileCandidate from './EditProfile/EditProfileCandidate'
import CandidateIndividualForEmployers from './CandidatesIndividualForEmployers/CandidatesIndividualForEmployers'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
          <CandidatesContextProvider>
            <UsersContextProvider>
              <Switch>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route exact path="/RegistrationPage">
                  <RegistrationPage />
                </Route>
                <Route path="/LoginPage">
                  <LoginPage />
                </Route>
                <Route path="/CandidatesUserPage">
                  <CandidatesUserPage />
                </Route>
                <Route path="/EmployersUserPage">
                  <EmployersUserPage />
                </Route>
                <Route path="/CandidateProfile">
                  <CandidateProfile />
                </Route>
                <Route path="/ChatScreen">
                  <ChatScreen />
                </Route>
                <Route path="/IndividualProfile/:id">
                  <IndividualProfile />
                </Route>
                <Route path="/EmployerIndividualProfile/:id">
                  <EmployerIndividualProfile />
                </Route>
                <Route path="/EditProfileCandidate/:id">
                  <EditProfileCandidate />
                </Route>
                <Route path="/CandidateIndividualForEmployers/:id">
                  <CandidateIndividualForEmployers />
                </Route>
              </Switch>
            </UsersContextProvider>
          </CandidatesContextProvider>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
