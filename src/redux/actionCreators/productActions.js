/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import errorHandler from '../../services/errorHandler';
import * as types from '../constants/productActionTypes';

const rootURL = process.env.ROOT_URL;

export const getAllProducts =  ({ limit=6, page=1 }={}) => dispatch => {
  dispatch({ type: types.ALL_PRODUCTS_REQUEST });

  return axios.get(`${rootURL}/products?limit=${limit}&page=${page}`).then(
    response =>
      dispatch({
        type: types.ALL_PRODUCTS_SUCCESS,
        count: response.data.count,
        rows: response.data.rows,
        articles: response.data
      }),
    error =>
      dispatch({
        type: types.ALL_PRODUCTS_FAILURE,
        error: errorHandler(error)
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
        articles: response.data
      }),
    error =>
      dispatch({
        type: types.SEARCH_PRODUCTS_FAILURE,
        error: errorHandler(error)
      })
  );
};
