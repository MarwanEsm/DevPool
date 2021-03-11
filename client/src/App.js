import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import CandidatesContextProvider from "./CandidatesContext/CandidatesContextProvider";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import LoginPage from "./LoginPage/LoginPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <CandidatesContextProvider>
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
          </Switch>
        </CandidatesContextProvider>
      </div>
    </Router>
  );
}

export default App;
