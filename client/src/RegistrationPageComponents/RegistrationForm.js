import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "./RegistrationStyle.css";

function RegistrationForm() {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
    owner: "candidate",
    checked: false,
  });

  const isInvalid =
    state.email === "" ||
    state.password === "" ||
    state.confirmationPassword !== state.password ||
    state.owner === "" ||
    state.checked === false;

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleDropDown = (e) => {
    e.preventDefault();
    setState({ ...state, owner: e.target.value });
  };

  const makeItChecked = (e) => {
    e.preventDefault();
    setState({ ...state, checked: !state.checked });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/auth/register", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then(history.push("/LoginPage"));
  };

  return (
    <div class="container" style={divStyle}>
      <p class="text-center"></p>
      <div class="card bg-light">
        <article class="card-body mx-auto" style={articleStyle}>
          <h4 class="card-title mt-3 text-center">Create Account</h4>
          <p class="text-center">Get started with your free account</p>
          <form>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <input
                name="email"
                class="form-control"
                placeholder="Email address"
                type="email"
                onChange={handleChange}
                value={state.email}
                style={labelStyle}
              />
            </div>
            <div class="form-group input-group">
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  class="form-control"
                  placeholder="Creat password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={state.password}
                  style={labelStyle}
                />
              </div>

              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  class="form-control"
                  placeholder="Repeat password"
                  type="password"
                  onChange={handleChange}
                  name="confirmationPassword"
                  value={state.confirmationPassword}
                  style={labelStyle}
                />
              </div>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-building"></i>
                </span>
              </div>
              <select
                class="form-control"
                name="owner"
                as="select"
                onChange={handleDropDown}
                defaultValue="Choose..."
              >
                <option value="candidate">Candidate</option>
                <option value="employer">Employer</option>
              </select>
            </div>

            <Form.Group id="formGridCheckbox">
              <div class="custom-control custom-checkbox custom-control-inline">
                <input
                  id="chk1"
                  type="checkbox"
                  name="chk"
                  class="custom-control-input"
                  onClick={makeItChecked}
                  checked='checked'
                  
                />
                <label
                  for="chk1"
                  class="custom-control-label consent"
                  style={label1Style}
                >
                  Accept Terms and Condition
                </label>
              </div>
            </Form.Group>

            <button
              class="btn btn-primary btn-block"
              onClick={submitDetails}
              disabled={isInvalid}
            >
              Create Account
            </button>

            <p class="text-center">
              Have an account? <a href="/LoginPage">Log In</a>
            </p>
          </form>
        </article>
      </div>
    </div>
  );
}

const divStyle = {
  marginTop: "4%",
};

const buttonStyle = {
  fontFamily: "Courier New, monospace",
  fontSize: 13,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  width: "40%",
  backgroundColor: "#1565c0",
  color: "white",
  marginBottom: "5%",
  marginLeft: "30%",
};

const labelStyle = {
  fontFamily: "Andale Mono, monospace",
  fontSize: 16,

  color: "#666666",
};

const label1Style = {
  fontFamily: "Andale Mono, monospace",
  fontSize: 14,
  textDecoration: "underline",
  color: "#666666",
};

const articleStyle = {
  width: 400,
};

const selectStyle = {
  width: 400,
};

export default RegistrationForm;
