import initialState from './initialState';
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_REQUEST,
  GET_ORDER_FAILURE,
  GET_ORDER_SUCCESS,
  GET_ORDER_REQUEST,
  STRIPE_CHARGE_REQUEST,
  STRIPE_CHARGE_SUCCESS,
  STRIPE_CHARGE_FAILURE,
} from '../constants/orderActionTypes';

const orderReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        currentOrderId: null,
        createOrderLoading: true,
        loading: true,
        createOrderSuccess: false,
        createOrderFailure: false,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        currentOrderId: action.orderId,
        createOrderLoading: false,
        createOrderSuccess: true,
        loading: false,
      };
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        createOrderLoading: false,
        createOrderFailure: true,
        loading: false,
      };
    case GET_ORDER_REQUEST:
      return {
        ...state,
        getOrderLoading: true,
        getOrderSuccess: false,
        loading: true,
        getOrderFailure: false,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        getOrderLoading: false,
        getOrderSuccess: true,
        order: action.order,
        loading: false,      
      };
    case GET_ORDER_FAILURE:
      return {
        ...state,
        getOrderLoading: false,
        getOrderFailure: true,
        loading: false,
      };
    case STRIPE_CHARGE_REQUEST:
      return {
        ...state,
        chargeLoading: true,
        chargeSuccess: false,
        loading: true,
        chargeFailure: false,
      };
    case STRIPE_CHARGE_SUCCESS:
      return {
        ...state,
        chargeLoading: false,
        chargeSuccess: true,
        chargeDetails: action.responseData,
        loading: false,
      };
    case STRIPE_CHARGE_FAILURE:
      return {
        ...state,
        chargeLoading: false,
        chargeFailure: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default orderReducer;

