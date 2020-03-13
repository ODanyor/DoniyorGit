import React from "react";
import "./Illustration.css";
import foreign from "../../static/images/foreign.png";

const VisitProject = ({ link }) => {
  return (
    <a rel="noopener noreferrer" target="_blank" href={link} title={link}>
      <div className="illustration-link">
        <div className="illustration-link-sub">
          <img alt="link" src={foreign} width="27px" height="auto" />
          <p>Visit</p>
        </div>
      </div>
    </a>
  );
};

const Illustration = ({ img, link }) => {
  return (
    <div className="illustration-container">
      <img alt="media" src={img} width="100%" height="auto" />
      {link ? <VisitProject link={link} /> : null}
    </div>
  );
};

export default Illustration;
