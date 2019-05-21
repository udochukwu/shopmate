import initialState from './initialState';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants/authActionTypes';

const signupReducer = (state = initialState.sidebar, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        failure: false
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
        success: false,
        failure: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default signupReducer;

