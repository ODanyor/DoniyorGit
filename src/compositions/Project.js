import React from "react";
import "./Project.css";

const Project = props => {
  return (
    <div className="project-container">
      {props.illustration}
      {props.description}
    </div>
  );
};

export default Project;
