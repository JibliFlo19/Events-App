import React from "react";
import {
  Card,
  CardImgContainer,
  CardImg,
  CardInfoContainer,
  Title,
  Text,
  UperText,
} from "./EventsWrapper.style";

function EventsWrapper({
  category,
  img,
  city,
  name,
  date,
  location,
  description,
  price,
}) {
  return (
    <Card to={`/event`}>
      <CardImgContainer>
        <CardImg src={img} />
      </CardImgContainer>
      <CardInfoContainer>
        <Title>
          <UperText></UperText> {name}
        </Title>
        <Text>
          <UperText>Category: </UperText> {category}
        </Text>
        <Text>
          <UperText>Description: </UperText> {description}
        </Text>
        <Text>
          <UperText>City: </UperText>
          {city}
        </Text>
        <Text>
          <UperText>Location: </UperText>
          {location}
        </Text>
        <Text>
          <UperText>Date: </UperText>
          {date}
        </Text>
        <Text>
          <UperText>Price: </UperText>
          {price}
        </Text>
      </CardInfoContainer>
    </Card>
  );
}

export default EventsWrapper;
