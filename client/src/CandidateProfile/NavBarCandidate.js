import React,{useContext} from "react";
import Logo from "../LandingPageComponents/Logo";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";


function CandidatePageNavBar() {
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
                <div style={labelStyle}>
                  <Form.Label>Where</Form.Label>
                </div>
                <Form.Control
                  as="select"
                  defaultValue="all"
                  onChange={changeLocation}
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
              />
            </Form.Group>
          </Form.Row>
        </div>
        <div style={navdiv}>
          <Link to="/">Log out</Link>
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

export default CandidatePageNavBar;
