import { useState, useContext } from "react";
import { LoginContext } from "../context";
import { LOCAL_URL } from "../services/links";

const useGetEvents = (invest) => {
  // const [invest, setInvest] = useState("MZW"); //wartośc domyśłna tylko do testów usunąć
  const { isLogged } = useContext(LoginContext);

  const handleGetEvents = async (e) => {
    e.preventDefault();
    if (isLogged) {
      const url = `${LOCAL_URL}/events?invest=${invest}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0) {

            console.log(data);
      
        //   zapytanie przeszło mamy wyniki

        } else {
        //   zapytanie przeszło ale brak danych
        }
      } catch (err) {
        console.error(err);
        // błąd wyłąpany
      }
    } else {
    //   dla niezalogowanych brak działania. 

    }
  };

  return {
    handleGetEvents,
    isLogged,
  };
};

export default useGetEvents;
