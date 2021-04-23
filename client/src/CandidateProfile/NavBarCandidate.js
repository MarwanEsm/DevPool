import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../LandingPageComponents/Logo";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import _ from "lodash";

function CandidatePageNavBar() {
  const { user } = useContext(AuthContext);
  const {
    searchTitle,
    setSearchTitle,
    setSelectLocation,
    candidates,
  } = useContext(CandidatesContext);
  const history = useHistory();

  const handleClick = () => {
    console.log(user);
    history.push(`/EmployerIndividualProfile/${user._id}`);
  };
  const locations = _.uniqBy(candidates, "location");
  console.log(locations);
  const handleClick1 = () => {
    history.push("/");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  };

  const changeLocation = (e) => {
    e.preventDefault();
    setSelectLocation(e.target.value);
  };

  return (
    <div style={maindivStyle}>
      <div>
        <Logo />
      </div>
      <div style={rowdivStyle}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <div style={div1Style}>
              <Form.Control
                as="select"
                defaultValue="all"
                onChange={changeLocation}
                style={selectStyle}
              >
                <option value="all">All</option>
                {candidates.length &&
                  locations.map((candidate) => {
                    return (
                      <option key={candidate._id} value={candidate.location}>
                        {candidate.location}
                      </option>
                    );
                  })}
              </Form.Control>
            </div>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <FormControl
              type="text"
              name="searchTitle"
              placeholder="What"
              className="mr-sm-2"
              value={searchTitle}
              onChange={handleChange}
              style={selectStyle}
            />
          </Form.Group>
        </Form.Row>
      </div>
      <div style={navdiv}>
        <Badge style={badg} variant="primary" onClick={handleClick}>
          <i class="fa fa-user" />
          &nbsp; My Profile
        </Badge>
        &nbsp; &nbsp;
        <Badge style={badg} variant="primary" onClick={handleClick1}>
          <i class="fa fa-sign-out" />
          &nbsp; Log Out
        </Badge>
      </div>
    </div>

    // <div style={maindivStyle}>
    //   <div>
    //     <Logo />
    //   </div>
    //   <div style={rowdivStyle}>
    //     <Form.Row>
    //       <Form.Group as={Col} controlId="formGridCity">
    //         <div style={div1Style}>
    //           <Form.Control
    //             as="select"
    //             defaultValue="all"
    //             onChange={changeLocation}
    //             style={selectStyle}
    //           >
    //             <option value="all">All</option>
    //             {candidates.length &&
    //               candidates.map((candidate) => {
    //                 return (
    //                   <option key={candidate._id} value={candidate.location}>
    //                     {candidate.location}
    //                   </option>
    //                 );
    //               })}
    //           </Form.Control>
    //         </div>
    //       </Form.Group>

    //       <Form.Group as={Col} controlId="formGridCity">
    //         <FormControl
    //           type="text"
    //           name="searchTitle"
    //           placeholder="What"
    //           className="mr-sm-2"
    //           value={searchTitle}
    //           onChange={handleChange}
    //           style={selectStyle}
    //         />
    //       </Form.Group>
    //     </Form.Row>
    //   </div>
    //   <div style={navdiv}>
    //     <Link to= {`/EmployerIndividualProfile/${user._id}`} style={linkStyle}>
    //       My Profile
    //     </Link>
    //     &nbsp; &nbsp;
    //     <h5>|</h5>
    //     &nbsp; &nbsp;
    //     <Link to="/" style={linkStyle}>
    //       Log out
    //     </Link>
    //   </div>
    // </div>
  );
}

const maindivStyle = {
  display: "flex",
  justifyContent: "space-around",
  paddingTop: "1%",
  marginTop: "0%",
  marginLeft: "-0.4%",
};

const div1Style = {
  display: "flex",
  justifyContent: "space-between",
  marginRight: "8%",
};

const rowdivStyle = {
  display: "flex",
  alignItems: "center",
  marginRight: "19%",
};

const navdiv = {
  display: "flex",
  justifyContent: "space-around",
  marginRight: "1%",
};

const selectStyle = {
  borderRadius: 14,
  border: "bold",
  borderColor: "gray",
  fontFamily: "Courier, monospace",
  fontSize: 15,
  fontWeight: "bold",
  color: "#1565c0 ",
};

const badg = {
  height: "53%",
  width: 100,
  fontSize: 14,
  cursor: "pointer",
  borderRadius: 12,
  paddingTop: 8,
  alignText: "center",
  fontFamily: "	Candara",
};

export default CandidatePageNavBar;
