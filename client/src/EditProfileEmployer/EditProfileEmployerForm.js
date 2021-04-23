import React, {useState } from "react";
import Button from "react-bootstrap/Button";


function EditProfieEmpForm() {
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
      <div className="container">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile"></div>
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
                      Employer Details
                    </h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">Employer Name</label>
                      &nbsp; &nbsp;
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Employer Name"
                        name="employerName"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="eMail">Website</label>
                      &nbsp; &nbsp;
                      <input
                        type="url"
                        className="form-control"
                        placeholder="website"
                        name="website"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="website">Location </label>
                      &nbsp; &nbsp;
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                        name="location"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="website">Field Of Business </label>
                      &nbsp; &nbsp;
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Field Of Business"
                        name="fieldOfBusiness"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="website">Email</label>
                      &nbsp; &nbsp;
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="website">Phone No.</label>
                      &nbsp; &nbsp;
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Phone No."
                        name="phoneNo"
                        onChange={handleChange}
                        style={inputtStyle}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-right" >
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
  );
}

const header = {
  fontFamily: "Candara",
  color: "black",
  fontSize: 18,
  fontWeight: "bold",
};

const inputtStyle = {
  borderRadius: 14,
};


const buttonUpdateStyle = {
  fontFamily: "Candara",
  fontSize: 14,
  cursor: "pointer",
  marginTop: "6%",
  marginBottom: "4%",
  borderRadius: 20,
  marginRight:'45%'
};

export default EditProfieEmpForm;
