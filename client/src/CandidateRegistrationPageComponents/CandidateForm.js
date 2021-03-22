import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ImageUplaod from "./ImageUnplaoder";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { UsersContext } from "../ContextProvider/UsersContextProvider";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

function CandidateForm() {
  const { candidate } = useContext(CandidatesContext);
  const { users } = useContext(UsersContext);
  const { user } = useContext(AuthContext);
  const [state, setState] = useState({
    fullName: "",
    title: "",
    location: "",
    email: "",
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
  /*my question is here*/
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

  const makeItChecked = (e) => {
    e.preventDefault();
    setState({ ...state, checked: !state.checked });
  };

  return (
    <div>
      <div style={divStyle}>
        <Form>
          <Form.Row style={rowStyle}>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                onChange={handleChange}
                value={state.fullName}
                style={inputtStyle}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={handleChange}
                value={state.title}
                style={inputtStyle}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={textStyle}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={state.email}
                style={inputtStyle}
                /*value should be retrived automatically and be equal to the user's email*/
              />
            </Form.Group>
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
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Desired Position</Form.Label>
              <Form.Control
                type="text"
                name="desiredPosition"
                onChange={handleChange}
                value={state.desiredPosition}
                style={inputtStyle}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label style={textStyle}>Expected Salary</Form.Label>
              <Form.Control
                type="number"
                name="expectedSalary"
                onChange={handleChange}
                value={state.expectedSalary}
                style={inputtStyle}
              />
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Work Experience</Form.Label>
              <br />
              {state.workExperience.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`} style={addMoreDiv}>
                    <Button
                      type="button"
                      onClick={() => handleRemove(idx)}
                      style={removeButtonStyle}
                    >
                      X
                    </Button>

                    <Form.Control
                      type="text"
                      placeholder="Work Experience"
                      value={field}
                      onChange={(e) => handleChangeMore(idx, e)}
                      style={inputtStyle}
                    ></Form.Control>
                  </div>
                );
              })}
              <Button
                variant="outline-primary"
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
  width: "35%",
};

const addMoreDiv = {
  display: "flex",
  justifyContent: "space-between",
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

const removeButtonStyle = {
  width: "6%",
  height: "3%",
};

const rowStyle = {
  marginBottom: "3%",
};



export default CandidateForm;
