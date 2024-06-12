import styled from "styled-components";

export const DivEvent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 90px 25px;
  padding: 5px 400px 5px 100px;
  background: rosybrown;
  color: black;
  height: auto;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ImgEvent = styled.img`
  width: 500px;
  height: 700px;
  border-radius: 4px;
`;
export const DivDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: red;
  margin-top: 90px;
`;

export const DetailsName = styled.h1`
  margin-bottom: 200px;
  font-size: 50px;
  margin: 0;
`;

export const DetailsOther = styled.p`
  font-size: 20px;
  padding: 10px;
`;

export const DivDetailsAll = styled.div`
  display: flex;
  flex-direction: column;
`;
