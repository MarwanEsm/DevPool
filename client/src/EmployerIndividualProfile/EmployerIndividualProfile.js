import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import IndividualEmplyoerNavBar from "./NavBarIndividualEmployer";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import Badge from "react-bootstrap/Badge";
import Footer from "../LandingPageComponents/Footer";
import "./EmployerIndividualProfileStyle.css";

function EmployerIndividualProfile() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const [employer, setEmplyoer] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:5000/employer/me`, {
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
        setEmplyoer(data);
      });
  }, []);

  const handleClick1 = () => {
    history.push(`/EditProfileEmployer/${user._id}`);
  };

  return (
    <div>
      <div>
        <IndividualEmplyoerNavBar />
      </div>

      <div>
        <div className="container">
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="account-settings">
                    <div className="user-profile"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-3 " style={header}>
                        Employer Details
                      </h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="fullName">Employer Name</label>
                        {employer && (
                          <p style={pStyle}>{employer.employerName}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="eMail">Website</label>
                        {employer && <p style={pStyle}>{employer.website}</p>}
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="website">Location </label>

                        <div>
                          {employer && (
                            <span>
                              <p style={pStyle}>{employer.location}</p>{" "}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="website">Field Of Business </label>
                        {employer && (
                          <p style={pStyle}>{employer.fieldOfBusiness}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="website">Email</label>
                        {employer && <p style={pStyle}>{employer.email}</p>}
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="website">Phone No.</label>
                        {employer && <p style={pStyle}>{employer.phoneNo}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="row gutters">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group"></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group"></div>
                    </div>
                    <Badge
                      style={badg}
                      variant="primary"
                      onClick={handleClick1}
                    >
                      <i class="fa fa-user-o" aria-hidden="true" />
                      &nbsp; Edit Profile
                    </Badge>{" "}
                  </div>
                </div>
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

const header = {
  fontFamily: "Candara",
  color: "black",
  fontSize: 18,
  fontWeight: "bold",
};

const badg = {
  height: "80%",
  width: 100,
  fontSize: 14,
  cursor: "pointer",
  borderRadius: 12,
  paddingTop: 8,
  paddingBottom: 8,
  alignText: "center",
  fontFamily: "	Candara",
  marginLeft: "45%",
};

const pStyle = {
  fontFamily: "Candara",
  color: "gray",
};

export default EmployerIndividualProfile;
