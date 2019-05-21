import initialState from './initialState';
import {
  GENERATE_CART_ID_SUCCESS,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  GET_CART_ITEMS_SUCCESS
} from '../constants/cartActionTypes';

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case GENERATE_CART_ID_SUCCESS:
      return {
        ...state,
        cartId: action.cartId,
      };
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        items: action.items,
      };
      case GET_CART_ITEMS_SUCCESS:
        return {
          ...state,
          items: action.items,
        };
    default:
      return state;
  }
};

export default cartReducer;

