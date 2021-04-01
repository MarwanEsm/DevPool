import React, { useContext } from "react";
import Logo from "../LandingPageComponents/Logo";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

function CandidatePageNavBar() {
  const { user } = useContext(AuthContext);
  const {
    searchTitle,
    setSearchTitle,
    setSelectLocation,
    candidates,
  } = useContext(CandidatesContext);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };

  const changeLocation = (e) => {
    e.preventDefault();
    setSelectLocation(e.target.value);
  };

  return (
    <div style={maindivStyle}>
      <div>
        <Logo />
      </div>
      <div style={rowdivStyle}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <div style={div1Style}>
              <Form.Control
                as="select"
                defaultValue="all"
                onChange={changeLocation}
                style={selectStyle}
              >
                <option value="all">All</option>
                {candidates.length &&
                  candidates.map((candidate) => {
                    return (
                      <option key={candidate._id} value={candidate.location}>
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
              style={selectStyle}
            />
          </Form.Group>
        </Form.Row>
      </div>
      <div style={navdiv}>
        <Link to= {`/EmployerIndividualProfile/${user._id}`} style={linkStyle}>
          My Profile
        </Link>
        &nbsp; &nbsp;
        <h5>|</h5>
        &nbsp; &nbsp;
        <Link to="/" style={linkStyle}>
          Log out
        </Link>
      </div>
    </div>
  );
}

const maindivStyle = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#F0FFF0",
  paddingTop: "1%",
  marginTop: "0%",
};

const div1Style = {
  display: "flex",
  justifyContent: "space-between",
  marginRight: "8%",
};



const rowdivStyle = {
  display:'flex',
  alignItems:'center',
  marginRight:'27%'
};

const navdiv = {
  display: "flex",
  justifyContent: "space-around",
};

const selectStyle = {
  borderRadius: 14,
  border: "bold",
  borderColor: "black",
  fontFamily: "Courier, monospace",
  fontSize: 15,
};

const linkStyle = {
  fontFamily: "Zapf Chancery, cursive",
};



export default CandidatePageNavBar;
