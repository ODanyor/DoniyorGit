/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useContext } from "react";
import { Context } from "../../context";
import "./Details.css";
const logo = require("../../static/Logo.svg");

const Details = () => {
  const [data] = useContext(Context);
  const { text } = data;
  // eslint-disable-next-line
  const [emojis, setEmojis] = useState({
    light: ["🖖", "👋", "✋", "✊", "✨", "🤙"],
    dark: ["👹", "👺", "👾", "😈", "💀", "🤖", "🌚"]
  });
  let emojiStyle;
  if (data.darkMode) {
    emojiStyle = emojis.dark;
  } else {
    emojiStyle = emojis.light;
  }
  const randomEmoji = emojiStyle[Math.floor(Math.random() * emojiStyle.length)];
  return (
    <div className="details-container">
      <div className="logo-container">
        <img alt="Logo" src={logo} />
      </div>
      <div className="detail-position">Full stack web developer</div>
      <p className="p-greating">Hello {randomEmoji}! Nice to see you here.</p>
      <p>{text}</p>
      <div className="email-container">
        <span>Email: </span>
        <a target="_blank" href="https://doniyorgit@gmail.com">
          doniyorgit@gmail.com
        </a>
      </div>
      <div className="links-container">
        <a target="_blank" href="https://github.com/ODanyor">
          GitHub
        </a>
        <a target="_blank" href="https://t.me/danyalready">
          Telegram
        </a>
      </div>
    </div>
  );
};

export default Details;
