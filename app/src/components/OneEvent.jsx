const OneEvent = ({ event, index }) => {
    

    return (
        <tr key={index} onMouseOver={()=> console.log('kliknieto')}>
            <td>{index+1}</td>
            <td>{`${event.uid}/${event.year}`}</td>
            <td>{event.status}</td>
            <td>{event.title.length > 15 ? `${event.title.slice(0,15)}...`: event.title}</td>
            <td>{event.description.length > 100 ? `${event.description.slice(0,100)}...`: event.description}</td>
            <td>szczegóły</td>
        </tr>

    )
};

export default OneEvent;