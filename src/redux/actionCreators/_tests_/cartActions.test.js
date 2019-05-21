import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from "../cartActions";
import * as types from '../../constants/cartActionTypes';
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

  it('creates  GENERATE_CART_ID_SUCCESS when a cart ID is created', () => {
    const data = { cart_id: 'cartid' };
    mock.onGet().reply(200, { ...data });
    const expectedActions = [
      {
        type: types.GENERATE_CART_ID_REQUEST,
      },
      {
        type: types.GENERATE_CART_ID_SUCCESS,
        cartId: data.cart_id
      },
    ];
    return store.dispatch(actions.generateCartId()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  GENERATE_CART_ID_SUCCESS when a cart ID is loaded from localStorage', () => {
    const data = { cart_id: 'cartid' };
    mock.onGet().reply(200, { ...data });
    const expectedActions = [
      {
        type: types.GENERATE_CART_ID_REQUEST,
      },
      {
        type: types.GENERATE_CART_ID_SUCCESS,
        cartId: data.cart_id
      },
      {
        type: types.GET_CART_ITEMS_REQUEST,
      },
      {
        type: types.GET_CART_ITEMS_SUCCESS,
        items: data
      },
    ];
    return store.dispatch(actions.generateCartId()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  GENERATE_CART_ID_FAILURE when an error occurs', () => {
    const data = { message: 'cannot generate id at the moment' };
    mock.onGet().reply(400, { ...data });
    const expectedActions = [
      {
        type: types.GENERATE_CART_ID_REQUEST,
      },
      {
        type: types.GENERATE_CART_ID_FAILURE,
        error: data.message
      },
    ];
    localStorage.removeItem('sm-cart-id');
    return store.dispatch(actions.generateCartId()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  ADD_TO_CART_SUCCESS when a cart ID is created', () => {
    const data = {};
    mock.onPost().reply(201, { ...data });
    const expectedActions = [
      {
        type: types.ADD_TO_CART_REQUEST,
      },
      {
        type: types.ADD_TO_CART_SUCCESS,
        items: data
      },
    ];
    return store.dispatch(actions.addToCart()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  ADD_TO_CART_FAILURE when an error occurs', () => {
    const data = { message: 'cannot add to cart  at the moment' };
    mock.onPost().reply(400, { ...data });
    const expectedActions = [
      {
        type: types.ADD_TO_CART_REQUEST,
      },
      {
        type: types.ADD_TO_CART_FAILURE,
        error: data.message
      },
    ];
    return store.dispatch(actions.addToCart()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  GET_CART_ITEMS_FAILURE when an error occurs', () => {
    const data = { message: 'cannot get cart items at the moment' };
    mock.onGet().reply(400, { ...data });
    const expectedActions = [
      {
        type: types.GET_CART_ITEMS_REQUEST,
      },
      {
        type: types.GET_CART_ITEMS_FAILURE,
        error: data.message
      },
    ];
    return store.dispatch(actions.getCartItems()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });
})
// console.log(res, 'res here>>>>>>>>>>');


