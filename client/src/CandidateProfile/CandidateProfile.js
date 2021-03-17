import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import CandidatePageNavBar from "./NavBarCandidate";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Grid from "@react-css/grid";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";

const CandidateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  //   const { setUser } = useContext(AuthContext);
  const { filteredCandidates } = useContext(CandidatesContext);
  const history = useHistory();
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
                        <Card.Title style={nameStyle}>
                          Name {candidate.fullName}
                        </Card.Title>
                        <Card.Text style={titleStyle}>
                          Title {candidate.title}
                        </Card.Text>
                        <Card.Text style={nameStyle}>
                          Location {candidate.location}
                        </Card.Text>
                        <Card.Text style={style} className="word">
                          Work Experience
                        </Card.Text>
                        <ul style={listStyle}>
                          {candidate.workExperiences &&
                            candidate.workExperiences.length &&
                            candidate.workExperiences.map((exp) => {
                              return <li>{exp}</li>;
                            })}
                        </ul>
                        <Card.Text style={style}>
                          Desired Position {candidate.desiredPosition}
                        </Card.Text>
                        <Card.Text style={style}>
                          Expected Salary {candidate.expectedSalary}
                        </Card.Text>
                        <Button style={buttonStyle}>Contact Candidate</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </div>
        </Grid>
      </div>
    );
  } else {
    history.push("/LoginPage");
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
};

const nameStyle = {
  fontFamily: "Consolas",
  fontSize: 15,
};

const titleStyle = {
  fontFamily: "Consolas",
  fontSize: 15,
  marginTop: "2%",
  fontWeight: "bold",
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
};

const linkStyle = {
  marginTop: "2%",
};

export default CandidateProfile;
