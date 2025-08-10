import { useContext, useState } from "react";
import { EventsContext, LoginContext } from "../context";
import { useSearchParams } from "react-router-dom";
import StaticPagination from "./StaticPagination";
import OneEvent from "./OneEvent";
import EventInfo from "./EventInfo";
// import { FontAwesomeIcon } from '@react-fontawesome';


const EventsList = ({ EventsArr , addEvent , editEvent , deleteEvent}) => {
    const {isLoading} = useContext(EventsContext);
    const {selectedInvest} = useContext(LoginContext);
    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get("page") || 1;

    const [eventToEdit, setEventToEdit] = useState(null);
    const [isEdited, setIsEdited] = useState(false);


   
    function startEditEvent(eventForEdit){
        setEventToEdit(eventForEdit);
        setIsEdited(true);
        document.querySelector('.shadowDiv').style.display="flex";

    }






    if(isLoading) return (<div>Trwa pobieranie danych...</div>);
    if(EventsArr.lenggth == 0) return (<div>Wygląda na to że nie masz żadnych zgłoszeń gwarancyjnych</div>);


    return (
        <>

        <table>
            <thead>
            <tr>
                <th colSpan={6} style={({textAlign: 'left'})}>Lista zgłoszeń na inwestycji {selectedInvest}</th>
            </tr>
            <tr>
                <th>L.P</th>
                <th>ID Usterki</th>
                <th>Status</th>
                <th>Tytuł</th>
                <th>Opis</th>
                <th>
                    <button onClick={()=>document.querySelector('.shadowDiv').style.display="flex"}>
                        <span className="material-symbols-outlined__add_circle">
add_circle
</span>
                    </button>
                </th>
            </tr>
        </thead>
            <tbody>

               {EventsArr.map( (event, index) =>{
                    if (Math.floor(index / 15) === currentPage - 1)  //zawężenie wyników do pierwszych 15
                        return(<OneEvent key={event.id} event={event} index={index} startEditEvent={startEditEvent}/>)
                    }
                )}
            </tbody>
        </table>
        <hr/>
        <StaticPagination
         max={Math.ceil(EventsArr.length / 15)}
        page={currentPage}
        />
        <hr></hr>
        
        <EventInfo 
            addEvent={addEvent} 
            editEvent={editEvent}
            deleteEvent={deleteEvent}
            eventToEdit={eventToEdit}
            isEditedNOW={isEdited}
        />
      </>
        
    )

};

export default EventsList;