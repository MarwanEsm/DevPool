import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import IndividualCandidateNavBar from "./NavBarIndividualCandidate";
import Badge from "react-bootstrap/Badge";
import "./IndividualProfileStyle.css";

function IndividualProfile() {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const [candidate, setCandidate] = useState();

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

  const handelClick = () => {
    history.push(`/EditProfileCandidate/${user._id}`);
  };

  return (
    <div>
      <div>
        <IndividualCandidateNavBar />
      </div>

      <div class="container emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                {candidate && (
                  <img
                    variant="top"
                    src={`http://localhost:5000/${candidate.img}`}
                  />
                )}
              </div>
            </div>

            <div class="col-md-6" style={storyOfMe}>
              <div class="profile-head">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-2">
              <Badge style={badg} variant="primary" onClick={handelClick}>
                Edit Profile
              </Badge>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="profile-work">
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
                        <span className="text-secondary">
                          {candidate.github}
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
              </div>
            </div>

            <div class="col-md-6" style={divStyle}>
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>Full Name</label>
                    </div>
                    <div class="col-md-6">
                      {candidate && candidate.fullName}
                    </div>
                  </div>
                  <hr style={hrStyle} />
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">{candidate && candidate.email}</div>
                  </div>
                  <hr style={hrStyle} />
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div class="col-md-6">{candidate && candidate.phoneNo}</div>
                  </div>
                  <hr style={hrStyle} />
                  <div class="row">
                    <div class="col-md-6">
                      <label>Hobbies</label>
                    </div>
                    <div class="col-md-6">{candidate && candidate.hobbies}</div>
                  </div>
                  <hr style={hrStyle} />
                  <div class="row">
                    <div class="col-md-6">
                      <label>Address</label>
                    </div>
                    <div class="col-md-6">{candidate && candidate.address}</div>
                  </div>
                  <hr style={hrStyle} />
                  <div class="row">
                    <div class="col-md-6">
                      <label>Languages</label>
                    </div>
                    <div class="col-md-6">
                      {candidate && candidate.languages}
                    </div>
                  </div>
                  <hr style={hrStyle} />

                  <div class="row">
                    <div class="col-md-6">
                      <label s>Experience</label>
                    </div>
                    {/* <div class="col-md-6">
                      <ul>
                      {candidate && candidate.workexperience.map((workExperience)=>{
                        return <li>{candidate.workExperience}</li>
                      })}
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const svgStyle145 = {
  width: "24",
  height: "24",
};

const storyOfMe = {
  width: "90%",
};

const badg = {
  height: 30,
  width: 120,
  fontSize: 15,
  cursor: "pointer",
  borderRadius: 12,
  padding: 7,
  alignText: "center",
};

const divStyle = {
  marginTop: "-15%",
  marginLeft: "-7%",
};

const hrStyle = {
  marginLeft: "13%",
};

export default IndividualProfile;
