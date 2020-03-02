import React from "react";
import "./Mode.css";
const r2d2 = require("../../static/images/r2d2.png");
const vader = require("../../static/images/vader.png");

const Mode = ({ context }) => {
  const [data, setData] = context;
  let text = "Too light? Come to the dark side ...";
  if (data.darkMode) {
    text = "Come back to the light,young jedi...";
  }
  let mode = vader;
  if (data.darkMode) {
    mode = r2d2;
  }
  const toggle = () => {
    setData(prevState => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }));
  };
  return (
    <header className="header-container">
      <div style={data.darkMode ? { color: "#aaa" } : null}>{text}</div>
      <img alt="mode" src={mode} width="45px" height="45px" onClick={toggle} />
    </header>
  );
};

export default Mode;
