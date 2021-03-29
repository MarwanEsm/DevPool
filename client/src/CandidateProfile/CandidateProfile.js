import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import CandidatePageNavBar from "./NavBarCandidate";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Footer from "../LandingPageComponents/Footer";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { EmployerContext } from "../ContextProvider/EmployerContextProvider";

const CandidateProfile = () => {
  const { user } = useContext(AuthContext);
  const { filteredCandidates } = useContext(CandidatesContext);
  const { employer } = useContext(EmployerContext);
  const history = useHistory();

  const CheckFullProfile = () => {
    history.push(
      "/IndividualProfile"
    ); /* It should be redirected to the profile of the candidate on which the employer clicked*/
  };

  const [text, setText] = useState(false);
  const moreInfo = () => {
    setText(!text);
  };

  const linkName = text ? "Read Less << " : "Read More >> ";

  return (
    <div>
      <div>
        <CandidatePageNavBar />
      </div>
      <div>
        <Row style={rowStyle}>
          {filteredCandidates &&
            filteredCandidates.length &&
            filteredCandidates.map((candidate) => {
              return (
                <Col xs={10} md={6} lg={4} key={candidate._id}>
                  <Card key={candidate._id} style={cardStyle}>
                    <Card.Header>
                      <div style={divNavStyle}>
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
                      </div>
                    </Card.Header>
                    <Card.Img
                      style={imgStyle}
                      variant="top"
                      src={`http://localhost:5000/${candidate.img}`}
                    />

                    <Card.Body>
                      <div>
                        {" "}
                        <span style={title1Style}>Name :</span>{" "}
                        <span style={titleStyle}>{candidate.fullName}</span>
                      </div>

                      <div>
                        <span style={title1Style}>Title :</span>{" "}
                        <span style={titleStyle}>{candidate.title}</span>
                      </div>
                      <div>
                        <span style={title1Style}>Location :</span>{" "}
                        <span style={titleStyle}>{candidate.location}</span>
                      </div>
                      <div>
                        <span style={title1Style}>Work Experience :</span>{" "}
                      </div>
                      <div style={divSpanStyle}>
                        <span onClick={moreInfo} style={spanStyle}>
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
                                return <li key={candidate.exp}>{exp}</li>;
                              })}
                          </ul>
                          <div>
                            <span style={title1Style}>Desired Position :</span>{" "}
                            <span style={titleStyle}>
                              {candidate.desiredPosition}
                            </span>
                          </div>
                          <div>
                            <span style={title1Style}>Expected Salary :</span>{" "}
                            <span style={titleStyle}>
                              {candidate.expectedSalary}
                            </span>
                          </div>

                          <Button
                            variant="primary"
                            onClick={CheckFullProfile}
                            style={buttonStyle}
                          >
                            Check Full Profile
                          </Button>
                        </>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

const rowStyle = {
  marginTop: "6%",
  marginLeft: "1%",
};

const titleStyle = {
  fontFamily: "Andale Mono, monospace",
  fontSize: 15,
  marginTop: "2%",
};

const cardStyle = {
  marginBottom: "8%",
  marginLeft: "4%",
  width: "85%",
};

const buttonStyle = {
  marginTop: "7%",
  fontFamily: "Courier, monospace",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
};

const imgStyle = {
  width: "60%",
  marginLeft: "20%",
  marginTop: "7%",
  marginBottom: "3%",
};

const listStyle = {
  marginTop: "6%",
  marginBottom: "6%",
  marginRight: "11%",
  listStyleType: "none",
  fontFamily: "Andale Mono, monospace",
  fontSize: 15,
};

const linkStyle = {
  marginTop: "2%",
  fontSize: 13,
};

const title1Style = {
  fontFamily: "Andale Mono, monospace",
  fontSize: 15,
  marginTop: "2%",
  fontWeight: "bold",
};

const spanStyle = {
  fontFamily: "Zapf Chancery, cursive",
  fontSize: 13,
  color: "blue",
  textDecoration: "underline",
};

const divSpanStyle = {
  marginTop: "4%",
};

const divNavStyle = {
  display: "flex",
  justifyContent: "space-around",
};

export default CandidateProfile;
