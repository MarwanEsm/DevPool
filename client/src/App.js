import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import CandidatesContextProvider from "./ContextProvider/CandidatesContextProvider";
import UsersContextProvider from "./ContextProvider/UsersContextProvider";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import LoginPage from "./LoginPage/LoginPage";
import CandidatesUserPage from './CandidatesPage/CandidatesUserPage';
import EmployerUsersPage from './EmployerPage/EmployersUserPage';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
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
            <Route path ='/CandidatesUserPage'>
              <CandidatesUserPage/>
            </Route>
            <Route path ='/EmployerUsersPage'>
              <EmployerUsersPage/>
            </Route>
          </Switch>
          </UsersContextProvider>
        </CandidatesContextProvider>
      </div>
    </Router>
  );
}

export default App;
