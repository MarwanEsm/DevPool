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
  const { user } = useContext(AuthContext);
  const { filteredCandidates } = useContext(CandidatesContext);
  const { employers } = useContext(EmployerContext);
  const history = useHistory();

  const contactCandidate = () => {
    if (!employers) {
      history.push("/EmployersUserPage");
    } else {
      history.push("/ChatScreen");
    }

    /* if registered redirect to chat message or email screen
      if not alert please register with a link to employer registration page 
      it always redirect to Chat Screen*/
  };

  const [text, setText] = useState(false);
  const moreInfo = () => {
    setText(!text);
  };

  const linkName = text ? "Read Less << " : "Read More >> ";

  if (user && user.owner === "employer") {
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
                              <span style={title1Style}>
                                Desired Position :
                              </span>{" "}
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

                            <Button variant='primary'
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
  display: "grid",
  marginTop: "4%",
  marginLeft: "3%",
  width: "100%",
};

const cardStyle = {
  border: "solid",
  marginBottom: "3%",
  borderWeigth: "solid ",
  width: "23%",
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

const titleStyle = {
  fontFamily: "Andale Mono, monospace",
  fontSize: 15,
  marginTop: "2%",
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

const divSpanStyle={
  marginTop:'4%'
}


const buttonStyle = {
  fontFamily: "Courier, monospace",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  marginTop: "7%",
};


export default CandidateProfile;
