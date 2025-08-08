import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 

import HeaderBar from './site_parts/HeaderBar';
import FooterBar from './site_parts/FooterBar';
import Main from './site_parts/Main';
import { LoginProvider } from './context/LoginContext';
import { EventsProvider } from './context/EventsContext';

function Home(){
    return (
        <>
        <LoginProvider>
            <EventsProvider>
                <HeaderBar/>
                <Main/> 
                <FooterBar/>
            </EventsProvider>
        </LoginProvider>
        </>
    )

};

export default Home;