import React from "react";
import Logo from "../LandingPageComponents/Logo";
import { Link } from "react-router-dom";


function CandidateNavBar() {
  return (
    <div style={maindivStyle}>
      <div style={logoStyle}>
        <Logo  />
      </div>
      <div style={navdiv}>
      {/* replace it with profile icon */}
        <Link to="#" style={linkStyle}>My Profile </Link> 
        &nbsp; &nbsp;
        <h5>|</h5>
        &nbsp; &nbsp;
        <Link to="/" style={linkStyle}>Logout</Link>
      </div>
    </div>
  );
}



const navdiv = {
  display: "flex",
  justifyContent: "space-around",
  marginRight:'4%'
};

const maindivStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1%",
  backgroundColor:'#F0FFF0',
  paddingTop:'1%',
  marginTop:'0%',
  paddingBottom:'1%'
};

const logoStyle = {
  marginLeft: "4%",
};

const linkStyle = {
  fontFamily: "Zapf Chancery, cursive",
};



export default CandidateNavBar;
