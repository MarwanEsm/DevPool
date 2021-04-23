import React from "react";
import Logo from "../LandingPageComponents/Logo";
import { useHistory } from "react-router-dom";
// import { AuthContext } from "../ContextProvider/AuthContextProvider";
import Badge from "react-bootstrap/Badge";


function NavBarEditProfileCan() {
  // const { user } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = () => {
    history.push("/ChatScreen");
  };

  const handleClick2 = () => {
    history.push("/");
  };

  return (
    <div style={maindivStyle}>
      <div>
        <Logo />
      </div>
      <div style={navdiv}>
        <Badge style={badg} variant="primary" onClick={handleClick}>
        <i class="fa fa-envelope" aria-hidden="true"/> 
        &nbsp;
          Messages
        </Badge>
        &nbsp; &nbsp;
        <Badge style={badg} variant="primary" onClick={handleClick2}>
        <i class="fa fa-sign-out" aria-hidden="true"/> 
        &nbsp;
          Log out
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
  height: '80%',
  width: 100,
  fontSize: 14,
  cursor: "pointer",
  borderRadius: 12,
  paddingTop: 8,
  alignText: "center",
  fontFamily: "	Candara",
};

export default NavBarEditProfileCan;
