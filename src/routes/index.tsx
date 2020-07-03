import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Product from '../templates/product';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/product/:id" exact component={Product} />
  </Switch>
);
export default Routes;
