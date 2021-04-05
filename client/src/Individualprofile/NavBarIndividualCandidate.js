import React, { useContext } from "react";
import Logo from "../LandingPageComponents/Logo";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthContextProvider";


function NavBarEditProfileCan() {
  const { user } = useContext(AuthContext);
  return (
    <div style={maindivStyle}>
      <div style={logoStyle}>
        <Logo />
      </div>
      <div style={navdiv}>
      <Link to='/ChatScreen' style={linkStyle}>
          
          Messages
        </Link>
        &nbsp; &nbsp;
        <h5>|</h5>
       <Link to={`/EditProfileCandidate/${user._id}`} style={linkStyle}>
          Edit Profile
        </Link>
        &nbsp; &nbsp;
        <h5>|</h5>
        &nbsp; &nbsp;
        <Link to="/" style={linkStyle}>
          Logout
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
  justifyContent: "space-between",

};

const logoStyle = {
  marginRight: "54%",
};

const linkStyle = {
  fontFamily: "Zapf Chancery, cursive",
};



export default NavBarEditProfileCan;