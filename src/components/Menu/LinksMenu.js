import React, { useContext } from "react";
import { Context } from "../../context";
import { StyledLink } from "../../static/StyledComponents";
import "./LinksMenu.css";
import Mode from "../Mode/Mode";

const LinksMenu = () => {
  const [data, setData] = useContext(Context);
  const { menu, darkMode } = data;
  let style = "background-container";
  if (darkMode) {
    style = "background-container background-container-darkMode";
  }
  if (menu) {
    style = `${style} background-container-show`;
  }
  const toggle = () => {
    setData(prevState => ({
      ...prevState,
      menu: !prevState.menu
    }));
  };
  return (
    <div className={style}>
      <Mode />
      <StyledLink to="/">
        <div className="nav-link" onClick={toggle}>
          ./About
        </div>
      </StyledLink>
      <StyledLink to="/contacts">
        <div className="nav-link" onClick={toggle}>
          ./Contacts
        </div>
      </StyledLink>
      <StyledLink to="/projects">
        <div className="nav-link" onClick={toggle}>
          ./Projects
        </div>
      </StyledLink>
      <span
        className={
          darkMode ? "handwrite-contaiener-darkMode" : "handwrite-container"
        }
      >
        Dany 2020
      </span>
    </div>
  );
};

export default LinksMenu;
