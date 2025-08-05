import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 


function FooterBar(){
    return (
        <footer className="footer"> 
            Stopka z nazwą firmy zarządzającej zgłoszeniami oraz dane kontaktowe, itp, oraz dane na temat autora strony.<br/>
            Do uzupełnienia już na samym końcu :)
            Logo firmy użyte w projekcie <a href="http://www.freepik.com">Designed by starline / Freepik</a>


        </footer>
    )

};

export default FooterBar;