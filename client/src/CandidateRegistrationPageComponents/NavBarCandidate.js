import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Logo from "../LandingPageComponents/Logo";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";

function CandidateNavBar() {
  const { user } = useContext(AuthContext);
  const { candidate } = useContext(CandidatesContext);
  const history = useHistory();

  const handleClick = () => {
    console.log(user);
    if (user.isRegistered ===true && user.owner==='candidate') {
      history.push(`/IndividualProfile/${user._id}`);
    } else {
      alert("Please register as candidate");
    }
  };

  const handleClick1 = () => {
    history.push("/");
  };

  return (
    <div style={maindivStyle}>
      <div>
        <Logo />
      </div>
      <div style={navdiv}>
        <Badge style={badg} variant="primary" onClick={handleClick}>
          My Profile
        </Badge>
        &nbsp; &nbsp;
        <Badge style={badg} variant="primary" onClick={handleClick1}>
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

export default CandidateNavBar;
