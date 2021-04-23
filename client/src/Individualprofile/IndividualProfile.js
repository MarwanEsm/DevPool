import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import IndividualCandidateNavBar from "./NavBarIndividualCandidate";
// import Badge from "react-bootstrap/Badge";
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

  // const [file, setMyFile] = useState();
  // const uploadImage = (file) => {
  //   console.log(file);
  //   setMyFile(file[0]);
  // };

  const handelClick = () => {
    history.push(`/EditProfileCandidate/${user._id}`);
  };

  return (
    <div>
      <div>
        <IndividualCandidateNavBar />
      </div>
      <div className="container" style={containerStyle}>
        <div id="content" className="content p-0">
          <div className="profile-header">
            <div className="profile-header-cover"></div>

            <div className="profile-header-content" style={headerContent}>
              <div className="profile-header-img">
                {candidate && (
                  <img src={`http://localhost:5000/${candidate.img}`} alt="" />
                )}
              </div>

              <div className="profile-header-info">
                {candidate && <h4 className="m-t-sm">{candidate.fullName}</h4>}
                {candidate && <p className="m-b-sm">{candidate.title}</p>}
                <span
                  className="btn btn-xs btn-primary mb-3"
                  onClick={handelClick}
                  style={badg}
                >
                  Edit Profile
                </span>
              </div>
            </div>

            <ul className="profile-header-tab nav nav-tabs">
              <li className="nav-item">
                <a
                  href="#profile-about"
                  className="nav-link active show"
                  data-toggle="tab"
                >
                  ABOUT
                </a>
              </li>
              {/* <li className="nav-item">
                <a href="#profile-photos" className="nav-link" data-toggle="tab">
                  PHOTOS
                </a>
              </li>
              <li className="nav-item">
                <a href="#profile-videos" className="nav-link" data-toggle="tab">
                  VIDEOS
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a href="#profile-friends" className="nav-link" data-toggle="tab">
                  FRIENDS
                </a>
              </li> */}
            </ul>
          </div>

          <div className="profile-container">
            <div className="row row-space-20">
              <div className="col-md-8">
                <div className="tab-content p-0">
                  <div className="tab-pane active show" id="profile-about">
                    <table className="table table-profile">
                      <thead>
                        <tr>
                          <th colSpan="2">WORK AND EDUCATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field" style={tdStyle}>
                            Work Expereince
                          </td>
                          <td className="value">
                            <div className="m-b-5">
                              {/* <ul>
                                {candidate.workExperiences &&
                                  candidate.workExperiences.length &&
                                  candidate.workExperiences.map((exp) => {
                                    return <li key={candidate.exp}>{exp}</li>;
                                  })}
                              </ul> */}

                              <br />
                            </div>
                          </td>
                        </tr>
                        {/* <tr>
                          <td className="field">Education</td>
                          <td className="value">
                            <div className="m-b-5">
                              <b>University (2009)</b>{" "}
                              <a href="#" className="m-l-10">
                                Edit
                              </a>
                              <br />
                              <span className="text-muted">
                                University of Georgia, Athens, GA
                              </span>
                            </div>
                            <div>
                              <b>High School (2006)</b>{" "}
                              <a href="#" className="m-l-10">
                                Edit
                              </a>
                              <br />
                              <span className="text-muted">
                                Heritage High School, West Chestter, PA
                              </span>
                            </div>
                          </td>
                        </tr> */}
                        {/* <tr>
                          <td className="field">Skills</td>
                          <td className="value">
                            C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel,
                            Phonegap, Bootstrap, Angular JS, Angular JS, Asp.net
                          </td>
                        </tr> */}

                        <td className="field" style={td2Style}>
                          Education
                        </td>
                        <td className="value">
                          <div className="m-b-5">
                            {candidate && (
                              <b style={valueStyle}> {candidate.education}</b>
                            )}

                            <br />
                          </div>
                        </td>
                      </tbody>
                    </table>
                    <table className="table table-profile">
                      <thead>
                        <tr>
                          <th colspan="2">CONTACT INFORMATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field" style={td3Style}>
                            Mobile No.
                          </td>
                          {candidate && (
                            <td className="value">{candidate.phoneNo}</td>
                          )}
                        </tr>
                        <tr>
                          <td className="field" style={td4Style}>
                            Email
                          </td>
                          {candidate && (
                            <td className="value">{candidate.email}</td>
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
                            <td className="value">{candidate.facebook}</td>
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
                            <td className="value">{candidate.github}</td>
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
                            <td className="value">{candidate.twitter}</td>
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
                            <td className="value">{candidate.instagram}</td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-md-4 hidden-xs hidden-sm">
                <ul className="profile-info-list">
                  <li className="title">PERSONAL INFORMATION</li>
                  <li>
                    <div className="field">Occupation:</div>
                    {candidate && (
                      <div className="value">{candidate.title}</div>
                    )}
                  </li>
                  <li>
                    <div className="field">Skills:</div>
                    {candidate && (
                      <div className="value">{candidate.skills}</div>
                    )}
                  </li>
                  {/* <li>
                    <div className="field">Birth of Date:</div>
                    <div className="value">1989/11/04</div>
                  </li> */}
                  {/* <li>
                    <div className="field">Country:</div>
                    <div className="value">San Francisco</div>
                  </li> */}
                  <li>
                    <div className="field">Langauges</div>
                    {candidate && (
                      <div className="value">{candidate.languages}</div>
                    )}
                  </li>
                  <li>
                    <div className="field">Hobbies</div>
                    {candidate && (
                      <div className="value">{candidate.hobbies}</div>
                    )}
                  </li>
                  <li>
                    <div className="field">Desired Position</div>
                    {candidate && (
                      <div className="value">{candidate.desiredPosition}</div>
                    )}
                  </li>
                  <li>
                    <div className="field">Expected Salary</div>
                    {candidate && (
                      <div className="value">{candidate.expectedSalary}</div>
                    )}
                  </li>
                  <li>
                    <div className="field">Address:</div>
                    <div className="value">
                      {candidate && (
                        <address className="m-b-0">{candidate.address}</address>
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

const tdStyle = {
  paddingRight: "3%",
};

const td2Style = {
  paddingRight: "7%",
};

const td3Style = {
  paddingRight: "6%",
};

const td4Style = {
  paddingRight: "10%",
};

const valueStyle = {
  fontFamily: "Candara",
};
// const changePhotoStyle = {
//   width: "100%",
//   fontSize: 12,
//   color: "white",
// };

// const divStyle = {
//   width: "83%",
//   marginTop: "20%",
//   paddingBottom: 6,
//   paddingTop: 1,
//   paddingRight: 0,
//   paddingLeft: 12,
//   borderRadius: 8,
// };
export default IndividualProfile;
