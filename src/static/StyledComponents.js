import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 37px;
  font-weight: 900;
  letter-spacing: 4.7px;
  z-index: 2000;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255);
  opacity: 0;
`;

export const Page = styled.div`
  animation: appear 0.7s ease;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ThemeModeBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
  z-index: -1000;
  transition: all 0.4s ease;
`;
