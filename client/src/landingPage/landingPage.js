import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Headbar from "../LandingPageComponents/Navbar";
import Footer from "../LandingPageComponents/Footer";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./LandingPageStyle.css";
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

      <div className="container">
        <div className="row" style={divRow}>
          {filteredCandidates &&
            filteredCandidates.length &&
            filteredCandidates.map((candidate) => {
              return (
                <div className="col-12 col-sm-6 col-lg-3" style={cardStyle}>
                  <div
                    className="single_advisor_profile wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={divStyle}
                  >
                    <div className="advisor_thumb" key={candidate._id}>
                      <img
                        src={`http://localhost:5000/${candidate.img}`}
                        style={imgStyle}
                        alt=""
                      />

                      <div className="social-info">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>

                    <div className="single_advisor_details_info">
                      <h6>{candidate.fullName}</h6>
                      <p className="designation">{candidate.title}</p>
                      <p className="designation">{candidate.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* <Row style={rowStlye}>
        {filteredCandidates &&
          filteredCandidates.length &&
          filteredCandidates.map((candidate) => {
            return (
              <Col xs={12} sm={10} md={6} lg={3} style={colStyle}>
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
                    Location: {candidate.location}
                  </Card.Text>
                  <Button onClick={handelReadMore} style={buttonStyle}>
                    Read More
                  </Button>
                </Card>
              </Col>
            );
          })}
      </Row>  */}

      <div>
        <Footer />
      </div>
    </div>
  );
}

const divStyle = {
  visibility: "visible; animation-delay: 0.2s; animation-name: fadeInUp",
};

const buttonStyle = {
  fontFamily: "Courier New, monospace",
  fontSize: "70%",
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  width: "50%",
  marginLeft: "30%",
  backgroundColor: "#1565c0",
  color: "white",
};

const imgStyle = {
  width: 220,
  height: 200,
  marginBottom: "3%",
};

const cardStyle = {
  marginTop: "4%",
};

const colStlye = {
  display: "flex",
  justifyContent: "space-between",
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

const divRow = {
  // marginLeft: "3%",
  // height: "30%",
  width: "130%",
  marginLeft: "-15%",
};

const divThumb ={
  width:'auto'
}

export default LandingPage;
