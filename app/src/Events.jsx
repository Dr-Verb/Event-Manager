import React, { useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';
import { EventsContext, LoginContext } from './context';
import useGetAddEvents from './hooks/useGetAddEvents';
// import { EventsList } from './components/EventsList';
import LoginForm from './components/LoginForm';
// import eventsList from './components/EventsList';
import EventsList from './components/EventsList';
import { useEffect } from 'react';


function Events(){
    const { 
        handleGetEvents,
        getEvents,
        events,
        addEvent,
        editEvent,
        deleteEvent,
    } = useGetAddEvents();
    const {eventsList} = useContext(EventsContext);



    const { eventNum } = useParams();
    const { isLogged, selectedInvest } = useContext(LoginContext);



    return (
        <>
        {!isLogged && <>Strona dla zalogowanych użytkowników!!</>}
         <hr/>
          <EventsList EventsArr={events} addEvent={addEvent} editEvent={editEvent} deleteEvent={deleteEvent}/>

        </>
    )

};

export default Events;