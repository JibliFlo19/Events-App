import { useState, useEffect } from "react";

const API_URL = "http://localhost:3002/events";

const useFetchEvents = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL); // /1
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const eventsData = await response.json();
        console.log(eventsData);
        setEvents(eventsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { events };
};

export default useFetchEvents;
