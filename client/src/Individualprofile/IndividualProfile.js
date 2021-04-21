import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import IndividualCandidateNavBar from "./NavBarIndividualCandidate";
import Badge from "react-bootstrap/Badge";
import Footer from "../LandingPageComponents/Footer";
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
      <div class="container" style={containerStyle}>
        <div id="content" class="content p-0">
          <div class="profile-header">
            <div class="profile-header-cover"></div>

            <div class="profile-header-content" style={headerContent}>
              <div class="profile-header-img">
                {candidate && (
                  <img src={`http://localhost:5000/${candidate.img}`} alt="" />
                )}
              </div>

              <div class="profile-header-info">
                {candidate && <h4 class="m-t-sm">{candidate.fullName}</h4>}
                {candidate && <p class="m-b-sm">{candidate.title}</p>}
                <span
                  class="btn btn-xs btn-primary mb-3"
                  onClick={handelClick}
                  style={badg}
                >
                  Edit Profile
                </span>
              </div>
            </div>

            <ul class="profile-header-tab nav nav-tabs">
              <li class="nav-item">
                <a
                  href="#profile-about"
                  class="nav-link active show"
                  data-toggle="tab"
                >
                  ABOUT
                </a>
              </li>
              {/* <li class="nav-item">
                <a href="#profile-photos" class="nav-link" data-toggle="tab">
                  PHOTOS
                </a>
              </li>
              <li class="nav-item">
                <a href="#profile-videos" class="nav-link" data-toggle="tab">
                  VIDEOS
                </a>
              </li> */}
              {/* <li class="nav-item">
                <a href="#profile-friends" class="nav-link" data-toggle="tab">
                  FRIENDS
                </a>
              </li> */}
            </ul>
          </div>

          <div class="profile-container">
            <div class="row row-space-20">
              <div class="col-md-8">
                <div class="tab-content p-0">
                  <div class="tab-pane active show" id="profile-about">
                    <table class="table table-profile">
                      <thead>
                        <tr>
                          <th colspan="2">WORK AND EDUCATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="field" style={tdStyle}>Work Expereince</td>
                          <td class="value">
                            <div class="m-b-5">
                              {candidate && <b>{candidate.workExperience}</b>}

                              <br />
                            </div>
                          </td>
                        </tr>
                        {/* <tr>
                          <td class="field">Education</td>
                          <td class="value">
                            <div class="m-b-5">
                              <b>University (2009)</b>{" "}
                              <a href="#" class="m-l-10">
                                Edit
                              </a>
                              <br />
                              <span class="text-muted">
                                University of Georgia, Athens, GA
                              </span>
                            </div>
                            <div>
                              <b>High School (2006)</b>{" "}
                              <a href="#" class="m-l-10">
                                Edit
                              </a>
                              <br />
                              <span class="text-muted">
                                Heritage High School, West Chestter, PA
                              </span>
                            </div>
                          </td>
                        </tr> */}
                        {/* <tr>
                          <td class="field">Skills</td>
                          <td class="value">
                            C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel,
                            Phonegap, Bootstrap, Angular JS, Angular JS, Asp.net
                          </td>
                        </tr> */}

                        <td class="field" style={td2Style}>Education</td>
                        <td class="value">
                          <div class="m-b-5">
                            {candidate && <b>{candidate.workExperience}</b>}

                            <br />
                          </div>
                        </td>
                      </tbody>
                    </table>
                    <table class="table table-profile">
                      <thead>
                        <tr>
                          <th colspan="2">CONTACT INFORMATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="field" style={td3Style}>Mobile No.</td>
                          {candidate && (
                            <td class="value">{candidate.phoneNo}</td>
                          )}
                        </tr>
                        <tr>
                          <td class="field" style={td4Style}>Email</td>
                          {candidate && (
                            <td class="value">{candidate.email}</td>
                          )}
                        </tr>
                        <tr>
                          <td>
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
                          </td>
                          {candidate && (
                            <td class="value">{candidate.facebook}</td>
                          )}
                        </tr>
                        <tr>
                          <td>
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
                          </td>
                          {candidate && (
                            <td class="value">{candidate.github}</td>
                          )}
                        </tr>
                        <tr>
                          <td>
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
                          </td>
                          {candidate && (
                            <td class="value">{candidate.twitter}</td>
                          )}
                        </tr>
                        <tr>
                          <td>
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
                              <line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                              ></line>
                            </svg>
                          </td>
                          {candidate && (
                            <td class="value">{candidate.instagram}</td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="col-md-4 hidden-xs hidden-sm">
                <ul class="profile-info-list">
                  <li class="title">PERSONAL INFORMATION</li>
                  <li>
                    <div class="field">Occupation:</div>
                    {candidate && <div class="value">{candidate.title}</div>}
                  </li>
                  <li>
                    <div class="field">Skills:</div>
                    {/* <div class="value">
                      C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel,
                      Phonegap, Bootstrap, Angular JS, Angular JS, Asp.net
                    </div> */}
                  </li>
                  {/* <li>
                    <div class="field">Birth of Date:</div>
                    <div class="value">1989/11/04</div>
                  </li> */}
                  {/* <li>
                    <div class="field">Country:</div>
                    <div class="value">San Francisco</div>
                  </li> */}
                  <li>
                    <div class="field">Langauges</div>
                    {candidate && (
                      <div class="value">{candidate.languages}</div>
                    )}
                  </li>
                  <li>
                    <div class="field">Hobbies</div>
                    {candidate && <div class="value">{candidate.hobbies}</div>}
                  </li>
                  <li>
                    <div class="field">Desired Position</div>
                    {candidate && (
                      <div class="value">{candidate.desiredPosition}</div>
                    )}
                  </li>
                  <li>
                    <div class="field">Expected Salary</div>
                    {candidate && (
                      <div class="value">{candidate.expectedSalary}</div>
                    )}
                  </li>
                  <li>
                    <div class="field">Address:</div>
                    <div class="value">
                      {candidate && (
                        <address class="m-b-0">{candidate.address}</address>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

const svgStyle145 = {
  width: 28,
  height: 35,
};

const badg = {
  height: 35,
  width: 90,
  fontSize: 14,
  cursor: "pointer",
  borderRadius: 12,
};

const containerStyle = {
  marginTop: "5%",
  width: "67%",
};

const headerContent = {
  borderRadius: 50,
};

const tdStyle={
  paddingRight:'3%'
}

const td2Style={
  paddingRight:'8%'
}

const td3Style={
  paddingRight:'6%'
}

const td4Style={
  paddingRight:'10%'
}
export default IndividualProfile;
