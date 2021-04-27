import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
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

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleDropDown = (e) => {
    e.preventDefault();
    setState({ ...state, owner: e.target.value });
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
  const eyeIcon = passwordShown ? (<FontAwesomeIcon icon={faEye} />
    
  ) : (
    <span className="fas fa-eye-slash"></span>
  );
  const eye = <FontAwesomeIcon icon={faEye} />;
 
  return (
    <div className="wrapper" style={formStyle}>
      <form action="#">
        <div className="h5 font-weight-bold text-center mb-3">Registration</div>

        <div className="form-group d-flex align-items-center">
          <div className="icon">
            <span className="far fa-envelope"></span>
          </div>
          <input
            autocomplete="off"
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={state.email}
          />
        </div>

        <div className="form-group d-flex align-items-center">
          <div className="icon">
            <span className="fa fa-lock"></span>
          </div>
          <input
            autocomplete="off"
            className="form-control"
            placeholder="Creat password"
            type={passwordShown ? "text" : "password"}
            name="password"
            onChange={handleChange}
            value={state.password}
          />
          <div className="icon btn">
            <span onClick={togglePasswordVisiblity}>{eyeIcon}</span>
           
          </div>
        </div>

        <div className="form-group d-flex align-items-center">
          <div className="icon">
            <span className="fas fa-key"></span>
          </div>
          <input
            autocomplete="off"
            className="form-control"
            placeholder="Repeat password"
            type="password"
            onChange={handleChange}
            name="confirmationPassword"
            value={state.confirmationPassword}
          />
        </div>
        <div className="form-group d-flex align-items-center">
          <div className="icon">
            <span className="fas fa-building"></span>
          </div>
          <select
            className="form-control"
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

        <div
          className="btn btn-primary mb-3"
          onClick={submitDetails}
          disabled={isInvalid}
          style={submitStyle}
        >
          Signup
        </div>
        <div className="terms mb-2" style={termsStyle}>
          By clicking "Signup", you acknowledge that you have read the
          <Link to="#">Privacy Policy</Link> and agree to the
          <Link to="#">Terms of Service</Link>.
        </div>
        <div className="connect border-bottom mt-4 mb-4" style={orStyle}></div>
        <ul className="p-0 social-links">
          <li>
            <Link to="#">
              <span className="fab fa-facebook-f"></span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="fab fa-google"></span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="fab fa-github"></span>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

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

const formStyle = {
  marginBottom: "12%",
  marginTop: "3%",
};

const termsStyle = {
  color: "gray",
};

const orStyle = {
  background: "-webkit-linear-gradient(right, #acabcc, #55b6ee)",
};

const submitStyle = {
  marginLeft: "25%",
  marginTop: "2%",
  marginBottom: "4%",
};
export default RegistrationForm;
