import React, { useState, useContext } from "react";
import Logo from "./Logo";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import { CandidatesContext } from "../CandidatesContext/CandidatesContextProvider";

function Headbar() {
  const {
    searchLocation,
    setSearchLocation,
    searchTitle,
    setSearchTitle,
    filteredCandidates,
  } = useContext(CandidatesContext);

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Logo />
        <Form style={formStyle}>
          <div style={divStyle}>
          <select>{filteredCandidates.length &&filteredCandidates.map((candidate)=>{
            return (
              <option>{candidate.location}</option>
            )
          })}
            
          </select>
          {/* <FormControl
            type="text"
            name="where"
            placeholder="Where"
            className="mr-sm-2"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.name)}
          /> */}
          <FormControl
            type="text"
            name="what"
            placeholder="What"
            className="mr-sm-2"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.name)}
          />
          {/* <Button
            variant="outline-primary" onClick ={(e)=> setSearchLocation(e.target.value)}
          >
            Search
          </Button> */}
          </div>
        </Form>
        <Nav className="mr-auto" style={navStyle}>
          <Nav.Link href="/Landingpage">Candidates </Nav.Link>
          <Nav.Link href="Registration">Register</Nav.Link>
          <h5 style={h6Style}>|</h5>
          <Nav.Link href="Loging">Login</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </div>
  );
}

const h6Style = {
  marginTop: "4%",
};

const navStyle = {
  marginLeft: "8%",
};

const formStyle = {
  display: "flex",
  justifyContent: "space-around",
  alighItems: "center",
  width: "80%",
};

const divStyle={
  display:'flex',
  justifyContent :'space-around',
 
}

export default Headbar;
