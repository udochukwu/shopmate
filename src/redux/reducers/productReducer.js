import initialState from './initialState';
import {
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAILURE,
  PRODUCT_REVIEW_REQUEST,
  PRODUCT_REVIEW_SUCCESS,
  PRODUCT_REVIEW_FAILURE
} from '../constants/productActionTypes';

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };

    case SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.responseData
      };

    case SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case PRODUCT_REVIEW_REQUEST:
      return {
        ...state,
        reviewsLoading: true,
      };
    case PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        reviewsLoading: false,
        reviews: action.responseData,
      };
    case PRODUCT_REVIEW_FAILURE:
      return {
        ...state,
        reviewsLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default productReducer;
