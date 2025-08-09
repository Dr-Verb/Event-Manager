import { useContext, useState } from "react";
import { EventsContext, LoginContext } from "../context";
import useAddEvent from "../hooks/useAddEvent";
import useGetAddEvents from "../hooks/useGetAddEvents";


const EventInfo = ({addEvent}) =>{
    const {selectedInvest} = useContext(LoginContext);
    const [uid, setUID] = useState();
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("nowe");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState();

    const dateNow = new Date();
    
    function handleAddEvent(e) {
        e.preventDefault();

        
        const fullData = {
                uid: uid,
                year: (dateNow.getFullYear()),
                invest: selectedInvest,
                status: status,
                title: title,
                description: description,
                note: note,
                author: localStorage.getItem('user')
            };


        if (typeof addEvent === 'function') {
            // console.log("Rozpoczeto próbę dodanie zdarzenia");
        addEvent(fullData);
        const addForm = document.querySelector('.shadowDiv').style.display="none";
        clearData();
        }
    }

    function clearData(){
        setUID();//Jak pozostwiono pusty bez "" to po otworzeniu ponownie okna wyswietla stara wartość, ale nie śle do serwera tego, a gdy wpiszemy "" to do bazy zawsze zostanie dopisana wartość ""   
        setTitle("");
        setStatus("nowe");
        setDescription("");      
        setNote();
    }
   



    return(
        <div className='shadowDiv' >
            <div className="shadowDiv__outerDiv" onClick={(e) => e.target.parentElement.style.display="none"}></div>
            <div className="shadowDiv__innerDiv">
                Dodaj zgłoszenie gwarancyjne dla inwestycji {selectedInvest} 
                <form className="eventInfo_form" onSubmit={handleAddEvent}>  
                    <input value={uid} onChange={(e)=>setUID(e.target.value)} type="number" placeholder="ID: XXX" className="eventInfo_form__input"/> {` / ${dateNow.getFullYear()}`}
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Tytuł zgłoszenia" className="eventInfo_form__input"/>
                    <select value={status} onChange={(e)=>setStatus(e.target.value)} type="text" placeholder="Status" className="eventInfo_form__select">
                        <option value="nowe"hidden >Status zgłoszenia</option>
                        <option value="nowe">nowe</option>
                        <option value="w trakcie">w trakcie</option>
                        <option value="zamknięte" >zamknięte</option>
                        <option value="zakończone">zakończone</option>
                        <option value="odrzucone">odrzucone</option>
                        <option value="_inne_">inny</option>
                    </select><br/>
                    <textarea value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Opis zgłoszenia" className="eventInfo_form__textarea"/>
                    <textarea value={note} onChange={(e)=>setNote(e.target.value)} type="text" placeholder="Dodatkowe notatki" className="eventInfo_form__textarea"/>
                    <button type="submit">Dodaj</button>
                </form>
                {/* <button onClick={handleAddEvent}>Dodaj</button> */}

                
            </div>





        </div>
    );
};
export default EventInfo;