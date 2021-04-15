import React from "react";
import "./FooterStyle.css";

function Footer() {
  return (
    
      <div >
        <div >
          <div class="card1">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-6">
                    <div class="box">
                      <h4>Want to create something together?</h4>{" "}
                      <a href="#">
                        <p style={aStyle}>Get in touch</p>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="box">
                      <p class="mb-0">Berlin Office</p>
                      <h5>Adolfstraße 24 13347 </h5>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="box">
                      <h4>Help us make cool things!</h4>{" "}
                      <a href="#">
                        <p style={aStyle}>Check our open positions</p>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 pb-5">
                    <div class="box">
                      <p class="mb-0">Head Office</p>
                      <h5>Köpincker Straße</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div>
                  <h4 class="form-head">Keep up with news from us</h4>
                  <form className="form-control1">
                    <div class="form-group">
                      <div class="col-12 get-input"></div>
                    </div>
                    <br />
                    <div class="form-group">
                      <div class="col-12 get-input">
                        <input
                          placeholder="email"
                          className="input"
                          class="form-control input-box rm-border"
                        />
                        <br />
                        <div class="custom-control custom-checkbox custom-control-inline">
                          <input
                            id="chk1"
                            type="checkbox"
                            name="chk"
                            class="custom-control-input"
                          />
                          <label
                            for="chk1"
                            class="custom-control-label consent"
                          >
                            I give my consent that my personal information can
                            be collected and used according to the
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="col-md-12 px-4 py-2 get-input1 pb-5 mb-5"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="row">
              
              <div
                style={divStyle}
                class="col-md-7 d-flex justify-content-center mb-3"
              >
                <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3">
                  <a href="#" style={aStyle}>
                    About
                  </a>
                </div>
                <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3">
                  <a href="#" style={aStyle}>
                    Work
                  </a>
                </div>
                <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3">
                  <a href="#" style={aStyle}>
                    Blog
                  </a>
                </div>
              </div>

              <div class="col-md-3 justify-content-center d-flex">
                <a href="#">
                  <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                    <div class="fa fa-facebook"></div>
                  </div>
                </a>
                <a href="#">
                  <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                    <div class="fa fa-twitter"></div>
                  </div>
                </a>
                <a href="#">
                  <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                    <div class="fa fa-instagram"></div>
                  </div>
                </a>
                <a href="#">
                  <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                    <div class="fa fa-linkedin"></div>
                  </div>

                  <div class="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                    <div class="fa fa-google-plus"></div>
                  </div>
                </a>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

const aStyle = {
  color: "white",
};

const divStyle = {
  marginLeft: "21%",
};

export default Footer;
