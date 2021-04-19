import React from "react";
import Button from "react-bootstrap/Button";
import "./FooterStyle.css";

function Footer() {
  return (
    <div>
      <div class="card1">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-6">
                <div class="box" style={divStyle}>
                  <h4>Want to create something together?</h4>
                  <a href="#">
                    <p style={aStyle}>Check our openings</p>
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="box" style={div1Style}>
                  <h5 class="mb-0">Berlin Office</h5>
                  &nbsp;
                  <p>Adolfstraße 24 13347 </p>
                  <br />
                  <div style={aLinkStyle}>
                    <div>
                      <a href="#" style={aStyle}>
                        About
                      </a>
                    </div>
                    <div>
                      <a href="#" style={aStyle}>
                        Work
                      </a>
                    </div>
                    <div>
                      <a href="#" style={aStyle}>
                        Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={inputStyle}>
            <h4 class="form-head">Help us make cool things!</h4>
            <form className="form-control1">
              <div class="form-group"></div>
              <div class="form-group">
                <div class="col-12 get-input">
                  <input
                    placeholder="email"
                    className="input"
                    class="form-control input-box rm-border"
                  />

                  <div
                    class="custom-control custom-checkbox custom-control-inline"
                    style={checkBox}
                  >
                    <input
                      id="chk1"
                      type="checkbox"
                      name="chk"
                      class="custom-control-input"
                    />
                    <label
                      for="chk1"
                      class="custom-control-label consent"
                      style={labelStyle}
                    >
                      I give my consent
                    </label>
                  </div>
                  <div>
                    <Button style={button}>Submit</Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="row"></div>
      </div>
    </div>
  );
}

const aStyle = {
  color: "white",
};

const checkBox = {
  marginTop: "2%",
};

const button = {
  marginTop: "2%",
  fontFamily: "Courier, monospace",
  fontSize: 14,
  fontWeight: "bold",
  color: "#1565c0",
  cursor: "pointer",
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  backgroundColor: "white",
};

const divStyle = {
  marginTop: "10%",
  marginRight: "50%",
};

const div1Style = {
  marginTop: "8%",
  marginRight: "50%",
};

const inputStyle = {
  width: "20%",
};

const aLinkStyle = {
  display: "flex",
  justifyContent: "space-around",
};

const labelStyle = {
  marginTop: "5%",
  marginBottom: "5%",
};


export default Footer;
