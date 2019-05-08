import initialState from './initialState';
import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILURE
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
        articles: action.data,
        searchResults: false
      };

    case ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SEARCH_PRODUCTS_REQUEST:
      return {
        ...state,
        searchLoading: true,
        error: null,
      };

    case SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        count: action.count,
        rows: action.rows,
        searchResults: true
      };

    case SEARCH_PRODUCTS_FAILURE:
      return {
        ...state,
        searchLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default productsReducer;
