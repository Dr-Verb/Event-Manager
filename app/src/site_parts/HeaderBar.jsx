import React, { useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login  from "../shared/Login";
import NavBar from './NavBar';
import { LoginContext } from '../context';



function HeaderBar(){
    const { isLogged } = useContext(LoginContext);

    return (
        <header className="header">


        
        <div className="header__logo">LOGO FIRMY</div>
        
        <div className='header__menu'> 
     
            <Login />
            {isLogged && <NavBar/>}
            

        </div>
        
        
        
        </header>
    )

};

export default HeaderBar;