import React from "react";
import "./FooterStyle.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="row">
          <div class="col-sm-6 col-md-4 footer-navigation">
            <h3>
              <Link to="#">
                Mar<span>wansstrap</span>
              </Link>
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
                <span class="new-line-span">24 Adolf Street</span>Berlin,
                Germany
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
              <Link href="#">
                <i class="fa fa-facebook"></i>
              </Link>
              <Link href="#">
                <i class="fa fa-twitter"></i>
              </Link>
              <Link href="#">
                <i class="fa fa-linkedin"></i>
              </Link>
              <Link href="#">
                <i class="fa fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "white",
  fontSize: 15,
};

export default Footer;
