import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import  EventsContext  from "../context/EventsContext";

const EventsList = ({ events, forEdit }) => {
  const { isLoading } = useContext(EventsContext);
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  return (
  <>
  fghjmk,
  </>
  )

};
export default EventsList;
