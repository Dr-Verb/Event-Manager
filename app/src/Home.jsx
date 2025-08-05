import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 

import HeaderBar from './site_parts/HeaderBar';
import FooterBar from './site_parts/FooterBar';
import Main from './site_parts/Main';
import { LoginProvider } from './context/LoginContext';

function Home(){
    return (
        <>
        <LoginProvider>
        <HeaderBar/>
        <Main/> 
        <FooterBar/>
        </LoginProvider>
        </>
    )

};

export default Home;