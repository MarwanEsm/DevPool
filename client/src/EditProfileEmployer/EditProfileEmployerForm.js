import React, { useContext, useState } from "react";
// import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

function EditProfieEmpForm() {
  const { user } = useContext(AuthContext);

  const [state, setState] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    console.log(state);
    const token = localStorage.getItem("token");
    console.log(token);
    fetch("http://localhost:5000/employer/me", {
      method: "put",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(state);
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
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={textStyle}>Phone No</Form.Label>
              <Form.Control
                type="number"
                name="phoneNo"
                onChange={handleChange}
                value={state.phoneNo}
                style={inputtStyle}
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

            {/* <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={textStyle}>Facebook</Form.Label>
              <Form.Control
                type="text"
                name="facebook"
                onChange={handleChange}
                value={state.facebook}
                style={inputtStyle}
              />
            </Form.Group> */}
          </Form.Row>

          <Form.Row>
            {/* <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={textStyle}>Instagram</Form.Label>
              <Form.Control
                type="text"
                name="instagram"
                onChange={handleChange}
                value={state.instagram}
                style={inputtStyle}
              />
            </Form.Group> */}
          </Form.Row>
          <br />

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
  marginLeft: "13%",
  width: "65%",
  marginBottom: "20%",
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

export default EditProfieEmpForm;
