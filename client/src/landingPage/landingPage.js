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
      <div>
        <Headbar />
      </div>
      <div style={mainDivStyle}>
        {filteredCandidates &&
          filteredCandidates.length &&
          filteredCandidates.map((candidate) => {
            return (
              <Col key={candidate._id}>
                <Card style={cardStyle} key={candidate._id}>
                  <Card.Img
                    variant="top"
                    src="holder.js/100px180?text=Image cap"
                  />
                  <Card.Header style={cardHeader}>
                    {candidate.fullName}
                  </Card.Header>

                  <Card.Body>
                    <Card.Text style={titleStyle}>{candidate.title}</Card.Text>
                    <Card.Text style={nameStyle}>
                      {candidate.location}
                    </Card.Text>
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

      <div>
        <Footer />
      </div>
    </div>
  );
}
const mainDivStyle = {
  display: "flex",
  flexWrap: "wrap",
  // flexGrrow:'2',
  marginTop: "6%",
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
  width: "60%",
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
