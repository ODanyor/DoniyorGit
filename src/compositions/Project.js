import React from "react";
import "./Project.css";

const Project = ({ mode, illustration, description }) => {
  let style = "project-container";
  if (mode) {
    style = "project-container project-container-darkMode";
  }
  return (
    <div className={style}>
      {illustration}
      {description}
    </div>
  );
};

export default Project;
