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
import IndividualProfile from './Individualprofile/IndividualProfile';
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
// import PublicRoute from "./PublicRoute/PublicRoute";
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
                {/* <PrivateRoute
                  component={CandidatesUserPage}
                  path="/CandidatesUserPage"
                />
                <PrivateRoute  component={EmployersUserPage} path="/EmployersUserPage" />
                <PrivateRoute  component={CandidateProfile} path="/CandidateProfile" />
                <PrivateRoute  component={ChatScreen} path="/ChatScreen" />
                <PublicRoute restricted={true} component={LoginPage} path="/LoginPage"  />
                <PublicRoute restricted={false} component={LandingPage} path="/LandingPage"  />
                <PublicRoute restricted={true} component={RegistrationPage} path="/RegistrationPage"  /> */}

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

                <Route path="/IndividualProfile">
                  <IndividualProfile />
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
