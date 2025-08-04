import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet, NavLink } from 'react-router-dom'; 


function Menu_left(){

    const activeStyle = {
        border: 'solid green', 
        margin: '10px',
        padding: '2px',
        color: 'green'
        };
        const commonStyle = {
        color: 'green'
        }


    return (
        <nav> 
            <ul>Zgłoszenia
                <NavLink end to="/events/all" style={({ isActive }) => isActive ? activeStyle : commonStyle}>Zgłoszenia all</NavLink>
                <NavLink end to="/events" style={({ isActive }) => isActive ? activeStyle : commonStyle}>Zgłoszenia</NavLink>
                <li>Wszystkie</li>
                <li>Aktywne</li>
                <li>Zakończone</li>
                <li></li>
                <li>Dodaj Zgłoszenie</li>
            </ul>
        </nav>
    )

};

export default Menu_left;