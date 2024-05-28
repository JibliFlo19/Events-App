import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* width: 100%; */
  height: 60px;
  padding: 8px 0px;
  position: relative;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const SearchNavBar = styled.input`
  width: 60%;
  height: px;
`;

export const Link = styled.div`
  text-decoration: none;
  color: black;
  padding: 20px 15px;
`;
