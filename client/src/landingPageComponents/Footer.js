import React from "react";
import "./FooterStyle.css";
import { Link } from "react-router-dom";

function Footer() {
  const handelClick = (e) => {
    window.location = "mailto:support@bbbootstrap.com";
    e.preventDefault();
  };
  return (
    <div>
      <footer className="footer">
        <div className="row">
          <div className="col-sm-6 col-md-4 footer-navigation">
            <h3>
              <Link to="#">
                Mar<span>wansstrap</span>
              </Link>
            </h3>
            <p className="links">
              <Link to="#">Home</Link>
              <strong> · </strong>
              <Link to="#">Blog</Link>
              <strong> · </strong>
              <Link to="#">Jobs</Link>
              <strong> · </strong>
              <Link to="#">Contact</Link>
            </p>
            <p className="company-name">Marwan Trap © 2021</p>
          </div>
          <div className="col-sm-6 col-md-4 footer-contacts">
            <div>
              <span className="fa fa-map-marker footer-contacts-icon"> </span>
              <p>
                <span className="new-line-span">24 Adolf Street</span>Berlin,
                Germany
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.198991120139!2d13.3641060104615!3d52.54734883752056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8518757f35721%3A0x8bbf69003c9cb31d!2sAdolfstra%C3%9Fe%2024%2C%2013347%20Berlin!5e0!3m2!1sen!2sde!4v1619433518168!5m2!1sen!2sde"
                  // width="400"
                  // height="300"
                  // style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </p>
            </div>
            <div>
              <i className="fa fa-phone footer-contacts-icon"></i>
              <p className="footer-center-info email text-left">
                +49 15755076336
              </p>
            </div>
            <div>
              <i className="fa fa-envelope footer-contacts-icon"></i>

              <p
                className="footer-center-info email text-left"
                onClick={handelClick}
                style={pStyle}
              >
                support@bbbootstrap.com
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="col-md-4 footer-about">
            <h4>About the company</h4>
            <p>
              Marwanstrap.com is one of the leading ideas for User Exprience
              snippets.
            </p>
            <div className="social-links social-icons">
              <Link href="#">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const pStyle = {
  cursor: "pointer",
};

export default Footer;
