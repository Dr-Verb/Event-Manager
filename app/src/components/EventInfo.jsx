import { useContext, useState, useEffect } from "react";
import { EventsContext, LoginContext } from "../context";

import useGetAddEvents from "../hooks/useGetAddEvents";


const EventInfo = ({addEvent, editEvent, deleteEvent, eventToEdit, isEditedNOW}) =>{
    const {selectedInvest} = useContext(LoginContext);
    const [uid, setUID] = useState(0);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("nowe");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");

    const dateNow = new Date();

    const [isEdited,setIsEdited] = useState(false);

    
    // if(isEditedNOW) {setIsEdited(true)}
    useEffect(() => {
        if(isEditedNOW) {setIsEdited(true)};
      }, [isEditedNOW , eventToEdit]);
    

    if (isEdited){
    
        // clearData();
        const formItem =document.querySelector('.eventInfo_form').children;
        // console.log(formItem)

        formItem[0].value = eventToEdit.uid;
        formItem[1].innerHTML = ` / ${eventToEdit.year}`;
        formItem[2].value = eventToEdit.title;
        formItem[3].value = eventToEdit.status;
        // nr 4 to <br/>
        formItem[5].value = eventToEdit.description;
        formItem[6].value = eventToEdit.note;
        formItem[7].innerHTML = "Zatwierdź zmiany";

    } else {

    }


    function handleEditEvent(e){
        e.preventDefault();

         const editedData = {
                id: eventToEdit.id,
                uid: (uid ? uid : ""),
                year: eventToEdit.year,
                invest: selectedInvest,
                status: status,
                title: (title ? title : ""),
                description: (description ? description : ""),
                note: note,
                author: eventToEdit.author
            };

        if (typeof editEvent === 'function') {
             console.log("Rozpoczeto próbę dodanie zdarzenia");
        editEvent(editedData, eventToEdit.id);
        const addForm = document.querySelector('.shadowDiv').style.display="none";
        clearData();
        }
    }



    function handleAddEvent(e) {
        e.preventDefault();

        
        const fullData = {
                uid: (uid ? uid : ""),
                year: (dateNow.getFullYear()),
                invest: selectedInvest,
                status: status,
                title: (title ? title : ""),
                description: (description ? description : ""),
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


    
    function handleDeleteEvent(e) {
        e.preventDefault();

        if (typeof deleteEvent === 'function') {
            // console.log("Rozpoczeto próbę dodanie zdarzenia");
        deleteEvent(eventToEdit.id);
        const addForm = document.querySelector('.shadowDiv').style.display="none";
        clearData();
        }
    }

    function clearData(){
        setUID(0);//Jak pozostwiono pusty bez "" to po otworzeniu ponownie okna wyswietla stara wartość, ale nie śle do serwera tego, a gdy wpiszemy "" to do bazy zawsze zostanie dopisana wartość ""   
        setTitle("");
        setStatus("nowe");
        setDescription("");      
        setNote("");
    }

     function setData(event){
        setUID(event.uid); 
        setTitle(event.title);
        setStatus(event.status);
        setDescription(event.description);      
        setNote(event.note);
    }
     const styleHide ={
        display: 'none'
    };
      const styleNoHide ={
        display: ''
    };



    return(
        <div className='shadowDiv'>
            <div className="shadowDiv__outerDiv" onClick={(e) => {setIsEdited(false);
                e.target.parentElement.style.display="none"}}></div>
            <div className="shadowDiv__innerDiv">
                {isEdited ? "Edytuj" : "Dodaj"} zgłoszenie gwarancyjne dla inwestycji {selectedInvest} <span className="material-symbols-outlined__delete_forever" onClick={handleDeleteEvent}>delete_forever</span>
                <form className="eventInfo_form" onSubmit={isEdited ? handleEditEvent : handleAddEvent}>  
                    <input value={uid} onChange={(e)=>setUID(e.target.value)} type="number" placeholder="ID: XXX" className="eventInfo_form__input"/> <span>{` / ${dateNow.getFullYear()}`}</span>
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