import React, { useContext } from "react";
import { Context } from "../../context";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [data, setData] = useContext(Context);
  const toggle = () => {
    setData(prevState => ({
      ...prevState,
      menu: !prevState.menu
    }));
  };
  let stickStyle = "stick";
  if (data.darkMode) {
    stickStyle = "stick stick-darkMode";
  }
  return (
    <div className="burger-container" onClick={toggle}>
      <div className={`${stickStyle} ${data.menu ? "stick-1" : null}`}></div>
      <div className={`${stickStyle} ${data.menu ? "stick-2" : null}`}></div>
    </div>
  );
};

export default BurgerMenu;
