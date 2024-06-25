import styled from "styled-components";


export const App = styled.div`
text-align: center;

`;
export const SignUpContainer = styled.div`
  background-color: #FFFFF;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`;

export const SignUpContainerTitle = styled.h1`
  font-size: 2em;
`;

export const SignUpnContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const SignUpContainerLabel = styled.label`
  margin: 10px;
  display: flex;
  align-items: center;
  

`;

export const SignUpContainerInput = styled.input`
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
 
`;

export const SignUpContainerButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;
