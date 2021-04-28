import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ImageUploader from "react-images-upload";
import "./CandidateUserStyle.css";

function CandidateForm() {
  const [workEx, setWorkEx] = useState([]);
  const [checked, setChecked] = useState();
  const [state, setState] = useState({
    fullName: "",
    title: "",
    location: "",
    workEx: [],
    email: "",
    desiredPosition: "",
    expectedSalary: "",
  });

  const [image, setImage] = useState();

  const isInvalid =
    state.fullName === "" ||
    state.title === "" ||
    state.location === "" ||
    !workEx.length ||
    !image ||
    state.desiredPosition === "" ||
    state.expectedSalary === "";

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
    if (
      state.fullName === "" ||
      state.title === "" ||
      state.location === "" ||
      !workEx.length ||
      !image ||
      state.desiredPosition === "" ||
      state.expectedSalary === ""
    ) {
      alert("Please fill in all required fields");
    } else {
      var data = new FormData();

      console.log(`image`, image);
      data.append("file", image);
      data.append("filename", "img");
      console.log(state);
      Object.keys(state).forEach((key) => {
        data.append(key, state[key]);
      });
      workEx.forEach((wex) => {
        data.append("workExperiences", wex);
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
        })
        
    }
  };

  function handleAdd() {
    setWorkEx([...workEx, ""]);
  }

  function handleRemove(i) {
    let values = [...workEx];
    values.splice(i, 1);
    console.log(workEx);
    setWorkEx(values);
  }

  function handleChangeMore(i, e) {
    const values = [...workEx];
    values[i] = e.target.value;
    setWorkEx(values);
  }

  return (
    <div className="container register" style={divStyle}>
      <div className="row">
        <div className="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>Welcome</h3>
          <p>You are 30 seconds away from entering the best hiring website!</p>

          <br />
        </div>
        <div className="col-md-9 register-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 className="register-heading" style={header}>
                Register as Candidate
              </h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name *"
                      name="fullName"
                      onChange={handleChange}
                      value={state.fullName}
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title *"
                      name="title"
                      onChange={handleChange}
                      value={state.title}
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
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

                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Your Email *"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={state.email}
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Location *"
                      type="text"
                      name="location"
                      onChange={handleChange}
                      value={state.location}
                      style={inputStyle}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Expected Salary *"
                      onChange={handleChange}
                      type="number"
                      name="expectedSalary"
                      value={state.expectedSalary}
                      style={inputStyle}
                    />
                  </div>

                  <div className="form-group">
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
                              />
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
                <Form.Group id="formGridCheckbox" style={div1Style}>
                  <div
                    className="custom-control custom-checkbox custom-control-inline"
                    style={checkBox}
                  >
                    <input
                      id="chk1"
                      type="checkbox"
                      name="chk"
                      className="custom-control-input"
                      defaultChecked={false}
                      value={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    <label
                      for="chk1"
                      className="custom-control-label consent"
                      style={label2Style}
                    >
                      Agree to terms and conditions
                    </label>
                  </div>
                </Form.Group>
                <input
                  type="submit"
                  className="btnRegister"
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
  borderRadius: 20,
};

const submitStyle = {
  marginLeft: "40%",
  paddingBottom: 6,
  paddingTop: 4,
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
  fontFamily: "Candara",
  fontSize: 14,
};

const header = {
  fontFamily: "Trebuchet MS, sans-serif",
  fontSize: 24,
};

const label2Style = {
  fontFamily: "Candara",
  fontSize: 13,
  color: "black",
  textDecoration: "underline",
};

const div1Style = {
  marginLeft: "30%",
  marginTop: "3%",
};
const uplaoderStyle = {
  backgroundColor: "#0062cc",
  borderRadius: 5,
};
const checkBox = {
  marginTop: "8%",
};

export default CandidateForm;
