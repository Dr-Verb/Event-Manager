import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login  from "../shared/Login";



function HeaderBar(){
    return (
        <header className="header">


        
        <div className="header__logo">LOGO FIRMY</div>
        
        <div> 
     
            <Login />
            
            Sekcja Logowania + rejestracja 
            Po zalogowaniu POwitanie + Zakałdki [zgłoszenia] [budowy] [użytkownicy*] 
            <br/>* dla adminia - zarzadzanie użytkownikami

        </div>
        
        
        
        </header>
    )

};

export default HeaderBar;