import styled from "styled-components";
import { GRAY, WHITE_NEUTRAL } from "../../Constants/color";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  background-image: url("https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position-y: 0;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const HomeImgBackground = styled.img`
  width: 100%;
  padding: 20px 0px;
  height: auto;
  min-height: 800px;
  position: relative;
`;

export const HomeTitle = styled.h1`
  /* color: ${GRAY}; */
  color: white;
  width: 100%;
  font-size: 90px;
  font-family: "Lucida Handwriting", "Brush Script MT", cursive;
  position: absolute;
  margin: 0;
  top: calc(50% - 100px);
  left: 0;
  display: flex;
  justify-content: center;
  box-shadow: 10px;
`;

export const HomeSlogan = styled.p`
  color: white;
  width: 100%;
  font-size: 30px;
  position: absolute;
  margin: 0;
  top: calc(50% - 10px);
  left: 0;
  display: flex;
  justify-content: center;
  box-shadow: 10px;
`;
