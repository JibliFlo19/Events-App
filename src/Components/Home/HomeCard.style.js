import styled from "styled-components";
import { GRAY, WHITE_NEUTRAL } from "../../Constants/color";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  width: 100%;
  height: auto;
  position: relative;
  margin: 10px;
`;

export const Card = styled.div`
  background: ${GRAY};
  width: 800px;
  height: 500px;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
`;

export const CardTitle = styled.h1`
  color: ${WHITE_NEUTRAL};
  font-size: 40px;
  text-align: center;
`;
