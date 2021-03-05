import React from "react";
import Hiring from "../photos/Hiring.png";

function Logo() {
  return (
    <div>
      <img src={Hiring} alt="" style={imgStyle} />
    </div>
  );
}

const imgStyle = {
  width: "12%",
  marginLeft: "2%",
};
export default Logo;
