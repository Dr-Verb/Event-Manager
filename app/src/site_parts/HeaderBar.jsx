import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


function HeaderBar(){
    return (
        <header class="header">


        
        <div class="header__logo">LOGO FIRMY</div>
        <div> 
            Sekcja Logowania + rejestracja 
            Po zalogowaniu POwitanie + Zakałdki [zgłoszenia] [budowy] [użytkownicy*] 
            <br/>* dla adminia - zarzadzanie użytkownikami

        </div>
        
        
        
        </header>
    )

};

export default HeaderBar;