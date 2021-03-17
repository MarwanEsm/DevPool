import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ImageUplaod from "./ImageUnplaoder";

function CandidateForm() {
  const [state, setState] = useState({
    fullName: "",
    title: "",
    location: "",
    workExperience: [],
    desiredPosition: "",
    expectedSalary: "",
    checked: false,
  });

  const isInvalid =
    state.fullName === "" ||
    state.title === "" ||
    state.location === "" ||
    state.workExperience === [] ||
    state.desiredPosition === "" ||
    state.expectedSalary === "" ||
    state.checked === false;

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(state));
    fetch("http://localhost:5000/candidate/new", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  // const [fields, setFields] = useState([{ value: null }]);

  function handleAdd() {
    const values = [...state.workExperience];
    values.push("");
    setState({ ...state, workExperience: values });
  }

  function handleRemove(i) {
    const values = [...state.workExperience];
    values.splice(i, 1);
    setState({ ...state, workExperience: values });
  }

  function handleChangeMore(i, e) {
    e.preventDefault();
    const values = [...state.workExperience];
    values[i] = e.target.value;
    setState({ ...state, workExperience: values });
  }
  console.log(state.workExperience);

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
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                onChange={handleChange}
                value={state.fullName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={handleChange}
                value={state.title}
              />
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                onChange={handleChange}
                value={state.location}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Desired Position</Form.Label>
              <Form.Control
                type="text"
                name="desiredPosition"
                onChange={handleChange}
                value={state.desiredPosition}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Expected Salary</Form.Label>
              <Form.Control
                type="number"
                name="expectedSalary"
                onChange={handleChange}
                value={state.expectedSalary}
              />
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Work Experience</Form.Label>
              <br />
              {state.workExperience.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`} style={addMoreDiv}>
                    <Button type="button" onClick={() => handleRemove(idx)}>
                      X
                    </Button>

                    <Form.Control
                      type="text"
                      placeholder="Work Experience"
                      value={field}
                      onChange={(e) => handleChangeMore(idx, e)}
                    ></Form.Control>
                  </div>
                );
              })}
              <Button
                type="button"
                onClick={() => handleAdd()}
                style={buttonStyle}
              >
                Add more
              </Button>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <ImageUplaod />
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <label>
              <input
                type="radio"
                defaultChecked={state.checked}
                onClick={makeItChecked}
              />
              Agree to Terms and Conditions
            </label>
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

const addMoreDiv = {
  display: "flex",
  justifyContent: "space-between",
};

const buttonStyle = {
  marginTop: "2%",
};

export default CandidateForm;
