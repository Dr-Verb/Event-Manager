import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 

import Menu_left from './Menu_left';

function Main(){
    return (
        <main> 
            <Menu_left/>
            <Outlet/>
            
            
        </main>
    )

};

export default Main;