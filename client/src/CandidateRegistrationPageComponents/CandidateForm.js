import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ImageUploader from "react-images-upload";
import "./CandidateUserStyle.css";

function CandidateForm() {
  const [workEx, setWorkEx] = useState([]);
  const [state, setState] = useState({
    fullName: "",
    title: "",
    location: "",
    email: "",
    workExperience: [],
    desiredPosition: "",
    expectedSalary: "",
  });

  const isInvalid =
    state.fullName === "" ||
    state.title === "" ||
    state.location === "" ||
    state.workExperience === [] ||
    state.desiredPosition === "" ||
    state.expectedSalary === "";

  const [image, setImage] = useState();
  const uploadImage = (img) => {
    console.log(img);
    setImage(img[0]);
  };

  const handleChange = (e) => {
    e.preventDefault();

    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    var data = new FormData();

    console.log(`image`, image);
    data.append("file", image);
    data.append("filename", "img");

    Object.keys(state).forEach((key) => {
      data.append(key, state[key]);
    });

    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
      body: data,
    };
    fetch("http://localhost:5000/candidate/new", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          alert(res.msg);
        } else {
          alert(res.msg);
        }
      });
  };

  function handleAdd() {
    setWorkEx([...workEx, ""]);
  }

  function handleRemove(i) {
    const values = workEx.splice(i, 1);
    setWorkEx(values);
  }

  function handleChangeMore(i, e) {
    const values = [...workEx];
    values[i] = e.target.value;
    setWorkEx(values);
  }

  return (
    <div class="container register">
      <div class="row">
        <div class="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>Welcome</h3>
          <p>You are 30 seconds away from entering the best hiring website!</p>

          <br />
        </div>
        <div class="col-md-9 register-right">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 class="register-heading">Register as Candidate</h3>
              <div class="row register-form">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name *"
                      name="fullName"
                      onChange={handleChange}
                      value={state.fullName}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Title *"
                      name="title"
                      onChange={handleChange}
                      value={state.title}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Desired Position *"
                      type="text"
                      name="desiredPosition"
                      onChange={handleChange}
                      value={state.desiredPosition}
                    />
                  </div>

                  <div class="form-group">
                    <Form.Row>
                      <ImageUploader
                        buttonText="Choose images"
                        onChange={uploadImage}
                        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                        maxFileSize={5242880}
                        type="image"
                        value={image}
                        name="myImage"
                        accept=".jpg"
                        style={uploaderStyle}
                      />
                    </Form.Row>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Your Email *"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={state.email}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Location *"
                      type="text"
                      name="location"
                      onChange={handleChange}
                      value={state.location}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Expected Salary *"
                      onChange={handleChange}
                      type="number"
                      name="expectedSalary"
                      onChange={handleChange}
                      value={state.expectedSalary}
                    />
                  </div>
                  <div class="form-group"></div>
                  <div class="form-group">
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridPassword">
                        {workEx.map((field, idx) => {
                          return (
                            <div key={idx} style={addMoreDiv}>
                              <Button
                                type="button"
                                onClick={() => handleRemove(idx)}
                              >
                                X
                              </Button>
                              <Form.Control
                                type="text"
                                value={field}
                                onChange={(e) => handleChangeMore(idx, e)}
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
                          Add Work Experience
                        </Button>
                      </Form.Group>
                    </Form.Row>
                  </div>
                </div>
                <input
                  type="submit"
                  class="btnRegister"
                  value="Register"
                  onClick={submitDetails}
                  disabled={isInvalid}
                  style={submitStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const addMoreDiv = {
  display: "flex",
  justifyContent: "space-between",
};

const buttonStyle = {
  fontFamily: "Courier, monospace",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  marginTop: "5%",
};

const uploaderStyle = {
  border: "none",
};

const submitStyle = {
  width: "25%",
  marginLeft: "37%",
};

export default CandidateForm;
