import React, {useContext} from "react";
import Logo from "../LandingPageComponents/Logo";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import Badge from "react-bootstrap/Badge";

function IndividualEmplyoerNavBar() {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = () => {
    history.push("/CandidateProfile");
  };

  const handleClick1 = () => {
    history.push(`/EditProfileEmployer/${user._id}`);
  };

  const handleClick2 = () => {
    history.push('/');
  };



  return (
    <div style={maindivStyle}>
      <div>
        <Logo />
      </div>
      <div style={navdiv}>
        <Badge style={badg} variant="primary" onClick={handleClick}>
        Candidates
        </Badge>
        &nbsp; &nbsp;
        <Badge style={badg} variant="primary" onClick={handleClick1}>
        Edit Profile
        </Badge>
        &nbsp; &nbsp;
        <Badge style={badg} variant="primary" onClick={handleClick2}>
        Logout
        </Badge>
      </div>
    </div>




















    // <div style={maindivStyle}>
    //   <div style={logoStyle}>
    //     <Logo />
    //   </div>
    //   <div style={navdiv}>
    //   <Link to="/CandidateProfile" style={linkStyle}>
    //      Candidates
    //     </Link>
    //     &nbsp; &nbsp;
    //     <h5>|</h5>
    //     &nbsp; &nbsp;
    //     <Link to={`/EditProfileEmployer/${user._id}`} style={linkStyle}>
    //       Edit Profile
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



export default IndividualEmplyoerNavBar;
