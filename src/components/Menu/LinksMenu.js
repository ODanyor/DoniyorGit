import React from "react";
import { StyledLink } from "../../static/StyledComponents";
import "./LinksMenu.css";
import Mode from "../Mode/Mode";

const LinksMenu = ({ context }) => {
  const [data, setData] = context;
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
  let linkStyle = "nav-link";
  if (darkMode) {
    linkStyle = "nav-link nav-link-darkMode";
  }
  return (
    <div className={style}>
      <Mode context={context} />
      <StyledLink to="/">
        <div className={linkStyle} onClick={toggle}>
          ./About
        </div>
      </StyledLink>
      <StyledLink to="/contacts">
        <div className={linkStyle} onClick={toggle}>
          ./Contacts
        </div>
      </StyledLink>
      <StyledLink to="/projects">
        <div className={linkStyle} onClick={toggle}>
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
