import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
//Hashrouter zastepczo za BrowserRouter wówczas # przed dlasza ścieżką

import Home from './Home';
import Events from './Events';
// import HelloYou from './HelloYou';
// import CheckAge from './CheckAge';

function App() {
    return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            
            <Route path="events" element={<Events />}>
                <Route path=":eventNum" element={<Events />} />
            </Route>
            {/* <Route path="checkage">
                blala
                <Route path=":age" element={<CheckAge />} />
            </Route> */}
          </Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Router></>
    );
  }

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);
