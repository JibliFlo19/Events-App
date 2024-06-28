import styled from "styled-components";
import { SKY_BLUE, GRAY_BLUE } from "../../Constants/color";

export const DivEvent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 90px 25px;
  padding: 5px 400px 0px 100px;
  background: white;
  color: black;
  height: auto;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ImgEvent = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 5%;
`;
export const DivDetails = styled.div`
  display: flex;
  justify-content: left;
  text-align: left;
  flex-direction: column;
  background-color: ${SKY_BLUE};
  border: ${GRAY_BLUE};
  border-style: solid;

  /* margin-top: 90px; */
`;

export const DetailsName = styled.h1`
  margin-bottom: 200px;
  font-size: 50px;
  margin: 0;
  font-family: "Lucida Handwriting", "Brush Script MT", cursive;
`;

export const DetailsOther = styled.p`
  font-size: 20px;
  padding: 3px;
`;

export const DivDetailsAll = styled.div`
  display: flex;
  flex-direction: column;
`;
