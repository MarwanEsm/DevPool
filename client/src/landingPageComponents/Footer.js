import React from "react";
import "./FooterStyle.css";
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="row">
          <div class="col-sm-6 col-md-4 footer-navigation">
            <h3>
              <a href="#">
                Mar<span>wansstrap</span>
              </a>
            </h3>
            <p class="links">
              <Link to="#">Home</Link>
              <strong> · </strong>
              <Link to="#">Blog</Link>
              <strong> · </strong>
              <Link to="#">Jobs</Link>
              <strong> · </strong>
              <Link to="#">Contact</Link>
            </p>
            <p class="company-name">Marwan Trap © 2021</p>
          </div>
          <div class="col-sm-6 col-md-4 footer-contacts">
            <div>
              <span class="fa fa-map-marker footer-contacts-icon"> </span>
              <p>
                <span class="new-line-span">24 Adolf Street</span>Berlin, Germany
              </p>
            </div>
            <div>
              <i class="fa fa-phone footer-contacts-icon"></i>
              <p class="footer-center-info email text-left"> +49 15755076336</p>
            </div>
            <div>
              <i class="fa fa-envelope footer-contacts-icon"></i>
              <p>
                
                <Link to="#" target="_blank" style={linkStyle}>
                  support@bbbootstrap.com
                </Link>
              </p>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="col-md-4 footer-about">
            <h4>About the company</h4>
            <p>
              Marwanstrap.com is one of the leading ideas for User Exprience
              snippets.
            </p>
            <div class="social-links social-icons">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "white",
  fontSize:15
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
