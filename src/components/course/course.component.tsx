import React from "react";
import "./course.styles.css";

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
          <p>
            <span className="hello">
              {" "}
              <img
                src="https://www.shareicon.net/download/2016/08/13/808555_media.svg"
                className="h-10 flex-auto"
              ></img>
            </span>
            JavaScript, for all you Front-End Developers
          </p>
        </div>
        <div>
          <div id="wrapper">
            <div className="box-area">
              <div id="box-front" className="box"></div>
              <div id="box-right" className="box"></div>
              <div id="box-back" className="box"></div>
              <div id="box-left" className="box"></div>
              <div id="box-top" className="box"></div>
              <div id="box-bottom" className="box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Course;
