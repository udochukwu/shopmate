import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import jwtDecode from 'jwt-decode';
import {Elements, StripeProvider} from 'react-stripe-elements';
import configureStore from './redux/store/configureStore';
import initialState from './redux/reducers/initialState';
import { LOGIN_SUCCESS } from './redux/constants/authActionTypes';
import { setAuthToken } from "./services/AuthToken";

import './index.scss';
import './fonts.scss';
import Routes from './routes';

const store = configureStore(initialState);

if (localStorage.getItem('sm-token')) {
  store.dispatch({
    type: LOGIN_SUCCESS,
    userData: jwtDecode(localStorage.getItem('sm-token')),
  });
  setAuthToken(localStorage.getItem('sm-token'));
}

ReactDOM.render(
  
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);