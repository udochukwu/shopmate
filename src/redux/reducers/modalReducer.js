import initialState from './initialState';
import {
  SHOW_SIGNUP_MODAL,
  HIDE_SIGNUP_MODAL,
  SHOW_SIGNIN_MODAL,
  HIDE_SIGNIN_MODAL,
  HIDE_PROFILE_MODAL,
  SHOW_PROFILE_MODAL,
  HIDE_CART_MODAL,
  SHOW_CART_MODAL,
} from '../constants/modalActionTypes';

const modalReducer = (state = initialState.modals, action) => {
  switch (action.type) {
    case SHOW_SIGNUP_MODAL:
      return {
        ...state,
        showModal: true,
        authType: "Signup"
      };

    case HIDE_SIGNUP_MODAL:
      return {
        ...state,
        showModal: false,
        authType: ""
      };

    case SHOW_SIGNIN_MODAL:
      return {
        ...state,
        showModal: true,
        authType: "Signin"
      };

    case HIDE_SIGNIN_MODAL:
      return {
        ...state,
        showModal: false,
        authType: ""
      };
      case SHOW_PROFILE_MODAL:
        return {
          ...state,
          showProfileModal: true,
        };
  
      case HIDE_PROFILE_MODAL:
        return {
          ...state,
          showProfileModal: false,
        };
        case SHOW_CART_MODAL:
          return {
            ...state,
            showCartModal: true,
          };
    
        case HIDE_CART_MODAL:
          return {
            ...state,
            showCartModal: false,
          };
    default:
      return state;
  }
};

export default modalReducer;
