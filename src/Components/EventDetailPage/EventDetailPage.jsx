import React from "react";

import {
  DivEvent,
  ImgEvent,
  DivDetails,
  DetailsName,
  DetailsOther,
  DivDetailsAll
} from "./EventDetailPage.style";
import { useParams } from "react-router-dom";
import useFetchEvents from "../hooks/useFetchEvents";

function EventDetailPage() {
  const { id } = useParams();
  const { events: event } = useFetchEvents("/" + id);
  console.log(event);

  return (
    <DivEvent>
      <ImgEvent src={event?.img} alt="" />
      <DivDetailsAll>
        <DetailsName>{event?.name}</DetailsName>
        <DivDetails>
          <DetailsOther>Category: {event?.category}</DetailsOther>
          <DetailsOther>City: {event?.city}</DetailsOther>
          <DetailsOther>Location: {event?.location}</DetailsOther>
          <DetailsOther>Date: {event?.date}</DetailsOther>
          <DetailsOther>Price: {event?.price}</DetailsOther>
        </DivDetails>
      </DivDetailsAll>
    </DivEvent>
  );
}
export default EventDetailPage;
