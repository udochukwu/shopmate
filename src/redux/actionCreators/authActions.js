import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toastr } from 'react-redux-toastr'
import * as types from '../constants/authActionTypes';
import { HIDE_SIGNIN_MODAL, HIDE_SIGNUP_MODAL } from "../constants/modalActionTypes"
import { setAuthToken } from '../../services/AuthToken';

const rootURL = "https://backendapi.turing.com";

export const signup = (userData) => dispatch => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios.post(`${rootURL}/customers`, userData).then((response) => {
    dispatch({
      type: types.SIGNUP_SUCCESS,
      responseData: response.data,
    });
    dispatch({ type: HIDE_SIGNUP_MODAL });
    toastr.success('Success', 'Succesfully Signed Up');
  }
    ,
    error =>
      dispatch({
        type: types.SIGNUP_FAILURE,
        error: error.response.data.error
      })
  );
};

export const login = (userData) => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios.post(`${rootURL}/customers/login`, userData).then((response) => {
    localStorage.setItem('sm-token', response.data.accessToken);
    setAuthToken(response.data.accessToken);
    const decoded = jwtDecode(response.data.accessToken);
    dispatch({
      type: types.LOGIN_SUCCESS,
      userData: decoded,
    });
    dispatch({ type: HIDE_SIGNIN_MODAL });
    toastr.success('Success', 'Succesfully logged in');
  },
    error =>
      dispatch({
        type: types.LOGIN_FAILURE,
        error: error.response.data.error
      })
  );
};

export const resetState = () => dispatch => {
  return dispatch({ type: types.AUTH_RESET });
};

export const logout = () => dispatch => {
  localStorage.removeItem('sm-token');
  toastr.success('Success', 'Succesfully logged out');
  return dispatch({ type: types.LOGOUT });
};