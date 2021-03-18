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
  });

  const isInvalid =
    state.employerName === "" ||
    state.website === "" ||
    state.location === "" ||
    state.fieldOfBusiness === "" ||
    state.concernedPersonEmail === "" ||
    state.phoneNo === "";

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/employer/new", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
  };

  return (
    <div>
      <div style={divStyle}>
        <Form>
          <Form.Row >
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Employer Name</Form.Label>
              <Form.Control
                type="text"
                name="employerName"
                placeholder=" Employer Name"
                onChange={handleChange}
                value={state.employerName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                placeholder=" Website"
                onChange={handleChange}
                value={state.website}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                placeholder=" Location"
                onChange={handleChange}
                value={state.location}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Field Of Business</Form.Label>
              <Form.Control
                type="text"
                name="fieldOfBusiness"
                placeholder="Field Of Business"
                onChange={handleChange}
                value={state.fieldOfBusiness}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Concerned Person Email</Form.Label>
              <Form.Control
                type="text"
                name="concernedPersonEmail"
                placeholder="Concerned Person Email"
                onChange={handleChange}
                value={state.concernedPersonEmail}
                /*email should be retrieved automatically from registered employer*/
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="number"
                name="phoneNo"
                placeholder="Phone No"
                onChange={handleChange}
                value={state.phoneNo}
              ></Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
          </Form.Group>

          <Button
            variant="primary"
            onClick={submitDetails}
            disabled={isInvalid}
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
  marginLeft: "18%",
  marginRight: "18%",
};



export default EmployerForm;
