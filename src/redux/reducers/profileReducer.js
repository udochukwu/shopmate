import initialState from './initialState';
import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE
} from '../constants/profileActionTypes';

const userReducer = (state = initialState.profile, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        ...state,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.responseData,
      };
    case USER_PROFILE_FAILURE:
      return {
        ...state,
        profile: {},
      };
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        updateLoading: true,
        updateSuccess: false
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updateLoading: false,
        updateSuccess: true,
        profile: action.responseData,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        updateLoading: false,
        updateSuccess: false,
        profile: {},
      };
    default:
      return state;
  }
};

export default userReducer;

