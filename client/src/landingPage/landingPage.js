import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Headbar from "../LandingPageComponents/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Grid from "@react-css/grid";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

function LandingPage() {
  const { filteredCandidates } = useContext(CandidatesContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  // const [text, setText] = useState(false);
  // const moreInfo = () => {
  //   setText(!text);
  // };
  // const linkName = text ? "Read Less << " : "Read More >> ";

  const handleContactCandidate = (e) => {
    e.preventDefault();
    if (!user) {
      history.push("/LoginPage");
    } else {
      history.push("/CandidateProfile");
    }
  };

  return (
    <div>
      <Headbar />
      <Grid>
        <div style={mainDivStyle}>
          {filteredCandidates &&
            filteredCandidates.length &&
            filteredCandidates.map((candidate) => {
              return (
                <Col key={candidate._id}>
                  <Card style={cardStyle}>
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
                      {/* <Card.Text style={style} className="word">
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
                        </>
                      )} */}
                      <Button
                        onClick={handleContactCandidate}
                        style={buttonStyle}
                      >
                        See Full Profile
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </div>
      </Grid>
    </div>
  );
}
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

// const style = {
//   fontFamily: "Consolas",
//   fontSize: 17,
//   marginTop: "2%",
// };

// const spanStyle = {
//   fontFamily: "Lucida Sans Unicode",
//   color: "blue",
//   fontSize: 13,
// };

const cardStyle = {
  border: "solid",
  marginBottom: "3%",
  borderWeigth: "solid ",
  width: "23%",
};

const buttonStyle = {
  marginTop: "7%",
};

// const listStyle = {
//   marginTop: "6%",
//   marginBottom: "6%",
// };



export default LandingPage;
