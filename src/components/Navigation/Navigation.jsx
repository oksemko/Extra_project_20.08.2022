import {NavLink} from 'react-router-dom'

export const Navigation = () => {
    return (
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='events'>Events</NavLink>
            </li>

        </ul>

    )


}