import * as types from '../constants/sidebarActionTypes';


export const showSidebar =  () => dispatch => {
  return dispatch({ type: types.SHOW_SIDEBAR });
};
export const hideSidebar =  () => dispatch => {
  return dispatch({ type: types.HIDE_SIDEBAR });
};