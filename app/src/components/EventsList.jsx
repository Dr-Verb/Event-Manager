import { useContext } from "react";
import { EventsContext } from "../context";
import { useSearchParams } from "react-router-dom";
import StaticPagination from "./StaticPagination";


const EventsList = ({ EventsArr }) => {
    const {isLoading} = useContext(EventsContext);
    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get("page") || 1;

    if(isLoading) return (<div>Trwa pobieranie danych...</div>);
    if(EventsArr.lenggth == 0) return (<div>Wygląda na to że nie masz żadnych zgłoszeń gwarancyjnych</div>);


    return (
        <><ul> Lista zgłoszeń:
            {EventsArr.map( (event, index) =>{
                if (Math.floor(index / 15) === currentPage - 1)  //zawężenie wyników do pierwszych 15
                    return(
                    <li key={index}>{`Zgłoszenie nr: ${event.id} | ${event.status} | dotyczące ${event.title}`}</li>
                    )
            })}

    
        
        </ul>
        <hr/>
        <StaticPagination
         max={Math.ceil(EventsArr.length / 15)}
        page={currentPage}
        />
        <hr/>
      </>
        
    )

};

export default EventsList;