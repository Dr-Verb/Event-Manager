import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';


function Events(){
    const { eventNum } = useParams();
    return (
        <>
        {(eventNum === undefined || "all") ? "Cała Lista" : "Zły parametr"}
        LISTA ZGŁOSZEŃ {eventNum} 
        {console.log(eventNum)}

        </>
    )

};

export default Events;