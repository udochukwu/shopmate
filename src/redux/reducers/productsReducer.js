import initialState from './initialState';
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAILURE
} from '../constants/productActionTypes';

const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        count: action.count,
        rows: action.rows,
      };

    case ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default productsReducer;
