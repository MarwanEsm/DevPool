import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CandidatePageNavBar from "./NavBarCandidate";
import Nav from "react-bootstrap/Nav";
import "./CandidateProfileStyle.css";
import Footer from "../LandingPageComponents/Footer";
import Badge from "react-bootstrap/Badge";
// import { AuthContext } from "../ContextProvider/AuthContextProvider";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";

const CandidateProfile = () => {
  // const { user } = useContext(AuthContext);
  const { filteredCandidates } = useContext(CandidatesContext);
  const history = useHistory();
  // const { id } = useParams();

  const checkFullProfile = (candidateId) => {
    history.push(`/CandidateIndividualForEmployers/${candidateId}`);
  };

  const [text, setText] = useState(false);
  const handelReadMore = () => {
    setText(!text);
  };

  const linkName = text ? "Read Less << " : "Read More >> ";

  return (
    <div>
      <div>
        <CandidatePageNavBar />
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
                    <div style={divNavStyle}>
                      <Nav variant="pills" defaultActiveKey="#first">
                        <Nav.Item>
                          <Nav.Link href="#first" style={badgAddTo}>
                            Add to watchlist
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href="#link" style={badgRemove}>
                            Remove watchlist
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>

                    <div className="advisor_thumb" key={candidate._id}>
                      <img
                        src={`http://localhost:5000/${candidate.img}`}
                        style={imgStyle}
                        alt=""
                      />
                      <div className="social-info">
                        <Link to={candidate.facebook}>
                          <i className="fa fa-facebook"></i>
                        </Link>
                        <Link to={candidate.twitter}>
                          <i className="fa fa-twitter"></i>
                        </Link>
                        <Link to={candidate.linkedIn}>
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </div>
                    </div>

                    <div className="single_advisor_details_info">
                      <h6 style={textStyle}>{candidate.fullName}</h6>
                      <p className="designation" style={textStyle}>
                        {candidate.title}
                      </p>
                      <p className="designation" style={textStyle}>
                        {candidate.location}
                      </p>

                      <div>
                        <div>
                          <Badge
                            style={badg1}
                            class="btn btn-primary btn-block"
                            onClick={handelReadMore}
                          >
                            {linkName}
                          </Badge>
                        </div>
                        <div >
                          {text && (
                            <>
                              <p style={text2Style}>Work Experience :</p>
                              <ul style={textStyle}>
                                {candidate.workExperiences &&
                                  candidate.workExperiences.length &&
                                  candidate.workExperiences.map((exp) => {
                                    return (
                                      <li key={candidate.exp} style={textStyle}>
                                        {exp}
                                      </li>
                                    );
                                  })}
                              </ul>
                              <div>
                                <p style={text1Style}>
                                  Desired Position: {candidate.desiredPosition}
                                </p>
                              </div>
                              <div>
                                <p style={text1Style}>
                                  Expected Salary: {candidate.expectedSalary}
                                </p>
                              </div>

                              <div
                                className="btn btn-primary mb-3"
                                onClick={() => checkFullProfile(candidate._id)}
                                style={checkProfile}
                              >
                                Check Full Profile
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

const cardStyle = {
  marginTop: "6%",
  marginLeft: "6.5%",
};

const imgStyle = {
  width: 240,
  height: 200,
  marginBottom: "3%",
};

const divNavStyle = {
  display: "flex",
  justifyContent: "space-around",
};

const divStyle = {
  visibility: "visible; animation-delay: 0.2s; animation-name: fadeInUp",
};

const textStyle = {
  fontFamily: "	Candara",
  
 

};

const text1Style = {
  fontFamily: "	Candara",
  marginRight:'20%'

};


const text2Style = {
  fontFamily: "	Candara",
  marginRight:'29%'

};
const divRow = {
  width: "130%",
  marginLeft: "-16%",
};

const badgAddTo = {
  height: "80%",
  width: "100%",
  fontSize: 14,
  cursor: "pointer",
  borderRadius: 18,
  paddingBottom: 15,
  fontFamily: "	Candara",
  backgroundColor: "#1565c0",
};

const badgRemove = {
  height: "80%",
  width: "100%",
  fontSize: 14,
  cursor: "pointer",
  borderRadius: 18,
  paddingBottom: 15,
  fontFamily: "	Candara",
  color: "white",
};

const badg1 = {
  height: "100%",
  width: "35%",
  fontSize: 13,
  cursor: "pointer",
  borderRadius: 12,
  paddingBottom: 6,
  paddingTop: 4,
  fontFamily: "	Candara",
  color: "white",
  backgroundColor: "#1565c0",
  marginRight: "30%",
  marginTop: "6%",
  marginBottom: "5%",
};



const checkProfile = {
  marginRight: "25%",
};
export default CandidateProfile;
