import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore';
import initialState from './redux/reducers/initialState';
import './index.scss';
import './fonts.scss';
import Routes from './routes';

const store = configureStore(initialState);


ReactDOM.render(
  <Provider store={store}>
      <Routes />
  </Provider>,
  document.getElementById('root')
);