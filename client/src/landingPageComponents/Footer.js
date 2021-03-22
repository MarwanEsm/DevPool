import React from "react";
import Grid from "@react-css/grid";

function Footer() {
  return (
    <div style={maindivStyle}>
        <Grid  columns={" 1fr 1fr 1fr"}>
      <div>
        <div>
          <div class="widget subscribe no-box">
            <h5 class="widget-title" style={headerStyle}>
              COMPANY NAME<span></span>
            </h5>
            <p style={titleStyle}>About the company, little discription will goes here.. </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div class="widget no-box" style={div2Style}>
            <h5 class="widget-title" style={headerStyle}>
              Quick Links<span></span>
            </h5>
            <ul class="thumbnail-widget" style={liStyle}>
              <li>
                <div class="thumb-content">
                  <a href="#." style={titleStyle}>Get Started</a>
                </div>
              </li>
              <li >
                <div class="thumb-content">
                  <a href="#." style={titleStyle}>Top Leaders</a>
                </div>
              </li>
              <li>
                <div class="thumb-content">
                  <a href="#." style={titleStyle}>Success Stories</a>
                </div>
              </li>
              <li>
                <div class="thumb-content">
                  <a href="#." style={titleStyle}>Event/Tickets</a>
                </div>
              </li>
              <li>
                <div class="thumb-content">
                  <a href="#." style={titleStyle}>News</a>
                </div>
              </li>
              <li>
                <div class="thumb-content">
                  <a href="#." style={titleStyle}>Lifestyle</a>
                </div>
              </li>
              <li>
                <div class="thumb-content">
                  <a href="#." style={titleStyle}>About</a>
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
          <p style={titleStyle}>Get access to your full Training and Marketing Suite.</p>
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
  marginTop: "8%",
  backgroundColor: "#F0FFF0",
  padding: "3%",
  
};


const headerStyle={
    fontFamily:'Zapf Chancery, cursive',
    fontSize:17,
    fontWeight:'bold'
}
const liStyle={
    listStyleType: 'none',
}

const titleStyle = {
    fontFamily: 'Andale Mono, monospace',
    fontSize: 14,
  };


  const div2Style={
alignText:'center'
  }
 
export default Footer;
