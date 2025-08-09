import { useContext, useState } from "react";
import { LoginContext } from "../context";
import { LOCAL_URL } from "../services/links"
import useGetAddEvents from "./useGetAddEvents";

const useAddEvent = () => {
    const {selectedInvest} = useContext(LoginContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const {setEvents} = useGetEvents();

    const addEvent = async (event) => {
        setLoading(true);
        setError(null);

        try {

        const response = await fetch(`${LOCAL_URL}/events`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(event),
        });


        if (!response.ok) {
            throw new Error("Failed to adding new event.");
        } else {



        } 
        

        setLoading(false);
        return true;
        } catch (e) {
        setError(e.message);
        setLoading(false);
        return false;
        }
    }



  return { addEvent, loading, error };
};
export default useAddEvent;