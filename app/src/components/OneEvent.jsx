import { useState } from "react";
import EventInfo from "./EventInfo";

const OneEvent = ({ event, index, startEditEvent}) => {
    const [isHide, setisHide] = useState(true);
    const styleHide ={
        display: 'none'
    };
      const styleNoHide ={
        display: ''
    };

    function showAndHide(){
       // setisHide(!isHide); //nie realizujemy w tabeli zaniechane, zmieniona koncepcaj na razie tylko wyłączono bez usuniecia. //po przemysleniach funkcja dobra dla użytkownika poziomu 1 tylko podgląd.

        (localStorage.getItem("userLVL") > 1 ) ? startEditEvent(event) : setisHide(!isHide);

    }
    

    return (<>
        <tr key={event.id}>
            <td>{index+1}</td>
            <td>{`${event.uid}/${event.year}`}</td>
            <td>{event.status}</td>
            {(isHide) && <td>{event.title.length > 15 ? `${event.title.slice(0,15)}...`: event.title}</td>}
            {(!isHide) && <td colSpan ={2}>{event.title.length > 15 ? `${event.title.slice(0,15)}...`: event.title}</td>}
            {isHide && <td>{event.description.length > 100 ? `${event.description.slice(0,100)}...`: event.description}</td>}
            <td><button onClick={() => showAndHide()}><span className="material-symbols-outlined__settings" 
                >settings</span></button></td>
        </tr>
    
        <tr key={event.id+1} style={ isHide ? styleHide: styleNoHide}>
            <td colSpan={3} style={({width: '50%'})}>{event.description}</td>
            <td colSpan={3}  style={({width: '50%'})}>{`${event.note}`}</td>
            
        </tr>
        </>

    )
};

export default OneEvent;