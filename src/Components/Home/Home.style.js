import styled from "styled-components";
import { GRAY, WHITE_NEUTRAL } from "../../Constants/color";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

export const HomeImgBackground = styled.img`
  width: 100%;
  padding: 20px 0px;
  height: auto;
  min-height: 800px;
  position: relative;
`;

export const HomeTitle = styled.h1`
  color: ${GRAY};
  width: 100%;
  font-size: 90px;
  position: absolute;
  margin: 0;
  top: calc(50% - 45px);
  left: 0;
  display: flex;
  justify-content: center;
  box-shadow: 10px;
`;

export const HomeSlogan = styled.p`
  color: ${WHITE_NEUTRAL};
  width: 100%;
  font-size: 30px;
  position: absolute;
  margin: 0;
  top: calc(50% + 60px);
  left: 0;
  display: flex;
  justify-content: center;
  box-shadow: 10px;
`;
