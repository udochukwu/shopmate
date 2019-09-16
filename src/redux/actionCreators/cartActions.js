import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import errorHandler from '../../services/errorHandler';
import * as types from '../constants/cartActionTypes';

const rootURL = "https://backendapi.turing.com";

export const generateCartId = () => dispatch => {
  dispatch({ type: types.GENERATE_CART_ID_REQUEST });

  if (localStorage.getItem('sm-cart-id')) {
    dispatch({
      type: types.GENERATE_CART_ID_SUCCESS,
      cartId: localStorage.getItem('sm-cart-id'),
    });
    return dispatch(getCartItems(localStorage.getItem('sm-cart-id')));
  } else {
    return axios.get(`${rootURL}/shoppingcart/generateUniqueId`).then(response => {
        dispatch({
          type: types.GENERATE_CART_ID_SUCCESS,
          cartId: response.data.cart_id
        })
        localStorage.setItem('sm-cart-id', response.data.cart_id);
      },
      error =>
        dispatch({
          type: types.GENERATE_CART_ID_FAILURE,
          error: errorHandler(error)
        })
    );
  }
};

export const addToCart = (requestData) => dispatch => {
  dispatch({ type: types.ADD_TO_CART_REQUEST });

  return axios.post(`${rootURL}/shoppingcart/add`, requestData).then(
    response => {
      toastr.success('Success', 'Added to cart');
      dispatch({
        type: types.ADD_TO_CART_SUCCESS,
        items: response.data
      });
    },
    error => {
      dispatch({
        type: types.ADD_TO_CART_FAILURE,
        error: errorHandler(error)
      });
      toastr.error('Try again Later', 'Could not add to cart');
    }
  );
};

export const getCartItems = (cartId) => dispatch => {
  dispatch({ type: types.GET_CART_ITEMS_REQUEST });

  return axios.get(`${rootURL}/shoppingcart/${cartId}`).then(
    response => {
      dispatch({
        type: types.GET_CART_ITEMS_SUCCESS,
        items: response.data
      });
    },
    error => {
      dispatch({
        type: types.GET_CART_ITEMS_FAILURE,
        error: errorHandler(error)
      });
      toastr.error('Try again Later', 'Could not fetch cart items');
    }
  );
};

export const removeCartItem = (itemId) => dispatch => {
  dispatch({ type: types.REMOVE_CART_ITEM_REQUEST });

  return axios.delete(`${rootURL}/shoppingcart/removeproduct/${itemId}`).then(
    () => {
      dispatch({
        type: types.REMOVE_CART_ITEM_SUCCESS,
      });
      dispatch(getCartItems(localStorage.getItem('sm-cart-id')));
    },
    error => {
      dispatch({
        type: types.REMOVE_CART_ITEM_FAILURE,
        error: error
      });
      toastr.error('Try again Later', 'Could not remove cart item');
    }
  );
};

export const updateCartItem = ({ itemId, quantity }) => dispatch => {
  dispatch({ type: types.UPDATE_CART_ITEM_REQUEST });

  return axios.put(`${rootURL}/shoppingcart/update/${itemId}`, { quantity }).then(
    () => {
      dispatch({
        type: types.UPDATE_CART_ITEM_SUCCESS,
      });
      dispatch(getCartItems(localStorage.getItem('sm-cart-id')));
    },
    error => {
      dispatch({
        type: types.UPDATE_CART_ITEM_FAILURE,
        error: error
      });
      toastr.error('Try again Later', 'Could not update cart item');
    }
  );
};
