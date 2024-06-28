import styled from "styled-components";



export const PageWrapper = styled.div`
  background-image: url("https://media.discordapp.net/attachments/1242891295110729881/1255972322083475539/WhiteClouds.png?ex=667f12e0&is=667dc160&hm=9d4370ab89988b257dcd9bccc92e2c91562a491f13cfec9083bfc481c5fbdecf&=&format=webp&quality=lossless&width=1177&height=662");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


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

  export const SignUpContainerButton = styled.button`

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