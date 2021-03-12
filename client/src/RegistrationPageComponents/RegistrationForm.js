import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function RegistrationForm() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmationPassword :'',
    city: "",
    country: "",
  });

  const isInvalid = 
    state.firstName ==="" ||
    state.lastName ===""||
    state.email=== ""||
    state.password=== ""||
    state.confirmationPassword !== state.password ||
    state.city=== ""||
    state.country=== ""

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // const submitDetails = (e) => {
  //   e.preventDefault()
  //   alert('Thank you, your details have been sbumitted')


  // };

  return (
    <div>
    <div style={divStyle}>
      <Form method = 'POST' action ='http://localhost:5000/auth/register'>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder=" First Name"
              onChange={handleChange}
              value={state.firstName}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder=" Last Name"
              onChange={handleChange}
              value={state.lastName}
            />
          </Form.Group>
        </Form.Row>

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

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              name="confirmationPassword"
              placeholder="Password"
              onChange={handleChange}
              value={state.confirmationPassword}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              value={state.city}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleChange}
              value={state.country}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Register as</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Candidate</option>
              <option>Employer</option>
            </Form.Control>
          </Form.Group> 
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isInvalid}>
          Submit
        </Button>
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






export default RegistrationForm;