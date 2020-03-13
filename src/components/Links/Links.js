import React from "react";
import "./Links.css";
const email = require("../../static/images/email.png");
const github = require("../../static/images/github.png");
const telegram = require("../../static/images/telegram.png");

const Links = () => {
  return (
    <div className="contact-links-container">
      <h2>Interested in hire?</h2>
      <div className="sub-contact-links-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://doniyorgit@gmail.com"
        >
          <img alt="logo" src={email} width="25px" height="25px" />
          <span>doniyorgit@gmail.com</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ODanyor"
        >
          <img alt="logo" src={github} width="25px" height="25px" />
          Github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/danyalready"
        >
          <img alt="logo" src={telegram} width="25px" height="25px" />
          Telegram
        </a>
      </div>
    </div>
  );
};

export default Links;
