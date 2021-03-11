import React from "react";
import Logo from "../LandingPageComponents/Logo";
import { Link } from "react-router-dom";


function RegissterNavBar() {
  return (
    <div style={maindivStyle}>
      <div>
        <Logo />
      </div>
      <div style={navdiv}>
        <Link to="/">Home</Link>
        &nbsp; &nbsp;
        <h5>|</h5>
        &nbsp; &nbsp;
        <Link to="/LoginPage">Login</Link>
      </div>
    </div>
  );
}

const maindivStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1%",
  marginLeft :'2%',
  marginRight:'2%'
};

const navdiv = {
  display: "flex",
  justifyContent: "space-around",
};

export default RegissterNavBar;
