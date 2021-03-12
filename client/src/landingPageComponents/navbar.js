import React, { useContext } from "react";
import Logo from "./Logo";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { CandidatesContext } from "../CandidatesContext/CandidatesContextProvider";

function Headbar() {
  const { searchTitle, setSearchTitle, filteredCandidates } = useContext(
    CandidatesContext
  );

  return (
    <div style={maindivStyle}>
      <div>
        <Logo />
      </div>
      <div style={rowdivStyle}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <div style={div1Style}>
              <div style={labelStyle}>
                <Form.Label>Where</Form.Label>
              </div>
              <Form.Control as="select" defaultValue="Choose...">
                {filteredCandidates.length &&
                  filteredCandidates.map((candidate) => {
                    return <option>{candidate.location}</option>;
                  })}
              </Form.Control>
            </div>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <FormControl
              type="text"
              name="what"
              placeholder="What"
              className="mr-sm-2"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.name)}
            />
          </Form.Group>
        </Form.Row>
      </div>
      <div style={navdiv}>
        <Link to="/">Candidates</Link>
        &nbsp;
        &nbsp;
        <Link to="/RegistrationPage">Register</Link>
        &nbsp;
        &nbsp;
        <h5>|</h5>
        &nbsp;
        &nbsp;
        <Link to="/LoginPage">Login</Link>
      </div>
    </div>
  );
}



const labelStyle = {
  marginRight: "6%",
  marginTop: "4%",
};

const maindivStyle = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "1%",
};

const div1Style = {
  display: "flex",
  justifyContent: "space-between",
  marginRight: "8%",
};

const rowdivStyle = {
  marginRight: "16%",
};


const navdiv ={
  display : 'flex',
  justifyContent :'space-around',

}

export default Headbar;
