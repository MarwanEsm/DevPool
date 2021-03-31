import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import IndividualCandidateNavBar from "./NavBarIndividualCandidate";

function IndividualProfile() {
  const history = useHistory();
  const [candidate, setCandidate] = useState();

  const handleClick = () => {
    history.push("/ChatScreen");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/candidate/me`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCandidate(data);
      });
  }, []);

  return (
    <div>
      <IndividualCandidateNavBar/>

      <div style={mainDivStyle}>
        <div>
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card" style={cardStyle}>
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="mt-3">
                      {candidate && (
                        <img
                          style={imgStyle}
                          variant="top"
                          src={`http://localhost:5000/${candidate.img}`}
                        />
                      )}
                      {candidate && (
                        <h4 style={nameStyle}>{candidate.fullName}</h4>
                      )}
                      {candidate && (
                        <p className="text-secondary mb-1" style={titleAndLocation}>
                          {candidate.title}
                        </p>
                      )}
                      {candidate && (
                        <p
                        className="text-muted font-size-sm"
                          style={titleAndLocation}
                        >
                          {candidate.location}
                        </p>
                      )}

                      <button
                        className="btn btn-outline-primary"
                        onClick={handleClick}
                      >
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card mb-3" style={rowDetailsStyle}>
                <div className="card-body">
                  <div className="row"></div>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {candidate && candidate.fullName}
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {candidate && candidate.email}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {candidate && candidate.MobileNumber}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Hobbies</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {candidate && candidate.hobbies}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0"> Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {candidate && candidate.address}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0"> Languages</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {candidate && candidate.languages}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={divStyle}>
            <div style={socialMediaDiv}>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-globe mr-2 icon-inline"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Website
                    </h6>
                    {candidate && (
                      <span className="text-secondary">
                        {candidate.website}
                      </span>
                    )}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github mr-2 icon-inline"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Github
                    </h6>
                    {candidate && (
                      <span className="text-secondary">{candidate.github}</span>
                    )}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-twitter mr-2 icon-inline text-info"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                      Twitter
                    </h6>
                    {candidate && (
                      <span className="text-secondary">
                        {candidate.twitter}
                      </span>
                    )}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram mr-2 icon-inline text-danger"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </h6>
                    {candidate && (
                      <span className="text-secondary">
                        {candidate.instagram}
                      </span>
                    )}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={svgStyle145}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook mr-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </h6>
                    {candidate && (
                      <span className="text-secondary">
                        {candidate.facebook}
                      </span>
                    )}
                  </li>
                </ul>
              </div>

              <br />

              <div style={storyOfMe}>
                <div className="card mt-3">
                  <p>Short story about me</p>
                </div>
              </div>
            </div>

            {/* <div className="row gutters-sm">
            <div className="col-sm-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center mb-3">
                    <i className="material-icons text-info mr-2">assignment</i>
                    Project Status
                  </h6>
                  <small>Web Design</small>
                  <div className="progress mb-3" style={div216Style}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style ={div220Style}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Website Markup</small>
                  <div className="progress mb-3" style={div238Style}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={div227Style}
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>One Page</small>
                  <div className="progress mb-3" style={div238Style}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={div241Style}
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Mobile Template</small>
                  <div className="progress mb-3" style={div238Style}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={div253Style}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Backend API</small>
                  <div className="progress mb-3" style={div238Style}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={div263Style}
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center mb-3">
                    <i className="material-icons text-info mr-2">assignment</i>
                    Project Status
                  </h6>
                  <small>Web Design</small>
                  <div className="progress mb-3" style={div238Style}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={div284Style}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Website Markup</small>
                  <div className="progress mb-3" style={div238Style}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={div295Style}
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>One Page</small>
                  <div className="progress mb-3" style={div238Style}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={div241Style}
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Mobile Template</small>
                  <div className="progress mb-3" style={div238Style}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={div317Style}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <small>Backend API</small>
                  <div className="progress mb-3" style={div238Style}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={div328Style}
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const svgStyle145 = {
  width: "24",
  height: "24",
};

const div220Style = {
  width: "80%",
};

const div216Style = {
  height: 5,
};

const div227Style = {
  width: "72%",
};

const div241Style = {
  width: "89%",
};

const div263Style = {
  width: "66%",
};

const div284Style = {
  width: "80%",
};

const div295Style = {
  width: "72%",
};

const div317Style = {
  width: "55%",
};

const div328Style = {
  width: "66%",
};

const div238Style = {
  height: 5,
};

const div253Style = {
  width: "55%",
};

const divStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
};


const imgStyle = {
  width: "85%",
  height: "100%",
  marginBottom: "8%",
  borderRadius: "50%",
};

const cardStyle = {
  width: "85%",
  borderColor: "gray",
};

const nameStyle = {
  fontFamily: "Courier New, monospace",
  fontSize: 19,
  fontWeight: "bold",
};

const titleAndLocation = {
  fontFamily: "Florence, cursive",
  fontSize: 15,
};

const mainDivStyle = {
  marginTop: "5%",
  marginLeft: "15%",
  marginRight: "15%",
  marginBottom: "15%",
};

const rowDetailsStyle = {
  fontSize: 19,
  fontFamily: "Lucidatypewriter, monospace",
  borderColor: "gray",
  height: "95%",
};

const socialMediaDiv = {
  width: "40%",
  borderColor: "gray",
};

const storyOfMe = {
  width: "120%",
  height: "120%",
};

// const navStyle = {
//   marginLeft :'3%',
//   marginRight :'3%',

// }

export default IndividualProfile;
