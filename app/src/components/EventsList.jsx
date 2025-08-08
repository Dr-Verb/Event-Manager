import { useContext } from "react";
import { EventsContext } from "../context";

const EventsList = ({ EventsArr }) => {
    const {isLoading} = useContext(EventsContext);

    if(isLoading) return (<div>Trwa pobieranie danych...</div>);
    if(EventsArr.lenggth == 0) return (<div>Wygląda na to że nie masz żadnych zgłoszeń gwarancyjnych</div>);


    return (
        <ul> Lista zgłoszeń:
            {EventsArr.map( (event, index) => <li key={index}>{`Zgłoszenie nr: ${event.id} | ${event.status} | dotyczące ${event.title}`}</li>
            )}

    
        
        </ul>
        
    )

};

export default EventsList;