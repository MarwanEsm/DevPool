import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function RegistrationForm() {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
    owner: "candidate",
    checked: false,
  });

  const isInvalid =
    state.email === "" ||
    state.password === "" ||
    state.confirmationPassword !== state.password ||
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
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={labelStyle}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={state.email}
                style={selectStyle}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={labelStyle}>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                value={state.password}
                style={selectStyle}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={labelStyle}>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                name="confirmationPassword"
                onChange={handleChange}
                value={state.confirmationPassword}
                style={selectStyle}
              />
            </Form.Group>
            <br />
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label style={labelStyle}>Register as</Form.Label>
              <Form.Control
                name="owner"
                as="select"
                onChange={handleDropDown}
                defaultValue="Choose..."
                style={selectStyle}
              >
                <option value="candidate" style={selectStyle}>
                  Candidate
                </option>
                <option value="employer" style={selectStyle}>
                  Employer
                </option>
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
              style={label1Style}
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
  width: "40%",
};

const buttonStyle = {
  fontFamily: "Courier New, monospace",
  fontSize: 13,
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  width: "20%",
  backgroundColor: "#1565c0",
  color: "white",
  marginBottom :'5%'
};

const selectStyle = {
  borderRadius: 14,
  border: "bold",
  borderColor: "gray",
  fontFamily: "Courier, monospace",
  fontSize: 15,
  color: "#737373",
};

const labelStyle = {
  fontFamily: "Andale Mono, monospace",
  fontSize: 17,
  fontWeight: "bold",
  color: "#666666",
};

const label1Style = {
  fontFamily: "Courier, monospace",
  fontSize: 14,
  fontWeight: "bold",
  color: "#666666",
};

export default RegistrationForm;
