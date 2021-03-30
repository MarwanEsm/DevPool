import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function EmployerForm() {
  const [state, setState] = useState({
    employerName: "",
    website: "",
    location: "",
    fieldOfBusiness: "",
    concernedPersonEmail: "",
    phoneNo: "",
    checked: false,
  });

  const isInvalid =
    state.employerName === "" ||
    state.website === "" ||
    state.location === "" ||
    state.fieldOfBusiness === "" ||
    state.concernedPersonEmail === "" ||
    state.phoneNo === "" ||
    state.checked === false;

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/employer/new", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          alert(res.msg);
        } else {
          alert(res.msg);
        }
        console.log(res);
      });
  };

  const makeItChecked = (e) => {
    e.preventDefault();
    setState({ ...state, checked: !state.checked });
  };

  return (
    <div>
      <div style={divStyle}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Employer Name</Form.Label>
              <Form.Control
                type="text"
                name="employerName"
                onChange={handleChange}
                value={state.employerName}
                style={inputtStyle}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                onChange={handleChange}
                value={state.website}
                style={inputtStyle}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={textStyle}>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                onChange={handleChange}
                value={state.location}
                style={inputtStyle}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Field Of Business</Form.Label>
              <Form.Control
                type="text"
                name="fieldOfBusiness"
                onChange={handleChange}
                value={state.fieldOfBusiness}
                style={inputtStyle}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label style={textStyle}>Concerned Person Email</Form.Label>
              <Form.Control
                type="text"
                name="concernedPersonEmail"
                onChange={handleChange}
                value={state.concernedPersonEmail}
                style={inputtStyle}
                /*email should be retrieved automatically from registered employer*/
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Phone No</Form.Label>
              <Form.Control
                type="number"
                name="phoneNo"
                onChange={handleChange}
                value={state.phoneNo}
                style={inputtStyle}
              ></Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <input
              type="radio"
              defaultChecked={state.checked}
              onClick={makeItChecked}
            />{" "}
            &nbsp;<label>Agree to Terms and Conditions</label>
          </Form.Group>

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
  marginLeft: "30%",
  width: "40%",
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

const textStyle = {
  fontFamily: "Zapf Chancery, cursive",
};

export default EmployerForm;
