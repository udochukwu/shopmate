import jwtDecode from 'jwt-decode';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from "../authActions";
import * as types from '../../constants/authActionTypes';
import initialState from '../../reducers/initialState';


const mockStore = configureStore([thunk]);
const mock = new MockAdapter(axios);
const store = mockStore(initialState);

describe('get all products actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    mock.reset();
  });

  it('creates  SIGNUP_SUCCESS when a user successfully signs up', () => {
    const data = { accessToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MTE0MzQsIm5hbWUiOiJOZWxzb24gTm5hamkiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NjAyOTI4MjAsImV4cCI6MTU2MDM3OTIyMH0.tJAMjgrALw9iwwuPp4dWXIKH1ROmCsV0lQpUPktlHi0' };
    mock.onPost().reply(201, { ...data });
    const expectedActions = [
      {
        type: types.SIGNUP_REQUEST,
      },
      {
        type: types.SIGNUP_SUCCESS,
        userData: jwtDecode(data.accessToken)
      },
      { type: 'HIDE_SIGNUP_MODAL' }
    ];
    return store.dispatch(actions.signup()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  SIGNUP_FAILURE when signup fails', () => {
    const data = { error: 'cant signup at the moment' };
    mock.onPost().reply(400, { ...data });
    const expectedActions = [
      {
        type: types.SIGNUP_REQUEST,
      },
      {
        type: types.SIGNUP_FAILURE,
        error: data.error
      },
    ];
    return store.dispatch(actions.signup()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  LOGIN_SUCCESS when a user successfully logs in', () => {
    const data = { accessToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6MTE0MzQsIm5hbWUiOiJOZWxzb24gTm5hamkiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NjAyOTI4MjAsImV4cCI6MTU2MDM3OTIyMH0.tJAMjgrALw9iwwuPp4dWXIKH1ROmCsV0lQpUPktlHi0' };
    mock.onPost().reply(200, { ...data });
    const expectedActions = [
      {
        type: types.LOGIN_REQUEST,
      },
      {
        type: types.LOGIN_SUCCESS,
        userData: jwtDecode(data.accessToken)
      },
      { type: 'HIDE_SIGNIN_MODAL' }
    ];
    return store.dispatch(actions.login()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });


  it('creates  LOGIN_FAILURE when login fails', () => {
    const data = { error: 'cant login at the moment' };
    mock.onPost().reply(400, { ...data });
    const expectedActions = [
      {
        type: types.LOGIN_REQUEST,
      },
      {
        type: types.LOGIN_FAILURE,
        error: data.error
      },
    ];
    return store.dispatch(actions.login()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  AUTH_RESET when authentication state is reset', () => {
    const expectedActions = [
      {type: types.AUTH_RESET}
    ];
      store.dispatch(actions.resetState())
      const dispatchedActions = store.getActions();
      return expect(dispatchedActions).toEqual(expectedActions);
  });

  it('creates  LOGOUT when user successfully logs out', () => {
    const expectedActions = [
      {type: types.LOGOUT}
    ];
      store.dispatch(actions.logout())
      const dispatchedActions = store.getActions();
      return expect(dispatchedActions).toEqual(expectedActions);
  });
})
// console.log(res, 'res here>>>>>>>>>>');


