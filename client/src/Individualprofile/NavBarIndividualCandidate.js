import React, { useContext } from "react";
import Logo from "../LandingPageComponents/Logo";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import Badge from "react-bootstrap/Badge";

function NavBarEditProfileCan() {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = () => {
    history.push("/ChatScreen");
  };

  const handleClick1 = () => {
    history.push(`/EditProfileCandidate/${user._id}`);
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
          Messages
        </Badge>
        &nbsp; &nbsp;
        <Badge style={badg} variant="primary" onClick={handleClick1}>
          Edit Profile
        </Badge>
        &nbsp; &nbsp;
        <Badge style={badg} variant="primary" onClick={handleClick2}>
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
  height: 30,
  width: 120,
  fontSize: 15,
  cursor: "pointer",
  borderRadius: 12,
  padding: 7,
  alignText: "center",
};

export default NavBarEditProfileCan;
