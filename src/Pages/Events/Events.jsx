import useFetchEvents from "../../Components/hooks/useFetchEvents";
import { EventWrapContainer } from "./Events.style";

import React, { useEffect, useState } from "react";

import EventsWrapper from "./EventsWrapper";
const Events = () => {
  const [events, setEvents] = useState([]);
  const { events: eventsFetch } = useFetchEvents();

  useEffect(() => {
    if (!eventsFetch) return;

    setEvents(eventsFetch);
  }, [eventsFetch]);

  return (
    <>
      <EventWrapContainer>
        {events.map((eveniment, index) => (
          <EventsWrapper key={index} {...eveniment} />
        ))}
      </EventWrapContainer>
    </>
  );
};

export default Events;
