import React from "react";
import Logo from "../LandingPageComponents/Logo";
import { Link } from "react-router-dom";


function CandidateNavBar() {
  return (
    <div style={maindivStyle}>
      <div>
        <Logo />
      </div>
      <div style={navdiv}>
      {/* replace it with profile icon */}
        <Link to="#">My Profile </Link> 
        &nbsp; &nbsp;
        <h5>|</h5>
        &nbsp; &nbsp;
        <Link to="/">Logout</Link>
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

export default CandidateNavBar;
