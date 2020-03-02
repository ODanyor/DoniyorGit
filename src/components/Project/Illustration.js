import React from "react";
import "./Illustration.css";

const Illustration = ({ img, link }) => {
  return (
    <div className="illustration-container">
      <a rel="noopener noreferrer" target="_blank" href={link} title={link}>
        <img alt="media" src={img} width="100%" height="auto" />
      </a>
    </div>
  );
};

export default Illustration;
