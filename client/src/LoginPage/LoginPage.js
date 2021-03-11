import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function LoginPage() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const isInvalid = state.email === "" || state.password === "";

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // const submitDetails = (e) => {
  //   e.preventDefault()
  //   alert('Thank you, your details have been sbumitted')

  // };

  return (
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

        {/* <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Owner</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Candidate</option>
              <option>Employer</option>
            </Form.Control>
          </Form.Group> */}

        <Button variant="primary" type="submit" disabled={isInvalid}>
          Login
        </Button>
      </Form>
    </div>
  );
}

const divStyle = {
  marginTop: "6%",
  marginLeft: "18%",
  marginRight: "18%",
};

export default LoginPage;
