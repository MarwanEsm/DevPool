import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Logo from "../LandingPageComponents/Logo";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
// import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";

function CandidateNavBar() {
  const { user } = useContext(AuthContext);
  // const { candidate } = useContext(CandidatesContext);
  const history = useHistory();

  const handleClick = () => {
    console.log(user);
    history.push(`/IndividualProfile/${user._id}`)

    // if (user.isRegistered == true) {
    //   history.push(`/IndividualProfile/${user._id}`);
    // } else {
    //   alert("Please register as candidate");
    // }
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
        <i class="fa fa-user" />
        &nbsp;
          My Profile
        </Badge>
        &nbsp; &nbsp;
        <Badge style={badg} variant="primary" onClick={handleClick1}>
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

export default CandidateNavBar;
