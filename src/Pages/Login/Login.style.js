import styled from "styled-components";


export const LoginContainer = styled.div`
 
background-color: #D0DCF4;
display: flex;
justify-content: center;
flex-direction: column;
width: 400px;
margin: auto;
padding: 100px;
border: 1px solid #ccc;
border-radius: 10px;
margin-top: 80px;
margin-bottom: 200px;


`;

export const LoginContainerTitle = styled.h2`
    text-align: center;
`;

export const LoginContainerForm = styled.form`
    margin-bottom: 15px;
`;

export const LoginContainerLabel = styled.label`
    display: block;
    margin-bottom: 5px;
 `;

export const LoginContainerInput = styled.input`
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
`;

export const LoginContainerButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
      background-color: #0056b3;
    }
`;