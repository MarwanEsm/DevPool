import React from "react";
import Logo from "../LandingPageComponents/Logo";
import { useHistory } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

function ForgetPasswordNavBar() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  const handleClick2 = () => {
    history.push("/LoginPage");
  };
  return (
    <div style={maindivStyle}>
      <div>
        <Logo />
      </div>
      <div style={navdiv}>
        <Badge style={badg} variant="primary" onClick={handleClick}>
          <i className="fa fa-home" aria-hidden="true" />
          &nbsp; Home
        </Badge>
        &nbsp; &nbsp;
        <Badge style={badg} variant="primary" onClick={handleClick2}>
          <i className="fa fa-sign-in" aria-hidden="true" />
          &nbsp; Log in
        </Badge>
      </div>
    </div>
  );
}

const maindivStyle = {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "1%",
  marginTop: "0%",
  marginRight: "3%",
  marginLeft: "1.3%",
};
const navdiv = {
  display: "flex",
  justifyContent: "space-between",
};

const badg = {
  height: "80%",
  width: 100,
  fontSize: 14,
  cursor: "pointer",
  borderRadius: 12,
  paddingTop: 8,
  alignText: "center",
  fontFamily: "	Candara",
};

export default ForgetPasswordNavBar;
