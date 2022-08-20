import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {fetchApiById} from '../servises/servisesApi'


export const useFetchEvents = () => {
    const [event, setEvent] = useState(null)
    const params = useParams();
    const id = params.eventId;

    useEffect(() => {
    fetchApiById(id).then(setEvent)
}, [id])
console.log(event)
    return event;


}