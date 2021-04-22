import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./EditProfileStyle.css";

function EditProfieCanForm() {
  const { user } = useContext(AuthContext);
  const { candidate } = useContext(CandidatesContext);
  const [workEx, setWorkEx] = useState([]);
  const [state, setState] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const [file, setMyFile] = useState();
  const uploadImage = (file) => {
    console.log(file);
    setMyFile(file[0]);
  };

  const submitDetails = (e) => {
    e.preventDefault();
    var data = new FormData();

    console.log(`image`, file);
    data.append("file", file);
    data.append("filename", "img");

    Object.keys(state).forEach((key) => {
      data.append(key, state[key]);
    });

    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    // var requestOptions = {
    //   method: "PUT",
    //   headers: myHeaders,
    //   redirect: "follow",
    //   body: data,
    // };
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
      .then((res) => {
        if (res.success) {
          alert(res.msg);
        } else {
          alert(res.msg);
        }
      });
  };

  // const submitDetails = (e) => {
  //   e.preventDefault();
  //   console.log(state);
  //   const token = localStorage.getItem("token");
  //   console.log(token);

  //   fetch("http://localhost:5000/candidate/me", {
  //     method: "put",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(state),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(state);
  //       if (res.success) {
  //         alert(res.msg);
  //       } else {
  //         alert(res.msg);
  //       }
  //       console.log(res);
  //     });
  // };

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
    <div>
      <div class="container">
        <div class="row gutters">
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
                <div class="account-settings">
                  <div class="user-profile">
                    <div class="user-avatar">
                      {candidate && (
                        <img src={`http://localhost:5000/${candidate.img}`} />
                      )}
                      <div class="file btn btn-lg btn-primary" style={divStyle}>
                        <input
                          onChange={uploadImage}
                          imgextension={[".jpg", ".gif", ".png", ".gif"]}
                          maxFileSize={5242880}
                          type="file"
                          value={file}
                          name="file"
                          accept=".jpg"
                          style={changePhotoStyle}
                        />
                      </div>
                    </div>
                    {candidate && (
                      <h5 class="user-name">{candidate.fullName}</h5>
                    )}
                    {candidate && <h6 class="user-email">{candidate.email}</h6>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mb-3 " style={header}>
                      Personal Details
                    </h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="fullName">Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Full Name"
                        name="fullName"
                        onChange={handleChange}
                        value={state.fullName}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="eMail">Title</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                        value={state.title}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="phone">Location</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Location"
                        name="location"
                        onChange={handleChange}
                        value={state.location}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Hobbies</label>
                      <input
                        class="form-control"
                        type="text"
                        name="hobbies"
                        placeholder="Hobbies"
                        onChange={handleChange}
                        value={state.hobbies}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Phone No</label>
                      <input
                        class="form-control"
                        placeholder="Phone No."
                        type="number"
                        name="phoneNo"
                        onChange={handleChange}
                        value={state.phoneNo}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Desired Position</label>
                      <input
                        class="form-control"
                        placeholder="Desired Position"
                        name="desiredPosition"
                        onChange={handleChange}
                        value={state.desiredPosition}
                        type="text"
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Expected Salary</label>
                      <input
                        class="form-control"
                        placeholder="Expected Salary"
                        type="number"
                        name="expectedSalary"
                        onChange={handleChange}
                        value={state.expectedSalary}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Github</label>
                      <input
                        class="form-control"
                        placeholder="Github URL"
                        type="url"
                        name="github"
                        onChange={handleChange}
                        value={state.github}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Website</label>
                      <input
                        class="form-control"
                        placeholder="Website URL"
                        type="url"
                        name="website"
                        onChange={handleChange}
                        value={state.website}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Twitter</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Twitter User Name"
                        value={state.twitter}
                        name="twitter"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Facebook</label>
                      <input
                        class="form-control"
                        placeholder="Facebook URL"
                        type="url"
                        name="facebook"
                        onChange={handleChange}
                        value={state.facebook}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Languages</label>
                      <input
                        class="form-control"
                        placeholder="Languages"
                        type="text"
                        name="languages"
                        onChange={handleChange}
                        value={state.languages}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group" style={workExdivStyle}>
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

                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mb-3 " style={headerAddress}>
                      Address
                    </h6>
                  </div>
                  {/* <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="Street">Street</label>
                      <input
                        type="name"
                        class="form-control"
                        id="Street"
                        placeholder="Enter Street"
                        style={inputtStyle}
                      />
                    </div>
                  </div> */}
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="ciTy">City</label>
                      <input
                        type="name"
                        class="form-control"
                        id="ciTy"
                        placeholder="Enter City"
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="sTate">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Address"
                        style={inputtStyle}
                        name="address"
                        onChange={handleChange}
                        value={state.address}
                      />
                    </div>
                  </div>
                  {/* <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="zIp">Zip Code</label>
                      <input
                        type="text"
                        class="form-control"
                        id="zIp"
                        placeholder="Zip Code"
                        style={inputtStyle}
                      />
                    </div>
                  </div> */}
                </div>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="text-right" style={divButtonStyle}>
                      <Button style={buttonCancelStyle}>Cancel</Button>
                      &nbsp; &nbsp;
                      <Button
                        variant="primary"
                        onClick={submitDetails}
                        style={buttonUpdateStyle}
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputtStyle = {
  borderRadius: 14,
};

const header = {
  fontFamily: "Candara",
  color: "black",
  fontSize: 18,
  fontWeight: "bold",
};

const headerAddress = {
  fontFamily: "Candara",
  color: "black",
  fontSize: 18,
  fontWeight: "bold",
  marginTop: 15,
};

const changePhotoStyle = {
  width: "100%",
  fontSize: 12,
  color: "white",
};

const divStyle = {
  width: "83%",
  marginTop: "20%",
  paddingBottom: 6,
  paddingTop: 1,
  paddingRight: 0,
  paddingLeft: 12,
  borderRadius: 8,
};

const addMoreDiv = {
  display: "flex",
  justifyContent: "space-between",
};

const div = {
  marginTop: "4%",
  marginBottom: "10%",
};

const input1Style = {
  borderRadius: 20,
  marginBottom: "2%",
  marginTop: "1%",
};

const spanStyle = {
  marginRight: "2%",
  marginTop: "3%",
  color: "blue",
};

const buttonStyle = {
  fontFamily: "Candara",
  fontSize: 14,

  cursor: "pointer",
  marginTop: "5%",
  borderRadius: 20,
};

const buttonUpdateStyle = {
  fontFamily: "Candara",
  fontSize: 14,
  cursor: "pointer",
  marginTop: "5%",
  borderRadius: 20,
};

const workExdivStyle = {
  marginTop: "3%",
};

const buttonCancelStyle = {
  fontFamily: "Candara",
  fontSize: 14,
  cursor: "pointer",
  marginTop: "5%",
  borderRadius: 20,
  backgroundColor: "gray",
};


const divButtonStyle = {
  marginRight:'40%'

}
export default EditProfieCanForm;
