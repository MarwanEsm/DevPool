import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import { serverURL } from "../config";
import "./ForgetPasswordFormStyle.css";

function ForgetPasswordForm() {
  const [state, setState] = useState({
    email: "",
    // newPassword: "",
    // repeatPassword: "",
  });

  const isInvalid = state.email === "";
  // state.newPassword === "" ||
  // state.repeatPassword !== state.newPassword;

  // const [passwordShown, setPasswordShown] = useState(false);
  // const togglePasswordVisiblity = () => {
  //   setPasswordShown(passwordShown ? false : true);
  // };

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value)
    // setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    console.log(state);
    const token = localStorage.getItem("token");
    console.log(token);

    fetch(`${serverURL}auth/forgotpassword`, {
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

  // const eyeIcon = passwordShown ? (
  //   <FontAwesomeIcon icon={faEye} />
  // ) : (
  //   <span className="fas fa-eye-slash"></span>
  // );
  // const eye = <FontAwesomeIcon icon={faEye} />;

  return (
    <div className="wrapper" style={formStyle}>
      <form action="submit">
        <div className="h5 font-weight-bold text-center mb-3">
          Forgot Password
        </div>
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
        {/* <div className="form-group d-flex align-items-center">
          <div className="icon">
            <span className="fa fa-lock"></span>
          </div>
          <input
            autocomplete="off"
            className="form-control"
            placeholder="New password"
            type={passwordShown ? "text" : "password"}
            name="newPassword"
            onChange={handleChange}
            value={state.newPassword}
          />
          <div className="icon btn">
            <span onClick={togglePasswordVisiblity}>{eyeIcon}</span>
          </div>
        </div> */}

        {/* <div className="form-group d-flex align-items-center">
          <div className="icon">
            <span className="fas fa-key"></span>
          </div> */}
        {/* <input
            autocomplete="off"
            className="form-control"
            placeholder="Repeat password"
            type="password"
            onChange={handleChange}
            name="repeatPassword"
            value={state.repeatPassword}
          /> */}
        {/* </div> */}

        <div
          className="btn btn-primary mb-3"
          onClick={submitDetails}
          disabled={isInvalid}
          style={submitStyle}
        >
          Submit
        </div>
      </form>
    </div>
  );
}

const formStyle = {
  marginBottom: "12%",
  marginTop: "7%",
};

const submitStyle = {
  marginLeft: "25%",
  marginTop: "2%",
  marginBottom: "4%",
};

export default ForgetPasswordForm;
