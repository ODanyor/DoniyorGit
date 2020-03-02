import React from "react";
import "./About.css";

const About = ({ left, right }) => {
  let style = "about-container";
  return (
    <div className={style}>
      {left}
      {right}
    </div>
  );
};

export default About;
