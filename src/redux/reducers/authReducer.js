import initialState from './initialState';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTH_RESET
} from '../constants/authActionTypes';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case AUTH_RESET:
    return {
      ...state,
      loading: false,
      success: false,
      failure: false,
      authType: "",
      error: {}
    };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        failure: false,
        error: {}
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        failure: true,
        error: action.error
      };

      case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        failure: false,
        error: {}
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        failure: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default authReducer;

