/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import * as types from '../constants/orderActionTypes';
import { getCartItems } from './cartActions'

const rootURL = "https://backendapi.turing.com";

export const createOrder =  ({cart_id, shipping_id, tax_id, }) => dispatch => {
  dispatch({ type: types.CREATE_ORDER_REQUEST});

  return axios.post(`${rootURL}/orders`, { cart_id,  shipping_id, tax_id }).then(
    (response)=>{
    dispatch(getOrder(response.data.orderId));
    dispatch({
      type: types.CREATE_ORDER_SUCCESS,
      orderId: response.data.orderId
    });
    dispatch(getCartItems(cart_id));
    },
    error => {
      dispatch({
        type: types.CREATE_ORDER_FAILURE,
        error: error
      });
      toastr.error('Try again Later', 'Could not place order');
    }
  );
};

export const getOrder =  (orderId) => dispatch => {
  dispatch({ type: types.GET_ORDER_REQUEST});

  return axios.all([
    axios.get(`${rootURL}/orders/${orderId}`),
    axios.get(`${rootURL}/orders/shortdetail/${orderId}`)
  ])
  .then(axios.spread((response1, response2) =>{
    dispatch({
      type: types.GET_ORDER_SUCCESS,
      order: { items: response1.data, info: response2.data }
    });
  }))
  .catch(error => {
    dispatch({
      type: types.GET_ORDER_FAILURE,
      error: error
    });
    toastr.error('Try again Later', 'Could not get order');
  });
};

export const stripeCharge =  (reqBody) => dispatch => {
  dispatch({ type: types.STRIPE_CHARGE_REQUEST});
  return axios.post(`${rootURL}/stripe/charge`, reqBody)
  .then(response => {
    dispatch({
      type: types.STRIPE_CHARGE_SUCCESS,
      responseData: response.data
    });
  })
  .catch(error => {
    dispatch({
      type: types.STRIPE_CHARGE_FAILURE,
      error: error
    });
    toastr.error('Try again Later', 'Could not create charge');
  });
}