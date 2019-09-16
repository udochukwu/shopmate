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
export const showProfileModal =  () => dispatch => {
  return dispatch({ type: types.SHOW_PROFILE_MODAL });
};
export const hideProfileModal =  () => dispatch => {
  return dispatch({ type: types.HIDE_PROFILE_MODAL });
};
export const showCartModal =  () => dispatch => {
  return dispatch({ type: types.SHOW_CART_MODAL });
};
export const hideCartModal =  () => dispatch => {
  return dispatch({ type: types.HIDE_CART_MODAL });
};