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
                    <h6 class="mb-3 text-primary">Personal Details</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="fullName">Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="fullName"
                        placeholder="Enter full name"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="eMail">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="eMail"
                        placeholder="Enter email ID"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="phone">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Website URL</label>
                      <input
                        type="url"
                        class="form-control"
                        id="website"
                        placeholder="Website url"
                      />
                    </div>
                  </div>
                </div>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mb-3 text-primary">Address</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="Street">Street</label>
                      <input
                        type="name"
                        class="form-control"
                        id="Street"
                        placeholder="Enter Street"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="ciTy">City</label>
                      <input
                        type="name"
                        class="form-control"
                        id="ciTy"
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="sTate">State</label>
                      <input
                        type="text"
                        class="form-control"
                        id="sTate"
                        placeholder="Enter State"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="zIp">Zip Code</label>
                      <input
                        type="text"
                        class="form-control"
                        id="zIp"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                </div>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="text-right">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        class="btn btn-secondary"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        class="btn btn-primary"
                      >
                        Update
                      </button>
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

const inputt1Style = {
  borderRadius: 14,
};
const buttonStyle = {
  fontFamily: "Courier, monospace",
  fontSize: 14,
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
};

const div = {
  marginTop: "2%",
};

const div1 = {
  marginTop: "8%",
};

const header = {
  fontFamily: "Trebuchet MS, sans-serif",
  marginLeft: "30%",
  fontSize: 20,
  marginBottom: "4%",
  textDecoration: "underline",
};

const expereince = {
  fontFamily: "Trebuchet MS, sans-serif",
};

const iStyle = {
  borderRadius: 10,
  backgroundColor: "#1565c0",
  color: "white",
};


const changePhotoStyle ={
  width:'100%',
  fontSize:12,
  color:'white'
}

const divStyle={
  width:'83%',
  marginTop:'20%',
  paddingBottom:6,
  paddingTop:1,
  paddingRight:0,
  paddingLeft:12,
  borderRadius:8
}
export default EditProfieCanForm;
