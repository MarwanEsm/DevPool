import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {serverURL} from '../config'

function EmployerForm() {
  const [state, setState] = useState({
    employerName: "",
    website: "",
    location: "",
    fieldOfBusiness: "",
    email: "",
    phoneNo: "",
  
  });

  const isInvalid =
    state.employerName === "" ||
    state.website === "" ||
    state.location === "" ||
    state.fieldOfBusiness === "" ||
    state.email === "" ||
    state.phoneNo === "";
 

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const [checked, setChecked] = useState();

  const submitDetail = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    fetch(`${serverURL}employer/new`, {
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

  return (
    <div className="container register" style={divStyle}>
      <div className="row">
        <div className="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>Welcome</h3>
          <p>You are 30 seconds away from entering the best hiring website!</p>

          <br />
        </div>
        <div className="col-md-9 register-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 className="register-heading" style={header}>
                Register as Employer
              </h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Employer Name *"
                      onChange={handleChange}
                      style={inputStyle}
                      name="employerName"
                      value={state.employerName}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Website *"
                      onChange={handleChange}
                      value={state.website}
                      style={inputStyle}
                      name="website"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Location *"
                      type="text"
                      name="location"
                      onChange={handleChange}
                      style={inputStyle}
                      value={state.location}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Field Of Business *"
                      type="text"
                      name="fieldOfBusiness"
                      onChange={handleChange}
                      style={inputStyle}
                      value={state.fieldOfBusiness}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Email *"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      style={inputStyle}
                      value={state.email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Phone No. *"
                      type="number"
                      name="phoneNo"
                      onChange={handleChange}
                      value={state.phoneNo}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <Form.Group id="formGridCheckbox" style={div1Style}>
                  <div
                    className="custom-control custom-checkbox custom-control-inline"
                    style={checkBox}
                  >
                    <input
                      id="chk1"
                      type="checkbox"
                      name="chk"
                      className="custom-control-input"
                      defaultChecked={false}
                      value={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    <label
                      for="chk1"
                      className="custom-control-label consent"
                      style={label2Style}
                    >
                      Agree to terms and conditions
                    </label>
                  </div>
                </Form.Group>
                <input
                  type="submit"
                  className="btnRegister"
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

const submitStyle = {
  marginLeft: "40%",
  paddingBottom: 4,
  paddingTop: 3,
  marginTop: "1%",
};

const divStyle = {
  marginTop: "4%",
  marginBottom: "8%",
};

const inputStyle = {
  borderRadius: 20,
  fontFamily: "Candara",
  fontSize: 14,
};

const header = {
  fontFamily: "Trebuchet MS, sans-serif",
  fontSize: 24,
};

const checkBox = {
  marginTop: "8%",
};

const label2Style = {
  fontFamily: "Candara",
  fontSize: 13,
  color: "black",
  textDecoration:'underline'
};

const div1Style = {
  marginLeft: "30%",
  marginTop: "3%",
};


export default EmployerForm;
