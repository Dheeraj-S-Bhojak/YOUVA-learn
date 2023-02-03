import React from "react";
import "./rotating-box.styles.css";
import typescript from "../../images/typescript.png";
import python from "../../images/python.png";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";

const RotatingBox: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="image-cube">
          <div className="front">
            <img src={typescript} className="px-16 pt-8" />
          </div>
          <div className="right">
            <img src={python} className="px-16 pt-7" />
          </div>
          <div className="back">
            <img src={react} className="px-16 pt-10" />
          </div>
          <div className="left">
            <img src={javascript} className="px-16 pt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RotatingBox;
