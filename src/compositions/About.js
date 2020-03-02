import React from "react";
import "./About.css";

const About = props => {
  return (
    <div className="about-container">
      {props.left}
      {props.right}
    </div>
  );
};

export default About;
