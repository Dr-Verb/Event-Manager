import { useState, useContext } from "react";
import { EventsContext, LoginContext } from "../context";
import { LOCAL_URL } from "../services/links";

const useGetEvents = (invest) => {
  // const [invest, setInvest] = useState("MZW"); //wartośc domyśłna tylko do testów usunąć
  const { isLogged, selectedInvest } = useContext(LoginContext);
  const {setEventsList, setIsLoading } = useContext(EventsContext);
  const [events, setEvents] = useState([]);

  const handleGetEvents = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (isLogged) {
      const url = `${LOCAL_URL}/events?invest=${selectedInvest}`;
      try {
        setIsLoading(true);
        await fetch(url)
          .then((response) => {
            if (response.ok){
            const data = response.json();
            return data;
            }
            throw new Error ('Nie pobrano danych');
          })
          .then((data)=>{
            if (data.length > 0) {
                setEvents(data);
                //   zapytanie przeszło mamy wyniki
            } else {
              console.error(`Załadowane dane są puste`);
            }}
          )
          .catch((err) => console.error(`Wystąpił błąd: ${err}`));
      } catch (err) {
        console.error(`Wystąpił błąd: ${err}`);
        // błąd wyłąpany
      } finally {
        setIsLoading(false);
        //console.log(events);
      }
    } else {
      console.error(`Tylko zalogowani użytkownicy mogą pobierać dane!`);
    //   dla niezalogowanych brak działania. 
    };
  };


  return {
    handleGetEvents,
    isLogged,
  };
};

export default useGetEvents;
