
import axios from 'axios'


const KEY = '4KV9Chpg2H2cGNoEZkUT6nJwkLvlEuMx';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';


export const fetchApi = async () => {
    const response = await axios.get(`events?size=20&apikey=${KEY}`)
    
    return response.data._embedded.events;


}

export const fetchApiById = async (id) => {
    
    const response = await axios.get(`events/${id}?apikey=${KEY}`)
    
return response.data
}