//UWAGA wybraćwłaściwie. Jeżeli sprawdzane na localhost pozostawić pierwszy zapis, jeżęli w sieci lokalnej należy zmienić IP tu i w package.json od serwera JSON lub zmienić nazwe skryptu lub usunąć zbędny

//Przy testowaniu na localhost
    // "dev": "json-server --watch db.json --port 3001", 

//Przy testach w sieci lokalnej
    // "dev": "json-server --watch db.json --port 3001 --host 192.168.18.6" 
////////////////////////////////////////////////////

// export const LOCAL_URL = "http://localhost:5001";
export const LOCAL_URL = "http://192.168.18.6:3001"; // Wystawiałem do podglądu w sieci lokalnej :) ale po zmianie IP należy aktualizować ip tu + w package.json od serwera

