import React from "react";
import Logo from "../LandingPageComponents/Logo";
import { Link } from "react-router-dom";

function EmployerNavBar() {
  return (
    <div style={maindivStyle}>
      <div style={logoStyle}>
        <Logo />
      </div>
      <div style={navdiv}>
        {/* replace it with profile icon */}
        <Link to="#" /*replace the path*/ style={linkStyle}>Profile </Link>
        &nbsp; &nbsp;
        <h5>|</h5>
        &nbsp; &nbsp;
        <Link to="/" style={linkStyle}>Logout</Link>
      </div>
    </div>
  );
}

const maindivStyle = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#F0FFF0",
  paddingTop: "1%",
  paddingBottom: "1%",
  marginTop: "0%",
};

const navdiv = {
  display: "flex",
  justifyContent: "space-around",
  paddingRight: "4%",
};

const logoStyle = {
  paddingLeft: "3%",
};

const linkStyle = {
  fontFamily: "Zapf Chancery, cursive",
};

export default EmployerNavBar;
