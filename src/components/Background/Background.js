import React from "react";
import { StyledBackground } from "../../static/StyledComponents";

const Background = ({ context }) => {
  const [data, setData] = context;
  const toggle = () => {
    setData(prevState => ({
      ...prevState,
      menu: !prevState.menu
    }));
  };
  return data.menu ? <StyledBackground onClick={toggle} /> : null;
};

export default Background;
