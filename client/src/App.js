import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import CandidatesContextProvider from "./CandidatesContext/CandidatesContextProvider";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <CandidatesContextProvider>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        </CandidatesContextProvider>
      </div>
    </Router>
  );
}

export default App;
