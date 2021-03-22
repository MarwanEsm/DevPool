import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import CandidatePageNavBar from "./NavBarCandidate";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Grid from "@react-css/grid";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Footer from "../LandingPageComponents/Footer";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { EmployerContext } from "../ContextProvider/EmployerContextProvider";

const CandidateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const { filteredCandidates } = useContext(CandidatesContext);
  const { employers } = useContext(EmployerContext);
  const history = useHistory();

  const contactCandidate = () => {
    if (!employers) {
      history.push("/ChatScreen");
    } else {
      alert("Please Register");
    }
    /* if registered redirect to chat message or email screen
      if not alert please register with a link to employer registration page */
  };

  const [text, setText] = useState(false);
  const moreInfo = () => {
    setText(!text);
  };
  const linkName = text ? "Read Less << " : "Read More >> ";

  if (user && user.owner == "employer") {
    return (
      <div>
        <CandidatePageNavBar />
        <Grid>
          <div style={mainDivStyle}>
            {filteredCandidates &&
              filteredCandidates.length &&
              filteredCandidates.map((candidate) => {
                return (
                  <Col key={candidate._id}>
                    <Card style={cardStyle}>
                      <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#first">
                          <Nav.Item>
                            <Nav.Link href="#first" style={linkStyle}>
                              Add to watchlist
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link href="#link" style={linkStyle}>
                              Remove from watchlist
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Card.Header>

                      <Card.Body>
                        <Card.Title style={titleStyle}>
                          Name {candidate.fullName}
                        </Card.Title>
                        <Card.Text style={titleStyle}>
                          Title {candidate.title}
                        </Card.Text>
                        <Card.Text style={titleStyle}>
                          Location {candidate.location}
                        </Card.Text>
                        <Card.Text style={titleStyle} className="word">
                          Work Experience
                        </Card.Text>
                        <div>
                        <span onClick={moreInfo}>
                          {linkName}
                          {text}
                        </span>
                      </div>
                      {text && (
                        <>
                          <ul style={listStyle}>
                            {candidate.workExperiences &&
                              candidate.workExperiences.length &&
                              candidate.workExperiences.map((exp) => {
                                return <li>{exp}</li>;
                              })}
                          </ul>
                          <Card.Text style={titleStyle} >
                            Desired Position {candidate.desiredPosition}
                          </Card.Text>
                          <Card.Text style={titleStyle} >
                            Expected Salary {candidate.expectedSalary}
                          </Card.Text>
                          <Button
                          onClick={contactCandidate}
                          style={buttonStyle}
                        >
                          Contact Candidate
                        </Button>
                        </>
                      )} 
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </div>
        </Grid>

        <div>
          <Footer />
        </div>
      </div>
    );
  } else {
    history.push("/CandidatesUserPage");
  }
};

const mainDivStyle = {
  // flexDiretion :'row',
  // alignItesm: "start",
  // flexWrap: "wrap",
  // flexFlow: "row-wrap",
  // flexGrow: 2,
  display: "grid",
  // gridTemplate: 'row',
  // repeat:'1fr 1fr 1fr 1fr',
  marginTop: "4%",
  marginLeft: "3%",
  width: "100%",
};

const style = {
  fontFamily: "Consolas",
  fontSize: 17,
  marginTop: "2%",
};

const cardStyle = {
  border: "solid",
  marginBottom: "3%",
  borderWeigth: "solid ",
  width: "23%",
};

const buttonStyle = {
  marginTop: "7%",
};

const listStyle = {
  marginTop: "6%",
  marginBottom: "6%",
  listStyleType: "none",
  fontFamily: "Andale Mono, monospace",
  fontSize: 15,
};

const linkStyle = {
  marginTop: "2%",
  fontSize: 13,
};

const titleStyle = {
  fontFamily: "Andale Mono, monospace",
  fontSize: 15,
  marginTop: "2%",
};

export default CandidateProfile;
