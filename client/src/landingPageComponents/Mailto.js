import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
      style={linkStyle}
    >
      {label}
    </Link>
  );
};

const linkStyle = {
  color: "white",
  fontFamily: "Candara",
  fontSize: 14,
};

export default ButtonMailto;
