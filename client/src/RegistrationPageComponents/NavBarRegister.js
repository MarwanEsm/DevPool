import React from "react";
import Logo from "../LandingPageComponents/Logo";
import { Link } from "react-router-dom";

function RegissterNavBar() {
  return (
    <div style={maindivStyle}>
      <div style={logoStyle}>
        <Logo />
      </div>
      <div style={navdiv}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        &nbsp; &nbsp;
        <h5>|</h5>
        &nbsp; &nbsp;
        <Link to="/LoginPage" style={linkStyle}>
          Login
        </Link>
      </div>
    </div>
  );
}

const maindivStyle = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#F0FFF0",
  paddingTop: "1%",
  marginTop: "0%",
  paddingBottom: "1%",
};

const navdiv = {
  display: "flex",
  justifyContent: "space-around",
  marginRight: "3%",
};

const logoStyle = {
  marginRight: "43%",
};

const linkStyle = {
  fontFamily: "Zapf Chancery, cursive",
};



export default RegissterNavBar;
