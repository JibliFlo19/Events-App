import styled from "styled-components";


export const ContactContainer = styled.div`
  background-image: url("https://media.discordapp.net/attachments/1242891295110729881/1255972322083475539/WhiteClouds.png?ex=667f12e0&is=667dc160&hm=9d4370ab89988b257dcd9bccc92e2c91562a491f13cfec9083bfc481c5fbdecf&=&format=webp&quality=lossless&width=1177&height=662");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactPage = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: auto;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
  background-color: #CECAD4;
  box-shadow: 0 4px 8px rgba;
`;
export const ContactInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400 px;
`;

export const AditionalInfo = styled.div`
  margin-bottom: 20px;
`;

export const SocialMedia = styled.div`
  margin-bottom: 20px;
`;

export const WorkingHours = styled.div`
  margin-bottom: 20px;
`;

export const PrivacyPolicy = styled.div`
  margin-bottom: 20px;
`;

export const ContactForm = styled.form`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SocialMediaList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SocialMediaListItem = styled.li`
  display: inline;
  margin-right: 10px;
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;
