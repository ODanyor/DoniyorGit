import React from "react";
import "./Menu.css";

const Menu = ({ menu, links, background }) => {
  return (
    <div className="menu-container">
      {menu}
      {links}
      {background}
    </div>
  );
};

export default Menu;
