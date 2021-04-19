import React, { useContext } from "react";
import Logo from "../LandingPageComponents/Logo";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import Badge from "react-bootstrap/Badge";

function IndividualCandidateNavBar() {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
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

    // <div style={maindivStyle}>
    //   <div style={logoStyle}>
    //     <Logo />
    //   </div>
    //   <div style={navdiv}>
    //     <Link to="" onClick={handleClick} style={linkStyle}>
    //       My Profile
    //     </Link>
    //     &nbsp; &nbsp;
    //     <h5>|</h5>
    //     &nbsp; &nbsp;
    //     <Link to="/" style={linkStyle}>
    //       Logout
    //     </Link>
    //   </div>
    // </div>
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

export default IndividualCandidateNavBar;
