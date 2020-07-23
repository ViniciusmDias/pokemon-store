import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Card from '../templates/card';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/card/:id" exact component={Card} />
  </Switch>
);
export default Routes;
