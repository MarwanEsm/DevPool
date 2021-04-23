import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Logo from "./Logo";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import _ from "lodash";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";

function Headbar() {
  const {
    searchTitle,
    setSearchTitle,
    setSelectLocation,
    candidates,
  } = useContext(CandidatesContext);

  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };

  const changeLocation = (e) => {
    e.preventDefault();
    setSelectLocation(e.target.value);
  };

  const handleClick = () => {
    history.push("/RegistrationPage");
  };

  const handleClick1 = () => {
    history.push("/LoginPage");
  };
  const locations = _.uniqBy(candidates, "location");
  console.log(locations);

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
                  locations.map((candidate) => {
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
        <Badge style={badg} variant="primary" onClick={handleClick}>
          <i className="fa fa-user" />
          &nbsp; Register
        </Badge>
        &nbsp; &nbsp;
        <Badge style={badg} variant="primary" onClick={handleClick1}>
          <i className="fa fa-sign-in" />
          &nbsp; Login
        </Badge>
      </div>
    </div>
  );
}

const maindivStyle = {
  display: "flex",
  justifyContent: "space-around",
  paddingTop: "1%",
  marginTop: "0%",
  marginLeft:'-0.4%'
  
};

const div1Style = {
  display: "flex",
  justifyContent: "space-between",
  marginRight: "8%",
};

const rowdivStyle = {
  display: "flex",
  alignItems: "center",
  marginRight: "19%",
};

const navdiv = {
  display: "flex",
  justifyContent: "space-around",
  marginRight: "1%",
};

const selectStyle = {
  borderRadius: 14,
  border: "bold",
  borderColor: "gray",
  fontFamily: "Courier, monospace",
  fontSize: 15,
  fontWeight: "bold",
  color: "#1565c0 ",
};

const badg = {
  height: "53%",
  width: 100,
  fontSize: 14,
  cursor: "pointer",
  borderRadius: 12,
  paddingTop: 8,
  alignText: "center",
  fontFamily: "	Candara",
};

export default Headbar;
