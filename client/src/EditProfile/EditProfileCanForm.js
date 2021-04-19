import React, { useContext, useState } from "react";
// import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import "./EditProfileStyle.css";

function EditProfieCanForm() {
  // const { user } = useContext(AuthContext);
  const { candidate } = useContext(CandidatesContext);

  const [state, setState] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    console.log(state);
    const token = localStorage.getItem("token");
    console.log(token);

    fetch("http://localhost:5000/candidate/me", {
      method: "put",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(state);
        if (res.success) {
          alert(res.msg);
        } else {
          alert(res.msg);
        }
        console.log(res);
      });
  };

  return (
    <div>
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <div class="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
                <div class="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>

              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 style={header}>Profile Settings</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full Name"
                    name="fullName"
                    onChange={handleChange}
                    value={state.fullName}
                    style={inputtStyle}
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                    value={state.title}
                    style={inputtStyle}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <input
                    class="form-control"
                    placeholder="Hobbies"
                    value=""
                    type="text"
                    name="hobbies"
                    onChange={handleChange}
                    value={state.hobbies}
                    style={inputtStyle}
                  />
                </div>
                <div class="col-md-12" style={div}>
                  <input
                    class="form-control"
                    placeholder="Phone No."
                    type="number"
                    name="phoneNo"
                    onChange={handleChange}
                    value={state.phoneNo}
                    style={inputtStyle}
                  />
                </div>
                <div class="col-md-12" style={div}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Location"
                    type="text"
                    name="location"
                    onChange={handleChange}
                    value={state.location}
                    style={inputtStyle}
                  />
                </div>
                <div class="col-md-12" style={div}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    name="address"
                    onChange={handleChange}
                    value={state.address}
                    style={inputtStyle}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6" style={div}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Desired Position"
                    name="desiredPosition"
                    onChange={handleChange}
                    value={state.desiredPosition}
                    style={inputtStyle}
                  />
                </div>
                <div class="col-md-6" style={div}>
                  <input
                    class="form-control"
                    placeholder="Expected Salary"
                    type="number"
                    name="expectedSalary"
                    onChange={handleChange}
                    value={state.expectedSalary}
                    style={inputtStyle}
                  />
                </div>

                <div class="col-md-6" style={div}>
                  <input
                    class="form-control"
                    placeholder="Github"
                    type="text"
                    name="github"
                    onChange={handleChange}
                    value={state.github}
                    style={inputtStyle}
                  />
                </div>

                <div class="col-md-6" style={div}>
                  <input
                    class="form-control"
                    placeholder="Website"
                    type="text"
                    name="website"
                    onChange={handleChange}
                    value={state.website}
                    style={inputtStyle}
                  />
                </div>

                <div class="col-md-6" style={div}>
                  <input
                    class="form-control"
                    placeholder="Twitter"
                    value={state.twitter}
                    type="text"
                    name="twitter"
                    onChange={handleChange}
                    style={inputtStyle}
                  />
                </div>

                <div class="col-md-6" style={div}>
                  <input
                    class="form-control"
                    placeholder="Facebook"
                    type="text"
                    name="facebook"
                    onChange={handleChange}
                    value={state.facebook}
                    style={inputtStyle}
                  />
                </div>

                <div class="col-md-6" style={div}>
                  <input
                    class="form-control"
                    placeholder="Instagram"
                    type="text"
                    name="instagram"
                    onChange={handleChange}
                    value={state.instagram}
                    style={inputtStyle}
                  />
                </div>

                <div class="col-md-6" style={div}>
                  <input
                    class="form-control"
                    placeholder="Languages"
                    type="text"
                    name="languages"
                    onChange={handleChange}
                    value={state.languages}
                    style={inputtStyle}
                  />
                </div>
              </div>
              <div class="mt-5 text-center">
                <Button
                  variant="primary"
                  onClick={submitDetails}
                  style={buttonStyle}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <span>Edit Experience</span>
                <span class="border px-3 p-1 add-experience">
                  <i class="fa fa-plus"></i>&nbsp;Experience
                </span>
              </div>
              <div class="col-md-12" style={div1}>
                <input
                  type="text"
                  class="form-control"
                  placeholder="experience"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Additional Details</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="additional details"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputtStyle = {
  borderRadius: 14,
};

const buttonStyle = {
  fontFamily: "Courier, monospace",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
};

const div = {
  marginTop: "2%",
};

const div1 = {
  marginTop: "8%",
};

const header = {
  fontFamily: "Trebuchet MS, sans-serif",
  marginLeft: "30%",
  fontSize: 20,
  marginBottom: "4%",
  textDecoration: "underline",
};

export default EditProfieCanForm;
