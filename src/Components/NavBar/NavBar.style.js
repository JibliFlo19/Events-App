import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  WHITE_NEUTRAL,
  GRAY,
  GREEN_DARK,
  RED_DARK,
} from "../../Constants/color";

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0px 10px;
`;
export const NavBarContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${RED_DARK};
  height: 50px;
  padding: 10px;
  position: relative;
  border-radius: 20px;
`;
export const InputNavBar = styled.input`
  width: 70%;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  border: solid white;
`;

export const LinkNavStyle = styled(Link)`
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  color: #fff;
  padding: 10px 12px;
  border-radius: 4px;

  &:hover {
    background-color: transparent;
    width: 60px;
    height: 25px;
  }

  @media screen and (max-width: 820px) {
    color: ${GRAY};
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${RED_DARK};
  color: ${WHITE_NEUTRAL};
  width: 200px;
  height: 60px;
  position: absolute;
  top: 60px;
  right: 0;

  @media screen and (max-width: 820px) {
    display: block;
    background-color: ${WHITE_NEUTRAL};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${WHITE_NEUTRAL};
  color: black;
  width: 100%;
  height: 60px;
  z-index: 1;
`;

export const LinkContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  height: 60px;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ButtonDropdown = styled.button`
  width: 40px;
  height: 40px;
  color: ${WHITE_NEUTRAL};
  display: none;
  background: none;
  padding: 0;
  margin: 0;
  border: none;

  &:hover {
    background-color: ${GREEN_DARK};
  }

  @media screen and (max-width: 820px) {
    display: block;
  }
`;
