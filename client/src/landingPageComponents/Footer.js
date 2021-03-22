import React from "react";
import Grid from "@react-css/grid";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={maindivStyle}>
      <Grid columns={" 1fr 2fr 1fr"}>
        <div style={divStyle}>
          <div>
            <div class="widget subscribe no-box">
              <h5 class="widget-title" style={headerStyle}>
                COMPANY NAME<span></span>
              </h5>
              <p style={titleStyle}>About the company</p>
            </div>
          </div>
        </div>

        <div>
          <div style={divListStyle}>
            <div class="widget no-box">
              <h5 class="widget-title">
                Quick Links<span></span>
              </h5>
              <ul class="thumbnail-widget" style={liStyle}>
                <li>
                  <div class="thumb-content">
                    <a href="#." style={titleStyle}>
                      Get Started
                    </a>
                  </div>
                </li>
                <li>
                  <div class="thumb-content">
                    <Link to="#." style={titleStyle}>
                      Top Leaders
                    </Link>
                  </div>
                </li>
                <li>
                  <div class="thumb-content">
                    <Link to="#." style={titleStyle}>
                      Success Stories
                    </Link>
                  </div>
                </li>
                <li>
                  <div class="thumb-content">
                    <a href="#." style={titleStyle}>
                      Event/Tickets
                    </a>
                  </div>
                </li>
                <li>
                  <div class="thumb-content">
                    <Link to="#." style={titleStyle}>
                      Lifestyle
                    </Link>
                  </div>
                </li>
                <li>
                  <div class="thumb-content">
                    <Link to="#." style={titleStyle}>
                      About
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div class="widget no-box">
            <h5 class="widget-title" style={headerStyle}>
              Get Started<span></span>
            </h5>
            <p style={titleStyle}>Get access</p>
            <a class="btn" href="#." target="_blank" style={titleStyle}>
              Register Now
            </a>
          </div>
        </div>
      </Grid>
    </div>
  );
}

const maindivStyle = {
  marginTop: "10%",
  backgroundColor: "#F0FFF0",
  padding: "3%",
};

// const header1Style = {
//   fontFamily: "Zapf Chancery, cursive",
//   fontSize: 17,
//   fontWeight: "bold",
//   marginLeft: "11%",
// };

const headerStyle = {
  fontFamily: "Zapf Chancery, cursive",
  fontSize: 17,
  fontWeight: "bold",
};

const liStyle = {
  listStyleType: "none",
  marginRight:'6%'
};

const titleStyle = {
  fontFamily: "Andale Mono, monospace",
  fontSize: 14,
};

const divStyle={
    display:'flex',
    justifyContent:'space-between'
}

const divListStyle={
    marginRight:'11%'
}
export default Footer;
