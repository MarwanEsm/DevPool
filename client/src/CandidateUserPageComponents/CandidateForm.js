import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ImageUplaod from './ImageUnplaoder';

function CandidateForm() {
  const [state, setState] = useState({
    fullName: "",
    title: "",
    location: "",
    /*Work Experience array*/
    desiredPosition: "",
    expectedSalary: "",
  });

  const isInvalid = 
    state.fullName ==="" ||
    state.title ===""||
    state.location=== ""||
    // work experiences as array state.password=== ""||
    state.desiredPosition=== ""||
    state.expectedSalary=== ""

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
      <Form method = 'POST' action ='http://localhost:5000/new'>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              placeholder=" Full Name"
              onChange={handleChange}
              value={state.fullName}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder=" Title"
              onChange={handleChange}
              value={state.title}
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
{/* /Array input for work expereince*/}
          {/* <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={state.password}
            />
          </Form.Group> */}

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Desired Position</Form.Label>
            <Form.Control
              type="text"
              name="desiredPosition"
              placeholder="Desired Position"
              onChange={handleChange}
              value={state.desiredPosition}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Expected Salary</Form.Label>
            <Form.Control
              type="number"
              name="expectedSalary"
              placeholder="Expected Salary"
              onChange={handleChange}
              value={state.expectedSalary}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <ImageUplaod/>
          {/* <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Owner</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Candidate</option>
              <option>Employer</option>
            </Form.Control>
          </Form.Group> */}
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






export default CandidateForm;
