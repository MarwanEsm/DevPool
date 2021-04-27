import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
// import { AuthContext } from "../ContextProvider/AuthContextProvider";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./EditProfileStyle.css";

function EditProfieCanForm() {
  // const { user } = useContext(AuthContext);
  const { candidate } = useContext(CandidatesContext);
  const [workEx, setWorkEx] = useState([]);
  const [state, setState] = useState(candidate);

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
    //value//
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
    console.log(state);
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
  console.log(candidate);
  return (
    <div>
      <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      {candidate && (
                        <img src={`http://localhost:5000/${candidate.img}`} />
                      )}
                      <div
                        className="file btn btn-lg btn-primary"
                        style={divStyle}
                      >
                        <input
                          onChange={uploadImage}
                          imgextension={[".jpg", ".gif", ".png", ".gif"]}
                          maxfilesize={5242880}
                          type="file"
                          value={file}
                          name="file"
                          accept=".jpg"
                          style={changePhotoStyle}
                        />
                      </div>
                    </div>
                    {candidate && (
                      <h5 className="user-name">{candidate.fullName}</h5>
                    )}
                    {candidate && (
                      <h6 className="user-email">{candidate.email}</h6>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-3 " style={header}>
                      Personal Details
                    </h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">Education</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Education"
                        name="education"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="eMail">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="skills">Skills</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Skills"
                        name="skills"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="hobbies">Hobbies</label>
                      <input
                        className="form-control"
                        type="text"
                        name="hobbies"
                        placeholder="Hobbies"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="phoneNo">Phone No</label>
                      <input
                        className="form-control"
                        placeholder="Phone No."
                        type="number"
                        name="phoneNo"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="desiredPosition">Desired Position</label>
                      <input
                        className="form-control"
                        placeholder="Desired Position"
                        name="desiredPosition"
                        onChange={handleChange}
                        type="text"
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="expectedSalary">Expected Salary</label>
                      <input
                        className="form-control"
                        placeholder="Expected Salary"
                        type="number"
                        name="expectedSalary"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="github">Github</label>
                      <input
                        className="form-control"
                        placeholder="Github URL"
                        type="url"
                        name="github"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="education">Education</label>
                      <input
                        className="form-control"
                        placeholder="Education"
                        type="url"
                        name="education"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="twitter">Twitter</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Twitter User Name"
                        name="twitter"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="facebook">Facebook</label>
                      <input
                        className="form-control"
                        placeholder="Facebook URL"
                        type="url"
                        name="facebook"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="instagram">Instagram</label>
                      <input
                        className="form-control"
                        placeholder="Instagram User Name"
                        type="url"
                        name="instagram"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="sTate">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        style={inputtStyle}
                        name="address"
                        onChange={handleChange}
                       
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="languages">Languages</label>
                      <input
                        className="form-control"
                        placeholder="Languages"
                        type="text"
                        name="languages"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                </div>

              

                <div className="form-group" style={workExdivStyle}>
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

                
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right" style={divButtonStyle}>
                      <Button style={buttonCancelStyle}>Cancel</Button>

                      <Button onClick={submitDetails} style={buttonUpdateStyle}>
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
  marginTop:'3%'
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
  marginLeft: "-18%",
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
  marginLeft: "68%",
};

const divButtonStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginRight: "40%",
  marginBottom: "4%",
};
export default EditProfieCanForm;
