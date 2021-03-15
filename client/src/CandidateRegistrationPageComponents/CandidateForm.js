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
    workExperience: "",
    desiredPosition: "",
    expectedSalary: "",
  });

  const isInvalid =
    state.fullName === "" ||
    state.title === "" ||
    state.location === "" ||
    state.workExperience === "" ||
    state.desiredPosition === "" ||
    state.expectedSalary === "";

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();
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

  const [fields, setFields] = useState([{ value: null }]);

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  function handleChangeMore(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

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
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Work Experience</Form.Label>
              <Form.Control
                type="text"
                name="workExperience"
                placeholder="Work Experience"
                onChange={handleChange}
                value={state.workExperience}
              ></Form.Control>
              {fields.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`} style={addMoreDiv}>
                    <Button type="button" onClick={() => handleRemove(idx)}>
                      X
                    </Button>

                    <Form.Control
                      type="text"
                      placeholder="Work Experience"
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

const addMoreDiv = {
  display: "flex",
  justifyContent: "space-between",
};

const buttonStyle = {
  marginTop: "2%",
};

export default CandidateForm;
