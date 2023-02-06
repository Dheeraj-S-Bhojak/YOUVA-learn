import React from "react";
import RotatingBox from "../rotating-box/rotating-box.component";
import "./course.styles.css";
import javascript from "../../images/javascript.png";
import python from "../../images/python.png";
import typescript from "../../images/typescript.png";

const Course: React.FC = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-4 m-24">
        <div>
          <h1 className="text-2xl">Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat
            cumque ea ipsa molestiae nulla error libero blanditiis eaque dolores
            itaque ullam veritatis enim non fuga neque culpa nemo quia vero ut
          </p>
          <br />
          <span className="icon-small flex gap-6 py-5">
            <img
              src={javascript}
              alt="javascript-logo"
              className="h-10 w-10"
            ></img>
            <h4 className="py-2">
              JavaScript, for all you Front-End Developers
            </h4>
          </span>
          <span className="icon-small flex gap-6 py-5">
            <img
              src={typescript}
              alt="javascript-logo"
              className="h-10 w-10"
            ></img>
            <h4 className="py-2">TypeScript, for all you Edgy JavaScripters</h4>
          </span>
          <span className="icon-small flex gap-6 py-5">
            <img src={python} alt="javascript-logo" className="h-10 w-10"></img>
            <h4 className="py-2">Python, for all you Data Scientists</h4>
          </span>
        </div>
      </div>
      <div>
        <RotatingBox />
      </div>
    </div>
  );
};
export default Course;
