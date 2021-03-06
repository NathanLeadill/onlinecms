import React, { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import LandingPage from './Pages/LandingPage'
import WebsitePage from './Pages/WebsitePage'

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/website" component={WebsitePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
    );
  };



  export default App;
