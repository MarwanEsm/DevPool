import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import CandidatesContextProvider from "./CandidatesContext/CandidatesContextProvider";
import RegistrationPage from './RegistrationPage/RegistrationPage';
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
          <Route  path ='/RegistrationPage'>
            <RegistrationPage/>
          </Route>
        </Switch>
        </CandidatesContextProvider>
      </div>
    </Router>
  );
}

export default App;
