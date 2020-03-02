import React from "react";
import "./Menu.css";

const Menu = props => {
  return (
    <div className="menu-container">
      {props.menu}
      {props.links}
      {props.background}
    </div>
  );
};

export default Menu;
