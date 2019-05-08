import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from "../productActions";
import * as types from '../../constants/productActionTypes'

const mockStore = configureStore([thunk]);
const mock = new MockAdapter(axios);
const store = mockStore({
  count: false,
  rows: []
});
const rootURL = process.env.ROOT_URL;


describe('get all products actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    mock.reset();
  });

  it('should get all products', () => {
    const data = {
      count: 0,
      rows: []
    };
    mock.onGet(`${rootURL}/products`).reply(200, { ...data });
    const expectedActions = [
      { type: types.ALL_PRODUCTS_REQUEST },
      {
        type: types.ALL_PRODUCTS_SUCCESS,
        count: data.count,
        rows: data.rows
      }
    ];
    return store.dispatch(actions.getAllProducts()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });
  it('should throw an error while trying to fetch all products', () => {
    const data = {
      error: "Request failed with status code 404",
    };
    mock.onGet(`${rootURL}/product`).reply(404, { ...data });
    const expectedActions = [
      { type: types.ALL_PRODUCTS_REQUEST },
      {
        type: types.ALL_PRODUCTS_FAILURE,
        error: data.error,
      }
    ];
    return store.dispatch(actions.getAllProducts()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  })
})


