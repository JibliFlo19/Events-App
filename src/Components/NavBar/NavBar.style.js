import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  WHITE_NEUTRAL,
  GRAY,
  GREEN_DARK,
  RED_DARK,
  WHITE_GRAY,
} from "../../Constants/color";

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  height: 60px;
  padding: 10px;

  position: fixed;
  /* border-radius: 10px; */
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  font-weight: bold;
`;

//  &:hover {
//   background-color: WHITE_GRAY;
//  }
// export const InputNavBar = styled.input`
//   width: 50%;
//   height: 30px;
//   border-radius: 10px;
//   border-color: ${WHITE_GRAY};
//   border-top-color: ${WHITE_GRAY};
//   border-left-color: ${WHITE_GRAY};

//   background-color: #fff;
//   padding-top: 10px;
// `;

export const LinkNavStyle = styled(Link)`
  text-decoration: none;
  justify-content: right;
  color: ${GRAY};
  padding: 0px 5px;
  border-radius: 4px;

  &:hover {
    color: ${WHITE_GRAY};
  }

  @media screen and (max-width: 820px) {
    color: ${WHITE_NEUTRAL};
  }
`;

export const LinkNavDropdownStyle = styled(Link)`
  text-decoration: none;
  justify-content: right;
  color: ${GRAY};
  padding: 0px 5px;
  border-radius: 4px;

  &:hover {
    color: ${WHITE_GRAY};
  }

  @media screen and (max-width: 820px) {
    color: ${WHITE_NEUTRAL};
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
  padding-left: 1050px;
  gap: 20px;
  width: 50%;
  height: 60px;
  /* padding-left: 420px; */

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

export const DropdownButton = styled.button`
  color: black;
  background-color: white;
`;
