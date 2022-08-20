
import { useFetchEvents } from '../../hooks/hooks'
import {useLocation, useNavigate} from 'react-router-dom'
export const EventDetailsView = () => {
   const event = useFetchEvents();
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
            {event && 
                <>
                <button onClick={()=>navigate(location?.state?.from ?? '/')}>Go Back</button>
                <h2>{event.name}</h2> 
                <img width={400} src={event.images[1].url} alt={event.name} />
                <p> Date: {event.dates.start.localDate}</p>
                <p> Time: {event.dates.start.localTime}</p>
                <p>Location: {event.dates.timezone}</p>
                <p> Tickets free: {event.accessibility.ticketLimit }</p>
                
            </>
                
        }
        </>

)
    

}