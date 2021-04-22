import React, { useState } from "react";
import Form from "react-bootstrap/Form";

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

  const [checked, setChecked] = useState();

  const submitDetail = (e) => {
    e.preventDefault();

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
                      style={inputStyle}
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
                      style={inputStyle}
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
                      style={inputStyle}
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
                      style={inputStyle}
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
                      style={inputStyle}
                    />
                  </div>
                </div>
                <Form.Group id="formGridCheckbox" style={div1Style}>
                  <div
                    class="custom-control custom-checkbox custom-control-inline"
                    style={checkBox}
                  >
                    <input
                      id="chk1"
                      type="checkbox"
                      name="chk"
                      class="custom-control-input"
                      defaultChecked={false}
                      value={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    <label
                      for="chk1"
                      class="custom-control-label consent"
                      style={label2Style}
                    >
                      Agree to terms and conditions
                    </label>
                  </div>
                </Form.Group>
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
};

const div1Style = {
  marginLeft: "30%",
  marginTop: "3%",
};
export default EmployerForm;
