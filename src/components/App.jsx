import { Route, Routes} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import { HomeViews } from '../views/HomeViews'
import { EventsView } from '../views/EventsView/EventsView'
import { EventSubView } from '../views/EventSubView/EventSubView'
import { EventDetailsView } from '../views/EventDetailsView/EventDetailsView'
import {NotFoundView} from '../views/NotFoundView/NotFoundView'
export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
         <Route index element={<HomeViews/>} /> 
         <Route path='events' element={<EventsView />}> 
          <Route path=':eventId' element={<EventSubView/> } />
        </Route>  
      </Route>
      <Route path='events/:eventId/details' element={<EventDetailsView />} />
      <Route path='*' element ={<NotFoundView/>}/>
    </Routes>
  );
};
