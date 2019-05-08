/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/Home/Home';

const notFound = ()=>{
  return(<h1>Not found</h1>);
}
export const RouteList = () => (
  <React.Fragment>
    <Route/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search/:" component={Home} />
      <Route component={notFound} />
    </Switch>
  </React.Fragment>
);

const Routes = () => (
  <Router>
    <RouteList />
  </Router>
);

export default Routes;
