import styled from "styled-components";

// export const ContactWrapper = styled.div`
//   background-image: url("/CloudsBackground.png");
//   width: 100%;
//   height: 100vh;
//   background-color: white;
//   background-position-y: 0;
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

// export const ContactImgBackground = styled.img`
//   width: 100%;
//   padding: 20px 0px;
//   height: auto;
//   min-height: 800px;
//   position: relative;
// `;

export const ContactPage = styled.div`
  padding: 20px;
  display: flex;
  /* background-image: url("/CloudsBackground.png"); */
  justify-content: center;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: auto;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
  background-color: #d0dcf4;
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
