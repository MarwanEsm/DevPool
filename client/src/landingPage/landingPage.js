import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Headbar from "../LandingPageComponents/Navbar";
import Footer from "../LandingPageComponents/Footer";
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
                <div style={divColStyle}>
                  <Col key={candidate._id}>
                    <Card style={cardStyle}>
                      <Card.Img
                        variant="top"
                        src="holder.js/100px180?text=Image cap"
                      />
                      <Card.Header style={cardHeader}>
                        {candidate.fullName}
                      </Card.Header>
                      {/* <Card style={cardStyle}> */}
                      <Card.Body>
                        {/* <Card.Title style={nameStyle}>
                        Name {candidate.fullName}
                      </Card.Title> */}
                        <Card.Text style={titleStyle}>
                          {candidate.title}
                        </Card.Text>
                        <Card.Text style={nameStyle}>
                          {candidate.location}
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
                </div>
              );
            })}
        </div>
      </Grid>
      <div>
        <Footer />
      </div>
    </div>
  );
}
const mainDivStyle = {
  flexWrap: "wrap",
  display: "grid",
  marginTop: "4%",
  marginLeft: "3%",
};

const nameStyle = {
  fontFamily: "Andale Mono, monospace",
  fontSize: 15,
};

const titleStyle = {
  fontFamily: "Andale Mono, monospace",
  fontSize: 15,
  marginTop: "2%",
};

const cardStyle = {
  marginBottom: "3%",
  width: "23%",
};

const cardHeader = {
  fontFamily: "Courier New, monospace",
  fontWeight: "bold",
};

const buttonStyle = {
  marginTop: "7%",
  fontFamily: "Courier, monospace",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
};

const divColStyle = {
  display: "inline",
};

export default LandingPage;
