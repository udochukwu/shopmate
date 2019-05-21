import * as types from '../constants/modalActionTypes';
import * as authTypes from '../constants/authActionTypes';



export const showSignupModal =  () => dispatch => {
  return dispatch({ type: types.SHOW_SIGNUP_MODAL });
};
export const hideSignupModal =  () => dispatch => {
  dispatch({ type: authTypes.AUTH_RESET });
  return dispatch({ type: types.HIDE_SIGNUP_MODAL });
};
export const showSigninModal =  () => dispatch => {
  return dispatch({ type: types.SHOW_SIGNIN_MODAL });
};
export const hideSigninModal =  () => dispatch => {
  dispatch({ type: authTypes.AUTH_RESET });
  return dispatch({ type: types.HIDE_SIGNIN_MODAL });
};