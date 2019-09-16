/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Elements, StripeProvider} from 'react-stripe-elements';

import Home from '../views/Home/Home';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

const notFound = ()=>{
  return(<h1>Not found</h1>);
}
export const RouteList = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/product/:product_id" component={Home} />
      <Route path="/cart/checkout" component={Home} />
      <Route path="/stripe" render={() => <StripeProvider apiKey="pk_test_NcwpaplBCuTL6I0THD44heRe"><Elements><CheckoutForm /></Elements></StripeProvider>} />
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
