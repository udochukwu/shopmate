import initialState from './initialState';
import {
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
} from '../constants/sidebarActionTypes';

const sidebarReducer = (state = initialState.sidebar, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        visible: true,
      };

    case HIDE_SIDEBAR:
      return {
        ...state,
        visible: false,
      };

    default:
      return state;
  }
};

export default sidebarReducer;
