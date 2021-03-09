import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./landingPage/landingPage";
import CandidatesContextProvider from './CandidatesContext/CandidatesContextProvider';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div className="App">
      <CandidatesContextProvider/>
      <Switch>
        <Route path ='/LandingPage'>
      <LandingPage />
      </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
