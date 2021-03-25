import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Headbar from "../LandingPageComponents/Navbar";
import Footer from "../LandingPageComponents/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

function LandingPage() {
  const { filteredCandidates } = useContext(CandidatesContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const handelFullProfile = (e) => {
    e.preventDefault();  
      history.push("/LoginPage");
  }

  return (
    <div>
      <div>
        <Headbar />
      </div>
      <div>
        <Row style={rowStyle}>
          {filteredCandidates &&
            filteredCandidates.length &&
            filteredCandidates.map((candidate) => {
              return (
                <Col xs={12} md={7} lg={3} key={candidate._id}>
                  <Card key={candidate._id} style={cardStyle}>
                    <Card.Img
                    style={imgStyle}
                      variant="top"
                      src={`http://localhost:5000/${candidate.img}`}
                    />
                    <Card.Header style={cardHeader}>{candidate.fullName}</Card.Header>

                    <Card.Body>
                      <Card.Text style={titleStyle}>{candidate.title}</Card.Text>
                      <Card.Text style={nameStyle}>
                        {candidate.location}
                      </Card.Text>
                      <Button
                        onClick={handelFullProfile}
                        style={buttonStyle}
                      >
                        See Full Profile
                    </Button>
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
}
const rowStyle = {
  marginTop: "6%",
  marginLeft: "1%",
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
  marginBottom: "8%",
  width: "80%",
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


const imgStyle ={
  width:'60%',
  marginLeft:'20%',
  marginTop:'7%',
  marginBottom :'3%'
}

export default LandingPage;
