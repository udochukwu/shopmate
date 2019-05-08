/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import errorHandler from '../../services/errorHandler';
import * as types from '../constants/productActionTypes';

const rootURL = process.env.ROOT_URL;

export const getAllProducts =  () => dispatch => {
  dispatch({ type: types.ALL_PRODUCTS_REQUEST });

  return axios.get(`${rootURL}/products`).then(
    response =>
      dispatch({
        type: types.ALL_PRODUCTS_SUCCESS,
        count: response.data.count,
        rows: response.data.rows,
      }),
    error =>
      dispatch({
        type: types.ALL_PRODUCTS_FAILURE,
        error: errorHandler(error)
      })
  );
};
