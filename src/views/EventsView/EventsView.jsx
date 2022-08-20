
import { useState, useEffect } from 'react';
import { fetchApi } from '../../servises/servisesApi';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const EventsView = () => {
    const [array, setArray] = useState([])
    const location = useLocation();
    console.log(location)
    useEffect(() => {
    fetchApi().then(setArray)
      }, [])

    return (
      <>
        <ul>
            {array && array.map(
                ({ name, id }) => (
                    <li key={id}>
                        <Link state={{from:location.pathname}} to={id}>{name }</Link>
             </li>       
                )     
            )}
      </ul>
      <Outlet/>
</>
)

}