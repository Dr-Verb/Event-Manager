import { useContext } from "react";
import { EventsContext, LoginContext } from "../context";
import { useSearchParams } from "react-router-dom";
import StaticPagination from "./StaticPagination";
import OneEvent from "./OneEvent";
import EventInfo from "./EventInfo";
// import { FontAwesomeIcon } from '@react-fontawesome';


const EventsList = ({ EventsArr, addEvent}) => {
    const {isLoading} = useContext(EventsContext);
    const {selectedInvest} = useContext(LoginContext);
    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get("page") || 1;

    if(isLoading) return (<div>Trwa pobieranie danych...</div>);
    if(EventsArr.lenggth == 0) return (<div>Wygląda na to że nie masz żadnych zgłoszeń gwarancyjnych</div>);


    return (
        <>

        <table> <thead>
            <tr>
                <th colSpan={5} style={({textAlign: 'left'})}>Lista zgłoszeń na inwestycji {selectedInvest}</th>
            </tr>
            <tr>
                <th>L.P</th>
                <th>ID Usterki</th>
                <th>Status</th>
                <th>Tytuł</th>
                <th>Opis</th>
                <th> 
                    <button onClick={()=>document.querySelector('.shadowDiv').style.display="flex"}>
                        (+) Dodaj Zgłoszenie
                    </button>
                    
                </th>
            </tr>
        </thead>
            <tbody>

               {EventsArr.map( (event, index) =>{
                    if (Math.floor(index / 15) === currentPage - 1)  //zawężenie wyników do pierwszych 15
                        return(<OneEvent event={event} index={index}/>)
                    }
                )}
            </tbody>
        </table>
        <hr/>
        <StaticPagination
         max={Math.ceil(EventsArr.length / 15)}
        page={currentPage}
        />
        <hr/>
        <EventInfo addEvent={addEvent}/>
      </>
        
    )

};

export default EventsList;