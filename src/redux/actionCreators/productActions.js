import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import errorHandler from '../../services/errorHandler';
import * as types from '../constants/productActionTypes';

const rootURL = "https://backendapi.turing.com";

export const getAllProducts =  ({ limit=6, page=1 }={}) => dispatch => {
  dispatch({ type: types.ALL_PRODUCTS_REQUEST });
  return axios.get(`${rootURL}/products?limit=${limit}&page=${page}`).then(
    response =>
      dispatch({
        type: types.ALL_PRODUCTS_SUCCESS,
        count: response.data.count,
        rows: response.data.rows,
      }),
    error =>
      dispatch({
        type: types.ALL_PRODUCTS_FAILURE,
        error: error.response.data.error
      })
  )
};

export const fetchProductsByCategory =  ({ categoryId, limit=6, page=1 }={}) => dispatch => {
  dispatch({ type: types.ALL_PRODUCTS_REQUEST });

  return axios.get(`${rootURL}/products/inCategory/${categoryId}?limit=${limit}&page=${page}`).then(
    response =>
      dispatch({
        type: types.ALL_PRODUCTS_SUCCESS,
        count: response.data.count,
        rows: response.data.rows,
      }),
    error =>
      dispatch({
        type: types.ALL_PRODUCTS_FAILURE,
        error: error.response.data.error
      })
  );
};

export const fetchProductsByDepartment =  ({ departmentId, limit=6, page=1 }={}) => dispatch => {
  dispatch({ type: types.ALL_PRODUCTS_REQUEST });

  return axios.get(`${rootURL}/products/inDepartment/${departmentId}?limit=${limit}&page=${page}`).then(
    response =>
      dispatch({
        type: types.ALL_PRODUCTS_SUCCESS,
        count: response.data.count,
        rows: response.data.rows,
      }),
    error =>
      dispatch({
        type: types.ALL_PRODUCTS_FAILURE,
        error: error.response.data.error
      })
  );
};

export const searchProducts =  ({ limit=6, page=1, queryString="s" }={}) => dispatch => {
  dispatch({ type: types.SEARCH_PRODUCTS_REQUEST });

  return axios.get(`${rootURL}/products/search?query_string=${queryString}&limit=${limit}&page=${page}`).then(
    response =>
      dispatch({
        type: types.SEARCH_PRODUCTS_SUCCESS,
        count: response.data.count,
        rows: response.data.rows,
      }),
    error =>
      dispatch({
        type: types.SEARCH_PRODUCTS_FAILURE,
        error: error.response.data.error
      })
  );
};

export const getSingleProduct =  (productId) => dispatch => {
  dispatch({ type: types.SINGLE_PRODUCT_REQUEST });

  return axios.get(`${rootURL}/products/${productId}`).then(
    response =>
      dispatch({
        type: types.SINGLE_PRODUCT_SUCCESS,
        responseData: response.data,
      }),
    error =>
      dispatch({
        type: types.SINGLE_PRODUCT_FAILURE,
        error: error.response.data.error,
      })
  );
};

export const getProductReviews =  (productId) => dispatch => {
  dispatch({ type: types.PRODUCT_REVIEW_REQUEST });

  return axios.get(`${rootURL}/products/${productId}/reviews`).then(
    response =>
      dispatch({
        type: types.PRODUCT_REVIEW_SUCCESS,
        responseData: response.data,
      }),
    error =>
      dispatch({
        type: types.PRODUCT_REVIEW_FAILURE,
        error: errorHandler(error)
      })
  );
};

export const addProductReview =  (productId, postData) => dispatch => {
  dispatch({ type: types.ADD_PRODUCT_REVIEW_REQUEST });
  return axios.post(`${rootURL}/products/${productId}/reviews`, postData).then(() => {
      dispatch({
        type: types.ADD_PRODUCT_REVIEW_SUCCESS,
      });
      toastr.success('Success', 'Review Recorded');
    },
    // eslint-disable-next-line no-unused-vars
    error =>{
      dispatch({
        type: types.ADD_PRODUCT_REVIEW_FAILURE,
      })
    }
  );
};