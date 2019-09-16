/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['user-key'] = token;
  } else {
    delete axios.defaults.headers.common['user-key'];
  }
};

export  { setAuthToken };
