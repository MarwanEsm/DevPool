import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import LoginNavBar from "./NavBarLogIn";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import Footer from "../LandingPageComponents/Footer";

const LoginPage = () => {
  const { setUser } = useContext(AuthContext);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const isInvalid = state.email === "" || state.password === "";

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  function loginUser(e) {
    e.preventDefault();

    fetch("http://localhost:5000/auth/login", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        setUser(user);

        if (!user) {
          /*alert is not working*/
          alert("User does not exist, please register");
        } else if (user && user.owner === "candidate") {
          history.push("/CandidatesUserPage");
        } else if (user && user.owner === "employer") {
          history.push("/CandidateProfile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div>
        <LoginNavBar />
      </div>
      <div style={divStyle}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={textStyle}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={state.email}
                style={inputtStyle}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                value={state.password}
                style={inputtStyle}
              />
            </Form.Group>
          </Form.Row>
          <br />
          <Button
            variant="primary"
            disabled={isInvalid}
            onClick={loginUser}
            style={buttonStyle}
          >
            Login
          </Button>
          <br />
          <br />
          <Form.Group id="link">
            <Link to="/RegistrationPage" style={linkStyle}>
              Don't have an account? Register here{" "}
            </Link>
          </Form.Group>
        </Form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const divStyle = {
  marginTop: "4%",
  marginLeft: "23%",
  width: "50%",
};

const textStyle = {
  fontFamily: "Zapf Chancery, cursive",
};

const inputtStyle = {
  borderRadius: 14,
  border: "bold",
  borderColor: "black",
  fontFamily: "Courier, monospace",
  fontSize: 15,
};

const linkStyle = {
  fontFamily: "Coronetscript, cursive",
  fontSize: 14,
  color: "gray",
};

const buttonStyle = {
  fontFamily: "Courier, monospace",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
};

export default LoginPage;
