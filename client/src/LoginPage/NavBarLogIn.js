import React from "react";
import Logo from "../LandingPageComponents/Logo";
import { Link } from "react-router-dom";

function LoginNavBar() {
  return (
    <div style={maindivStyle}>
      <div>
        <Logo />
      </div>
      <div style={navdiv}>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

const maindivStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1%",
  marginLeft: "2%",
  marginRight: "2%",
};

const navdiv = {
  display: "flex",
  justifyContent: "space-around",
};

export default LoginNavBar;
