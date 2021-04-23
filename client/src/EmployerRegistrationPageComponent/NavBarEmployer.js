import React,{useContext} from "react";
import Logo from "../LandingPageComponents/Logo";
import { useHistory } from "react-router-dom";
import { EmployerContext } from "../ContextProvider/EmployerContextProvider";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import Badge from "react-bootstrap/Badge";

function EmployerNavBar() {
  const { user } = useContext(AuthContext);
  const { employer } = useContext(EmployerContext);
  const history = useHistory();
  console.log(user);

  const handleClick=()=>{
    if (employer) {
    history.push(`/EmployerIndividualProfile/${user._id}`);
  } else {
    alert("Please register as employer");
  }
  }
  


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
        <i className="fa fa-user" />
        &nbsp;
          My Profile
        </Badge>
        &nbsp; &nbsp;
        <Badge style={badg} variant="primary" onClick={handleClick1}>
        <i className="fa fa-sign-out" aria-hidden="true"/> 
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

export default EmployerNavBar;
