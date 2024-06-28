import { useState } from "react";
import {
  // ContactWrapper,
  ContactPage,
  ContactInfo,
  AditionalInfo,
  SocialMedia,
  WorkingHours,
  PrivacyPolicy,
  ContactForm,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
  SocialMediaList,
  SocialMediaListItem,
  SocialMediaLink,
} from "../Contacts/Contacts.style";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Achiziție bilete",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setMessage("Successful message sent");

    // Reset the form
    setFormData({
      name: "",
      email: "",
      subject: "Achiziție bilete",
      message: "",
    });

    // Optionally clear the success message after a few seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    // <ContactWrapper>
    <ContactPage>
      <h1>Contact us</h1>

      <ContactInfo>
        <p>
          <strong>Email:</strong> contact@eventsfusion.com
        </p>
        <p>
          <strong>Phone:</strong> +40 123 456 789
        </p>
        <p>
          <strong>Address:</strong> Str. Bujorilor nr. 10, București, România
        </p>
      </ContactInfo>

      <ContactForm onSubmit={handleSubmit}>
        <FormLabel>
          Nume:
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          Email:
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          Subiect:
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="Achiziție bilete">Achiziție bilete</option>
            <option value="Probleme tehnice">Probleme tehnice</option>
            <option value="Alte întrebări">Alte întrebări</option>
          </select>
        </FormLabel>
        <FormLabel>
          Mesaj:
          <FormTextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </FormLabel>
        <FormButton type="submit">Trimite</FormButton>
        {message && <p>{message}</p>}
      </ContactForm>

      <AditionalInfo>
        <h2>Suport</h2>
        <ul>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#support">Technical Asistence</a>
          </li>
        </ul>
      </AditionalInfo>

      <SocialMedia>
        <h2>Follow Us on Social Media</h2>
        <SocialMediaList>
          <SocialMediaListItem>
            <SocialMediaLink
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </SocialMediaLink>
          </SocialMediaListItem>
          <SocialMediaListItem>
            <SocialMediaLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </SocialMediaLink>
          </SocialMediaListItem>
          <SocialMediaListItem>
            <SocialMediaLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </SocialMediaLink>
          </SocialMediaListItem>
        </SocialMediaList>
      </SocialMedia>

      <WorkingHours>
        <h2>Program de Lucru</h2>
        <p>Luni - Vineri: 09:00 - 18:00</p>
        <p>Sâmbătă: 10:00 - 14:00</p>
      </WorkingHours>

      <PrivacyPolicy>
        <h2>Privacy Policy</h2>
        <a href="#privacy">Read more</a>
      </PrivacyPolicy>
    </ContactPage>
    // </ContactWrapper>
  );
};

export default Contacts;
