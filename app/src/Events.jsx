import React, { useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';
import { LoginContext } from './context';
import useGetEvents from './hooks/useGetEvents';
// import { EventsList } from './components/EventsList';



function Events(){
    const { 
        handleGetEvents,
        events
    } = useGetEvents("MZW");



    const { eventNum } = useParams();
    const { isLogged } = useContext(LoginContext);
    return (
        <>
        {!isLogged && <>Strona dla zalogowanych użytkowników!!</>}
        {(eventNum === undefined || "all") ? "Cała Lista" : "Zły parametr"}
        LISTA ZGŁOSZEŃ {eventNum} 
        {/* {console.log(eventNum)} */}

        <button style={({display: 'block', height: '20px'})}type="submit" onClick={handleGetEvents}>
            pobierz dane
          </button>
         <hr/>
          {/* <EventsList/> */}

        </>
    )

};

export default Events;