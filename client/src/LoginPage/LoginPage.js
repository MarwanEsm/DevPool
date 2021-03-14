import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import LoginNavBar from "./NavBarLogIn";
import { Link, useHistory } from "react-router-dom";
import {UsersContext} from '../ContextProvider/UsersContextProvider';

function LoginPage() {
  const {users} = useContext(UsersContext);
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

  const login = (e) => {
    e.preventDefault(); 
    if (e.target.email === users) {
      fetch("http://localhost:5000/auth/login", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .then(history.push("/CandidatesUserPage"));
    }

  };

  return (
    <div>
      <div>
        <LoginNavBar />
      </div>
      <div style={divStyle}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder=" Email"
                onChange={handleChange}
                value={state.email}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={state.password}
              />
            </Form.Group>
          </Form.Row>
          <br />
          <Button variant="primary" disabled={isInvalid} onClick={login}>
            Login
          </Button>
          <br />
          <br />
          <Form.Group id="link">
            <Link to="/RegistrationPage">
              Don't have an account? Register here{" "}
            </Link>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

const divStyle = {
  marginTop: "4%",
  marginLeft: "18%",
  marginRight: "18%",
};

export default LoginPage;
