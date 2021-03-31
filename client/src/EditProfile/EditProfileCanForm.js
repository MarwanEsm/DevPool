import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

function EditProfieCanForm() {
  //   const history = useHistory();
  //   const { user } = useContext(AuthContext);

  const [state, setState] = useState({
    website: "",
    twitter: "",
    facebook: "",
    github: "",
    instagram: "",
    shortStoryAboutme: "",
    languages: "",
    fullName: "",
    title: "",
    location: "",
    desiredPosition: "",
    expectedSalary: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/candidate/me", {
      method: "put",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(state),
      
    })
      .then((res) => res.json())
      .then((res) => {console.log(state);
        if (res.success) {
          alert(res.msg);
        } else {
          alert(res.msg);
        }
        console.log(res);
      });
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
            {/* <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={textStyle}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={state.email}
                style={inputtStyle}
                
              />
            </Form.Group> */}
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



          <Form.Row style={rowStyle}>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>WebSite</Form.Label>
              <Form.Control
                type="text"
                name="website"
                onChange={handleChange}
                value={state.website}
                style={inputtStyle}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Github</Form.Label>
              <Form.Control
                type="text"
                name="github"
                onChange={handleChange}
                value={state.github}
                style={inputtStyle}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={textStyle}>Twitter</Form.Label>
              <Form.Control
                type="text"
                name="twitter"
                onChange={handleChange}
                value={state.twitter}
                style={inputtStyle}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={textStyle}>Facebook</Form.Label>
              <Form.Control
                type="text"
                name="facebook"
                onChange={handleChange}
                value={state.facebook}
                style={inputtStyle}
              />
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Instagram</Form.Label>
              <Form.Control
                type="text"
                name="instagram"
                onChange={handleChange}
                value={state.instagram}
                style={inputtStyle}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label style={textStyle}>Languages</Form.Label>
              <Form.Control
                type="text"
                name="languages"
                onChange={handleChange}
                value={state.languages}
                style={inputtStyle}
              />
            </Form.Group>
          </Form.Row>
          <br />
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Short story about me </Form.Label>
              <textarea
                type="text"
                name="shortStoryAboutme"
                onChange={handleChange}
                value={state.shortStoryAboutme}
                style={inputtStyle}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" onClick={submitDetails} style={buttonStyle}>
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

const rowStyle = {
  marginBottom: "3%",
};

export default EditProfieCanForm;
