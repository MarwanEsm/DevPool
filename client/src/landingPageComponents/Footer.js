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
              <a
                href="https://www.google.com/maps/place/Adolfstra%C3%9Fe+24,+13347+Berlin/@52.5473488,13.364106,16.74z/data=!4m5!3m4!1s0x47a8518757f35721:0x8bbf69003c9cb31d!8m2!3d52.5474121!4d13.3665791"
                className="fa fa-map-marker footer-contacts-icon"
                target='_blank'
              >
                {" "}
              </a>
              <p>
                <span className="new-line-span">24 Adolf Street</span>
                Berlin, Germany
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

const mapStyle = {
  width: "30%",
  height: "20%",
  border: "gray solid",
};
export default Footer;
