import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Headbar from "../LandingPageComponents/Navbar";
import Footer from "../LandingPageComponents/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "react-flex/index.css";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";

function LandingPage() {
  const { filteredCandidates } = useContext(CandidatesContext);
  const history = useHistory();

  const handelReadMore = (e) => {
    e.preventDefault();
    history.push("/LoginPage");
  };

  return (
    <div>
      <div>
        <Headbar />
      </div>
      <div>
        {filteredCandidates &&
          filteredCandidates.length &&
          filteredCandidates.map((candidate) => {
            return (
              <div>
                <Col xs={14} sm={10} md={6} lg={3} style={colStyle}>
                  <Card
                    className="p-3"
                    border="primary"
                    style={cardStyle}
                    key={candidate._id}
                  >
                    <Card.Img
                      style={imgStyle}
                      variant="top"
                      src={`http://localhost:5000/${candidate.img}`}
                    />
                    <Card.Text style={textStyle}>
                      {" "}
                      Name: {candidate.fullName}
                    </Card.Text>
                    <Card.Text style={text2Style}>
                      Title: {candidate.title}
                    </Card.Text>
                    <Button onClick={handelReadMore} style={buttonStyle}>
                      Read More
                    </Button>
                  </Card>
                </Col>
              </div>
            );
          })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

const buttonStyle = {
  fontFamily: "Courier New, monospace",
  fontSize: 13,

  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  width: "40%",
  marginLeft: "30%",
  backgroundColor: "#1565c0",
  color: "white",
};

const imgStyle = {
  width: "100%",
  marginBottom: "3%",
};

const cardStyle = {
  display: "flex",
  width: "80%",
  justifyContent: "space-between",
  alignItems: "space-betweent",
  backgroundColor: "#f2f2f2",
  textAlign: "center",
};

const colStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "space-betweent",
  marginTop: "3%",
};
const textStyle = {
  fontSize: 16,
  fontFamily: "Andale Mono, monospace",
  color: "#1565c0",
  fontWeight: "bold",
  marginTop: "3%",
};

const text2Style = {
  fontSize: 16,
  fontFamily: "Andale Mono, monospace",
  color: "#1565c0",
  fontWeight: "bold",
};

export default LandingPage;
