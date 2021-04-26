import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Headbar from "../LandingPageComponents/Navbar";
import Footer from "../LandingPageComponents/Footer";
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
                        <a href={candidate.facebook} target='_blank'>
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href={`https://www.instagram.com/${candidate.twitter}`} target='_blank'>
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href={`https://www.instagram.com/${candidate.instagram}`} target='_blank'>
                          <i className="fa fa-instagram"></i>
                        </a>
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
                      <span
                        style={spanStyle}
                        className="btn btn-primary btn-block"
                        onClick={handelReadMore}
                      >
                        Read more
                      </span>
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
}

const divStyle = {
  visibility: "visible; animation-delay: 0.2s; animation-name: fadeInUp",
};

const imgStyle = {
  width: 240,
  height: 200,
  marginBottom: "3%",
};

const cardStyle = {
  marginTop: "6%",
  marginLeft:'6.5%'
};

const divRow = {
  width: "130%",
  marginLeft: "-16%",
};

const textStyle = {
  fontFamily: "	Candara",
};

const spanStyle = {
  fontFamily: "	Candara",
  fontSize: 14,
  width: "30%",
  backgroundColor: "#3f43fd",
  padding: "0.5%",
  marginLeft: "40%",
  marginTop: "5%",
};

export default LandingPage;
