import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import errorHandler from '../../services/errorHandler';
import * as types from '../constants/profileActionTypes';

const rootURL = "https://backendapi.turing.com";

export const getUserProfile =  () => dispatch => {
  dispatch({ type: types.USER_PROFILE_REQUEST });

  return axios.get(`${rootURL}/customer`).then(
    response =>
      dispatch({
        type: types.USER_PROFILE_SUCCESS,
        responseData: response.data
      }),
    error =>
      dispatch({
        type: types.USER_PROFILE_FAILURE,
        error: errorHandler(error)
      })
  );
};

export const updatePersonalDetails =  (requestData) => dispatch => {
  dispatch({ type: types.UPDATE_PROFILE_REQUEST});

  return axios.put(`${rootURL}/customer`, requestData).then(
    response =>{
    toastr.success('Success', 'Profile succesfully updated');
    dispatch({
      type: types.UPDATE_PROFILE_SUCCESS,
      responseData: response.data
    });
    },
    error =>{
      toastr.error('Try again Later', 'Could not update profile.');
      dispatch({
        type: types.UPDATE_PROFILE_FAILURE,
        error: error
      })
    }
  );
};

export const updateAddress =  (requestData) => dispatch => {
  dispatch({ type: types.UPDATE_PROFILE_REQUEST});
  return axios.put(`${rootURL}/customers/address`, requestData).then(
    response =>{
    toastr.success('Success', 'Profile succesfully updated');
    dispatch({
      type: types.UPDATE_PROFILE_SUCCESS,
      responseData: response.data
    });
    },
    error => {
      dispatch({
        type: types.UPDATE_PROFILE_FAILURE,
        error: error
      });
      toastr.error('Try again Later', 'Could not update profile.');
    }
  );
};

export const updateCreditCard =  (requestData) => dispatch => {
  dispatch({ type: types.UPDATE_PROFILE_REQUEST});

  return axios.put(`${rootURL}/customers/address`, requestData).then(
    response =>{
    toastr.success('Success', 'Profile succesfully updated');
    dispatch({
      type: types.UPDATE_PROFILE_SUCCESS,
      responseData: response.data
    });
    },
    error => {
      dispatch({
        type: types.UPDATE_PROFILE_FAILURE,
        error: error
      });
      toastr.error('Try again Later', 'Could not update profile.');
    }
  );
};