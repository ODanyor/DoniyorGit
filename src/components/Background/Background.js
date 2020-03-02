import React, { useContext } from "react";
import { Context } from "../../context";
import { StyledBackground } from "../../static/StyledComponents";

const Background = () => {
  const [data, setData] = useContext(Context);
  const toggle = () => {
    setData(prevState => ({
      ...prevState,
      menu: !prevState.menu
    }));
  };
  return data.menu ? <StyledBackground onClick={toggle} /> : null;
};

export default Background;
