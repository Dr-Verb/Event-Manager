import { useState, useContext, useEffect } from "react";
import { EventsContext, LoginContext } from "../context";
import { LOCAL_URL } from "../services/links";

const useGetAddEvents = (invest) => {
  // const [invest, setInvest] = useState("MZW"); //wartośc domyśłna tylko do testów usunąć
  const { isLogged, selectedInvest } = useContext(LoginContext);
  const {setEventsList, setIsLoading } = useContext(EventsContext);
  const [events, setEvents] = useState([]);

  const handleGetEvents = (e) => { //do ręcznego pobierania buttonem
    e.preventDefault();
    getEvents();
  }

  /////////////////////// Scalone z useAddEvent 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  ////////////////////////////////////////////////

  const getEvents = async () => {
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
                setEventsList(events);
                //   zapytanie przeszło mamy wyniki :)
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

    useEffect(() => {
    getEvents();
  }, [selectedInvest]);



  ///////////////////////////     \/\/scalone z useAddEvents
   const addEvent = async (addedEvent) => {
        setLoading(true);
        setError(null);

        try {

        const response = await fetch(`${LOCAL_URL}/events`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addedEvent),
        });


        if (!response.ok) {
            throw new Error("Failed to adding new event.");
        } else {
          // console.log("Dodano nowe zgłoszenie");
          setEvents((prevEvents)=> [...prevEvents, addedEvent]);



        } 
        

        setLoading(false);
        return true;
        } catch (e) {
        setError(e.message);
        setLoading(false);
        return false;
        }
    }






  return {
    events,
    handleGetEvents,
    getEvents,
    addEventToEvents,
    isLogged,
    addEvent, //z add
    loading,  //z add
    error     //z add
  };
};

export default useGetAddEvents;
