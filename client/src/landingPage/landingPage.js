import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Headbar from "../LandingPageComponents/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";


function LandingPage() {
  const { filteredCandidates } = useContext(CandidatesContext);
  const history = useHistory();

  const [text, setText] = useState(false);
  const moreInfo = () => {
    setText(!text);
  };
  const linkName = text ? "Read Less << " : "Read More >> ";

  const handleContactCandidate = (e) => {
    e.preventDefault();
    history.push("/LoginPage");
    // .then(user)
    // if(user) {
    //  /*it should happen after the user is logged in*/ history.push('/CandidatesPage/:id')

    // }else{
    //   alert('User is not registered, please register').then(history.push('/RegistrationPage'))
    // }
  };

  return (
    <div>
      <Headbar />

      <div style={mainDivStyle}>
        {filteredCandidates &&
          filteredCandidates.length &&
          filteredCandidates.map((candidate) => {
            return (
              <Col key={candidate._id}>
                <Card style={cardStyle}>
                  {/* <Card.Header>
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
                  </Card.Header> */}

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
                    <div>
                      <span onClick={moreInfo} style={spanStyle}>
                        {linkName}
                        {text}
                      </span>
                    </div>
                    {text && (
                      <>
                        <ul>
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
                      </>
                    )}
                    <Button onClick={handleContactCandidate}>
                      Contact Candidate
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </div>
    </div>
  );
}
const mainDivStyle = {
  // display: "flex",
  // justifyContent: "space-between",
  // alignItesm: "start",
  // flexWrap: "wrap",
  // flexFlow: "row-wrap",
  // flexGrow: 2,
  marginTop: "4%",
  marginLeft: "3%",
  width: "100%",
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

const spanStyle = {
  fontFamily: "Lucida Sans Unicode",
  color: "blue",
  fontSize: 13,
};

const cardStyle = {
  border: "solid",
  marginBottom: "3%",
  borderWeigth: "solid ",
  width: "23%",
};



export default LandingPage;
