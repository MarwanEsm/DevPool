import React, { useContext } from "react";
import Logo from "./Logo";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";
import { CandidatesContext } from "../CandidatesContext/CandidatesContextProvider";

function Headbar() {
  const { searchTitle, setSearchTitle, filteredCandidates } = useContext(
    CandidatesContext
  );

  // const history= useHistory()
  // const clickHandler = () =>{
  //   history.push('/RegistrationPage')
  // }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Logo />
        <Form style={formStyle}>
          <div style={divStyle}>
            <select>
              {filteredCandidates.length &&
                filteredCandidates.map((candidate) => {
                  return <option>{candidate.location}</option>;
                })}
            </select>

            <FormControl
              type="text"
              name="what"
              placeholder="What"
              className="mr-sm-2"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.name)}
            />
          </div>
        </Form>
        <div style={div1Style}>
          <Nav className="mr-auto" style={navStyle}>
            <Link to="/Landingpage">Candidates </Link>
            <Link to="/RegistrationPage" /*onClick={clickHandler}*/>Register</Link>
            <h5 style={h6Style}>|</h5>
            <Link to="/Login">Login</Link>
          </Nav>
        </div>
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

const divStyle = {
  display: "flex",
  justifyContent: "space-around",
};

const div1Style = {
  display: "flex",
  justifyContent: "space-around",
};

export default Headbar;
