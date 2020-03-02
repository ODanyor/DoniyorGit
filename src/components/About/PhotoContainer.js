import React from "react";
const Light = require("../../static/images/Light.jpg");
const Dark = require("../../static/images/Dark.jpg");

const PhotoContainer = ({ context }) => {
  const [data] = context;
  const { darkMode } = data;
  return (
    <div>
      <img
        alt="Profile"
        src={darkMode ? Dark : Light}
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default PhotoContainer;
