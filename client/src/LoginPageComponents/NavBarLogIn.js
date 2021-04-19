import React from "react";
import { useHistory } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Logo from "../LandingPageComponents/Logo";

function LoginNavBar() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div style={maindivStyle}>
      <div>
        <Logo />
      </div>
      <div style={navdiv}>
        <Badge style={badg} variant="primary" onClick={handleClick}>
          Home
        </Badge>
      </div>
    </div>
  );
}

const badg = {
  height: 30,
  width: 120,
  fontSize: 15,
  cursor: "pointer",
  borderRadius: 12,
  padding: 7,
  alignText: "center",
};

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

export default LoginNavBar;
