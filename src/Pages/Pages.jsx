import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CV from './CV/CV';
import SpaceFighter from './SpaceFighter/SpaceFighter';
import Home from './Home/Home';
import './Pages.scss';

const Pages = () => (
  <div className="pages">
    <Switch>
      <Route path="/CV">
        <CV />
      </Route>

      <Route path="/Space-Fighter">
        <SpaceFighter />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default Pages;
