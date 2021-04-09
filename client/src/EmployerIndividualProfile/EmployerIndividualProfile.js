import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import IndividualEmplyoerNavBar from "./NavBarIndividualEmployer";

function EmployerIndividualProfile() {
  const { id } = useParams();
  const history = useHistory();
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

  return (
    <div>
      <div>
        <IndividualEmplyoerNavBar />
      </div>
      <div className="col-md-8">
        <div className="card mb-3" style={rowDetailsStyle}>
          <div className="card-body">
            <div className="row"></div>

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Employer Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.employerName}
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Website</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.website}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Location</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.location}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Field Of Business</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.fieldOfBusiness}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0"> Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.email}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0"> Phone No.</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {employer && employer.phoneNo}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}


const rowDetailsStyle = {
  fontSize: 19,
  fontFamily: "Lucidatypewriter, monospace",
  borderColor: "gray",
  height: "95%",
};
export default EmployerIndividualProfile;
