import initialState from './initialState';
import {
  SHOW_SIGNUP_MODAL,
  HIDE_SIGNUP_MODAL,
  SHOW_SIGNIN_MODAL,
  HIDE_SIGNIN_MODAL,
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

    default:
      return state;
  }
};

export default modalReducer;
