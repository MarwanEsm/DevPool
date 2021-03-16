import React, { useContext } from "react";
import Logo from "./Logo";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";

function Headbar() {
  const {
    searchTitle,
    setSearchTitle,
    selectLocation,
    setSelectLocation,
    filteredCandidates,
    candidates
  } = useContext(CandidatesContext);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };

  const changeLocation = (e) =>{
    e.preventDefault()
    setSelectLocation(e.target.value)
  }

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
              <Form.Control as="select" defaultValue="all" onChange={changeLocation}>
              <option
                        value="all"
                        // onChange={changeLocation}
                      >
                        All
                      </option>
                {candidates.length &&
                 candidates.map((candidate) => {
                    return (
                      <option
                        key={candidate._id}
                        value={candidate.location}
                        // onChange={changeLocation}
                      >
                        {candidate.location}
                      </option>
                    );
                  })}
              </Form.Control>
            </div>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <FormControl
              type="text"
              name="searchTitle"
              placeholder="What"
              className="mr-sm-2"
              value={searchTitle}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
      </div>
      <div style={navdiv}>
        <Link to="/">Candidates</Link>
        &nbsp; &nbsp;
        <Link to="/RegistrationPage">Register</Link>
        &nbsp; &nbsp;
        <h5>|</h5>
        &nbsp; &nbsp;
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

const navdiv = {
  display: "flex",
  justifyContent: "space-around",
};

export default Headbar;
