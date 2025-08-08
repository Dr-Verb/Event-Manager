import { createContext, useState } from "react";

const EventsContext = createContext();

const EventsProvider = ({ children }) => {
  const [eventsList, setEventsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <EventsContext.Provider
      value={{ eventsList, setEventsList, isLoading, setIsLoading }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export { EventsContext, EventsProvider };
