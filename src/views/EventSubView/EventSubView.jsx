
import { useFetchEvents } from '../../hooks/hooks'
import {Link, useLocation} from 'react-router-dom'
export const EventSubView = () => {
    const event = useFetchEvents();
    const location = useLocation();

console.log(location)
    return (
        <>
            {event && 
                <>
                <img width={200} src={event.images[0].url} alt="" />
                <h2>{event.name}</h2>
                <Link state={location.state} to='details'>More detalis</Link>
                </>
        
    }
    </>)

}