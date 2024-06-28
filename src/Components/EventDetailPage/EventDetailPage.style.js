import styled from "styled-components";
import { SKY_BLUE, GRAY_BLUE } from "../../Constants/color";

export const DivEvent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 25px;
  padding: 20px;
  background: #a6b1c4;
  color: black;
  height: auto;
  gap: 16px;
  flex-wrap: wrap;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ImgEvent = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DivDetails = styled.div`
  display: flex;
  justify-content: left;
  text-align: left;
  flex-direction: column;
  background-color: #668aae;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const DetailsName = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  color: white;
  text-align: center;
`;

export const DetailsOther = styled.p`
  font-size: 20px;
  padding: 10px;
  color: white;
`;

export const DivDetailsAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DetailsButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  background-color: #ffaebc;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;
