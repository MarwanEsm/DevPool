import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function RegistrationForm() {
  const history = useHistory();
  const [state, setState] = useState({
    // firstName: "",
    // lastName: "",
    email: "",
    password: "",
    confirmationPassword: "",
    // city: "",
    // country: "",
    owner: "candidate",
    checked: false,
  });

  const isInvalid =
    // state.firstName === "" ||
    // state.lastName === "" ||
    state.email === "" ||
    state.password === "" ||
    state.confirmationPassword !== state.password ||
    // state.city === "" ||
    // state.country === "" ||
    state.owner === "" ||
    state.checked === false;

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleDropDown = (e) => {
    e.preventDefault();
    setState({ ...state, owner: e.target.value });
  };

  const makeItChecked = (e) => {
    e.preventDefault();
    setState({ ...state, checked: !state.checked });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/auth/register", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then(history.push("/LoginPage"));
  };

  return (
    <div>
      <div style={divStyle}>
        <Form>
          {/* <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                onChange={handleChange}
                value={state.firstName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                onChange={handleChange}
                value={state.lastName}
              />
            </Form.Group>
          </Form.Row> */}
          {/* <br /> */}
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
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                name="confirmationPassword"
                onChange={handleChange}
                value={state.confirmationPassword}
                style={inputtStyle}
              />
            </Form.Group>

            <br />
            {/* <Form.Row> */}
            {/* <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                onChange={handleChange}
                value={state.city}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                onChange={handleChange}
                value={state.country}
              />
            </Form.Group> */}

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label style={textStyle}>Register as</Form.Label>
              <Form.Control
                name="owner"
                as="select"
                onChange={handleDropDown}
                defaultValue="Choose..."
                style={inputtStyle}
              >
                <option value="candidate">Candidate</option>
                <option value="employer">Employer</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              defaultChecked={state.checked}
              onClick={makeItChecked}
              label="Agree to Terms and Conditions"
              style={agreeTextStyle}
            />
          </Form.Group>
          <br />
          <Button
            variant="primary"
            onClick={submitDetails}
            disabled={isInvalid}
            style={buttonStyle}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

const divStyle = {
  marginTop: "4%",
  marginLeft: "27%",
  // marginRight: "18%",
  width: "40%",
};

const textStyle = {
  fontFamily: "Zapf Chancery, cursive",
};

const agreeTextStyle = {
  fontFamily: "Courier, monospace",
  fontSize: 14,
  fontWeight: "bold",
};

const inputtStyle = {
  borderRadius: 14,
  border: "bold",
  borderColor: "black",
  fontFamily: "Courier, monospace",
  fontSize: 15,
};

const buttonStyle = {
  fontFamily: "Courier, monospace",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
};


export default RegistrationForm;
