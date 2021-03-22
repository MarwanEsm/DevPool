import React from "react";
import Logo from "../LandingPageComponents/Logo";
import { Link } from "react-router-dom";

function LoginNavBar() {
  return (
    <div style={maindivStyle}>
      <div style={logoStyle}>
        <Logo  />
      </div>
      <div style={navdiv}>
        <Link to="/" style={linkStyle}>Home</Link>
      </div>
    </div>
  );
}


const maindivStyle = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor:'#F0FFF0',
  paddingTop:'1%',
  paddingBottom:'1%',
  marginTop:'0%'
};

const navdiv = {
  paddingRight:'4%'
};


const logoStyle={
  paddingLeft: "3%",
}

const linkStyle={
  fontFamily:'Zapf Chancery, cursive',
}

export default LoginNavBar;
