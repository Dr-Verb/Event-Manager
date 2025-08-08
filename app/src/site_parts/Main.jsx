import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 

import Menu_left from './Menu_left';
import LoginForm from './../components/LoginForm';

function Main(){
    return (
        <main className='main'> 
            {/* <Menu_left/> */}
            <Outlet/>
            
            
        </main>
    )

};

export default Main;