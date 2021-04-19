import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function EmployerForm() {
  const [state, setState] = useState({
    employerName: "",
    website: "",
    location: "",
    fieldOfBusiness: "",
    email: "",
    phoneNo: "",
    // checked: false,
  });

  const isInvalid =
    state.employerName === "" ||
    state.website === "" ||
    state.location === "" ||
    state.fieldOfBusiness === "" ||
    state.email === "" ||
    state.phoneNo === "";
  // state.checked === false;

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitDetail = (e) => {
    e.preventDefault();
    var data = new FormData();

    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    fetch("http://localhost:5000/employer/new", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          alert(res.msg);
        } else {
          alert(res.msg);
        }
        console.log(res);
      });
  };

  // const makeItChecked = (e) => {
  //   e.preventDefault();
  //   setState({ ...state, checked: !state.checked });
  // };

  return (
    <div class="container register" style={divStyle}>
      <div class="row">
        <div class="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>Welcome</h3>
          <p>You are 30 seconds away from entering the best hiring website!</p>

          <br />
        </div>
        <div class="col-md-9 register-right">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 class="register-heading" style={header}>
                Register as Employer
              </h3>
              <div class="row register-form">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Employer Name *"
                      onChange={handleChange}
                      style={inputStyle}
                      name="employerName"
                      value={state.employerName}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Website *"
                      onChange={handleChange}
                      value={state.website}
                      name="website"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Location *"
                      type="text"
                      name="location"
                      onChange={handleChange}
                      value={state.location}
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Field Of Business *"
                      type="text"
                      name="fieldOfBusiness"
                      onChange={handleChange}
                      value={state.fieldOfBusiness}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Email *"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={state.email}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Phone No. *"
                      type="number"
                      name="phoneNo"
                      onChange={handleChange}
                      value={state.phoneNo}
                    />
                  </div>
                </div>
                {/* <Form.Group id="formGridCheckbox">
                  <input
                    type="radio"
                    defaultChecked={state.checked}
                    onClick={makeItChecked}
                  />{" "}
                  &nbsp;<label>Agree to Terms and Conditions</label>
                </Form.Group> */}
                <input
                  type="submit"
                  class="btnRegister"
                  value="Register"
                  onClick={submitDetail}
                  disabled={isInvalid}
                  style={submitStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const divStyle = {
  marginTop: "5%",
  marginLeft: "17%",
  width: "60%",
};

const inputStyle = {
  borderRadius: 6,
};

const header = {
  fontFamily: "Trebuchet MS, sans-serif",
  fontSize: 24,
};

const submitStyle = {
  marginLeft: "40%",
};

export default EmployerForm;
