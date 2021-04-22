import React, { useState } from "react";
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

    // const makeItChecked = (e) => {
    //   e.preventDefault();
    //   setState({ ...state, checked: !state.checked });
    // };

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
    console.log(i);
    console.log(workEx);

    const values = workEx;
    workEx.splice(i - 1, 1);
    console.log(values);
    setWorkEx(values);
  }

  function handleChangeMore(i, e) {
    const values = [...workEx];
    values[i] = e.target.value;
    setWorkEx(values);
  }

  return (
    <div class="container register" style={divStyle}>
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
              <h3 class="register-heading" style={header}>
                Register as Candidate
              </h3>
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
                      style={inputStyle}
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
                      style={inputStyle}
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
                      style={inputStyle}
                    />
                  </div>

                  
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
                        style={uplaoderStyle}
                        buttonVariant="outline-primary"
                      />
                    </Form.Row>
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
                      style={inputStyle}
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
                      style={inputStyle}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Expected Salary *"
                      onChange={handleChange}
                      type="number"
                      name="expectedSalary"
                      value={state.expectedSalary}
                      style={inputStyle}
                    />
                  </div>

                  <div class="form-group">
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridPassword">
                        {workEx.map((field, idx) => {
                          return (
                            <div key={idx} style={addMoreDiv}>
                              <span
                                type="button"
                                onClick={() => handleRemove(idx)}
                                style={spanStyle}
                              >
                                X
                              </span>
                              <Form.Control
                                type="text"
                                value={field}
                                onChange={(e) => handleChangeMore(idx, e)}
                                style={input1Style}
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
                {/* <Form.Group id="formGridCheckbox">
                  <input
                    type="radio"
                    defaultChecked={state.checked}
                    onClick={makeItChecked}
                  />{" "}
                  &nbsp;<label>Agree to Terms and Conditions</label>
                </Form.Group> */}
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
  fontFamily: "Candara",
  fontSize: 13,
  cursor: "pointer",
  marginTop: "5%",
  borderRadius:20
};

const submitStyle = {
  marginLeft: "40%",
  paddingBottom :3
};

const divStyle = {
  marginTop: "4%",
  marginBottom: "10%",
};

const spanStyle = {
  marginRight: "2%",
  marginTop: "3%",
  color: "blue",
};

const input1Style = {
  borderRadius: 20,
  marginBottom: "2%",
};

const inputStyle = {
  borderRadius: 20,
  fontFamily:'Candara',
  fontSize:14
};

const header = {
  fontFamily: "Trebuchet MS, sans-serif",
  fontSize: 24,
};


const uplaoderStyle={
  color:'#0062cc'
}
export default CandidateForm;
