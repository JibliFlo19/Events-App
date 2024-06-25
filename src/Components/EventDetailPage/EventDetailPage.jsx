import React from "react";

import {
  DivEvent,
  ImgEvent,
  DivDetails,
  DetailsName,
  DetailsOther,
  DivDetailsAll
} from "./EventDetailPage.style";
import { useNavigate, useParams } from "react-router-dom";
import useFetchEvents from "../hooks/useFetchEvents";

function EventDetailPage() {
  const { id } = useParams();
  const { events: event } = useFetchEvents("/" + id);
  console.log(event);
  const navigate = useNavigate();
 
  const addToBasket = () => {
    let count = JSON.parse(localStorage.getItem('basketCount')) || 0;
    count += 1;
    localStorage.setItem('basketCount', JSON.stringify(count));
    navigate('/profile');
  };
  
  return (
    <DivEvent>
      <ImgEvent src={event?.img} alt="" />
      <DivDetailsAll>
        <DetailsName>{event?.name}</DetailsName>
        <DivDetails>
          <DetailsOther>Category: {event?.category}</DetailsOther>
          <DetailsOther>City: {event?.city}</DetailsOther>
          <DetailsOther>Location: {event?.location}</DetailsOther>
          <DetailsOther>Description: {event?.description}</DetailsOther>
          <DetailsOther>Date: {event?.date}</DetailsOther>
          <DetailsOther>Price: {event?.price}</DetailsOther>
          <button onClick={addToBasket}>Add to Basket</button>
        </DivDetails>
      </DivDetailsAll>
    </DivEvent>
  );
}
export default EventDetailPage;
