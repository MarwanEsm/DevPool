import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./RegistrationStyle.css";

function RegistrationForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
    owner: "candidate",
    checked: false,
  });

  const [checked, setChecked] = useState();

  const isInvalid =
    state.email === "" ||
    state.password === "" ||
    state.confirmationPassword !== state.password ||
    state.owner === "" ||
    !checked;

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
      .then((res) => {
        console.log(res);
        if (res.success) {
          alert(res.msg);
        } else {
          alert(res.msg);
        }
      });
  };
  console.log(state);
  return (
    <div class="wrapper" style={formStyle}>
      <form action="#">
        <div class="h5 font-weight-bold text-center mb-3">Registration</div>

        <div class="form-group d-flex align-items-center">
          <div class="icon">
            <span class="far fa-envelope"></span>
          </div>
          <input
            autocomplete="off"
            type="email"
            class="form-control"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={state.email}
          />
        </div>

        <div class="form-group d-flex align-items-center">
          <div class="icon">
            <span class="fa fa-lock"></span>
          </div>{" "}
          <input
            autocomplete="off"
            class="form-control"
            placeholder="Creat password"
            type="password"
            name="password"
            onChange={handleChange}
            value={state.password}
          />
          <div class="icon btn">
            <span class="fas fa-eye-slash"></span>
          </div>
        </div>

        <div class="form-group d-flex align-items-center">
          <div class="icon">
            <span class="fas fa-key"></span>
          </div>{" "}
          <input
            autocomplete="off"
            class="form-control"
            placeholder="Repeat password"
            type="password"
            onChange={handleChange}
            name="confirmationPassword"
            value={state.confirmationPassword}
          />
        </div>
        <div class="form-group d-flex align-items-center">
          <div class="icon">
            <span class="fas fa-building"></span>
          </div>
          <select
            class="form-control"
            name="owner"
            as="select"
            onChange={handleDropDown}
            defaultValue="Choose..."
            style={label1Style}
          >
            <option value="candidate" style={optionStyle}>
              Candidate
            </option>
            <option value="employer" style={optionStyle}>
              Employer
            </option>
          </select>
        </div>

        <Form.Group id="formGridCheckbox">
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

        <div
          class="btn btn-primary mb-3"
          onClick={submitDetails}
          disabled={isInvalid}
        >
          Signup
        </div>
        <div class="terms mb-2" style={termsStyle}>
          By clicking "Signup", you acknowledge that you have read the
          <a href="#">Privacy Policy</a> and agree to the
          <a href="#">Terms of Service</a>.
        </div>
        {/* <div class="connect border-bottom mt-4 mb-4" style={orStyle}></div> */}
        <ul class="p-0 social-links">
          <li>
            <a href="#">
              <span class="fab fa-facebook-f"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="fab fa-google"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="fab fa-github"></span>
            </a>
          </li>
        </ul>
      </form>
    </div>
  );
}

const divStyle = {
  marginTop: "4%",
  width: "30% ",
};

const label2Style = {
  fontFamily: "Candara",
  fontSize: 13,
  color: "white",
};

const label1Style = {
  fontSize: 13,
};

const optionStyle = {
  color: "gray",
};

const checkBox = {
  marginTop: "1%",
  marginBottom: "6%",
};
const articleStyle = {
  width: "90%",
};

const formStyle = {
  marginBottom: "12%",
  marginTop:'3%'
};

const termsStyle={
  color:'gray'
}


const orStyle ={
  background: '-webkit-linear-gradient(right, #acabcc, #55b6ee)'

}


export default RegistrationForm;
