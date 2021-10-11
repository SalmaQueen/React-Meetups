import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Layout from './Components/Layout/Layout/Layout';

// The Pages components
import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupsPage from './pages/NewMeetups';


function App() {
  return (
    <Layout>


      <Switch>
          <Route path='/' exact={true}>
              <AllMeetupsPage />
            
          </Route>

          <Route path='/new-meetup'>

              <NewMeetupsPage />

          </Route>

          <Route path='/favourites'>

              <FavouritesPage />

          </Route>
      </Switch>
      
    </Layout>
  );
}

export default App;
