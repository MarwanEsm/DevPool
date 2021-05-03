import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CandidatesContext } from "../ContextProvider/CandidatesContextProvider";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { serverURL } from "../config";
import "./EditProfileStyle.css";

function EditProfieCanForm() {
  const { candidate } = useContext(CandidatesContext);
  const { user } = useContext(AuthContext);
  const [state, setState] = useState(candidate);
  const [workExp, setWorkExp] = useState([]);
  const history = useHistory();
  // const [state, setState] = useState({
  //   fullName: candidate.fullName || '',
  //   title: candidate.title || '',
  //   location: candidate.location || '',
  //   desiredPosition: candidate.desiredPosition || '',
  //   expectedSalary: candidate.expectedSalary || '',
  //   website: candidate.website || '',
  //   github: candidate.github || '',
  //   instagram: candidate.instagram || '',
  //   facebook: candidate.facebook || '',
  //   twitter: candidate.twitter || '',
  //   city: candidate.city || '',
  //   phoneNo: candidate.phoneNo || '',
  //   hobbies: candidate.hobbies || '',
  //   address: candidate.address || '',
  //   languages: candidate.languages || '',
  //   skills: candidate.skills || '',
  //   education: candidate.education || '',
  // });

  // fullName: '',
  //     title: '',
  //     location: '',
  //     desiredPosition: '',
  //     expectedSalary: '',
  //     website: '',
  //     github: '',
  //     instagram: '',
  //     facebook: '',
  //     twitter: '',
  //     city: '',
  //     phoneNo: '',
  //     hobbies: '',
  //     address: '',
  //     languages: '',
  //     skills: '',
  //     education: '',

  // });

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const restInput = (e) => {
    e.preventDefault();
    setState("");
    history.push(`/IndividualProfile/${user._id}`);
  };
  const [file, setMyFile] = useState();
  const uploadImage = (event) => {
    event.preventDefault();
    const files = event.target.files;
    console.log(files);
    setMyFile(files[0]);
  };

  const submitDetails = (e) => {
    e.preventDefault();
    var data = new FormData();
    console.log(`image`, file);

    data.append("file", file);
    data.append("filename", "img");

    const body = { ...state };
    console.log(body);
    Object.keys(body).forEach((key) => {
      if (key !== "workExperiences") {
        data.append(key, state[key]);
      }
    });
    workExp.forEach((wexes) => {
      data.append("workExperiences", wexes);
    });
    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    fetch(`${serverURL}candidate/me`, {
      method: "put",
      headers: myHeaders,
      body: data,
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

  function handleAdd() {
    setWorkExp([...workExp, ""]);
  }

  function handleRemove(i) {
    let values = [...workExp];
    values.splice(i, 1);
    console.log(workExp);
    setWorkExp(values);
  }

  function handleChangeMore(i, e) {
    const values = [...workExp];
    values[i] = e.target.value;
    setWorkExp(values);
    console.log(values);
  }

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
                        <img src={`${serverURL}${candidate.img}`} alt="" />
                      )}
                      <div
                        className="file btn btn-lg btn-primary"
                        style={divStyle}
                      >
                        <input
                          onChange={uploadImage}
                          imgextension={[".jpg", ".png", ".gif"]}
                          maxfilesize={5242880}
                          type="file"
                          name="img"
                          accept={[".jpg", ".gif", ".png"]}
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
                      <label htmlFor="education">Education</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Education"
                        name="education"
                        onChange={handleChange}
                        style={inputtStyle}
                        value={state.education}
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
                        value={state.title}
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
                        value={state.skills}
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
                        value={state.hobbies}
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
                        value={state.phoneNo}
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
                        value={state.desiredPosition}
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
                        value={state.expectedSalary}
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
                        value={state.github}
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
                        value={state.languages}
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
                        value={state.twitter}
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
                        value={state.facebook}
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
                        value={state.instagram}
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
                        value={state.address}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                        className="form-control"
                        placeholder="City"
                        type="text"
                        name="city"
                        onChange={handleChange}
                        style={inputtStyle}
                        value={state.city}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      {workExp.map((field, idx) => {
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

                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right" style={divButtonStyle}>
                      <Button onClick={restInput} style={buttonCancelStyle}>
                        Cancel
                      </Button>

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

const changePhotoStyle = {
  width: "100%",
  fontSize: 12,
  color: "white",
  marginTop: "3%",
};

const divStyle = {
  width: "83%",
  marginTop: "20%",
  marginLeft: "7%",
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
