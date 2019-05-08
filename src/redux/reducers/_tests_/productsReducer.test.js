import * as types from '../../constants/productActionTypes';
import productsReducer from "../productsReducer";
import initialState from '../initialState';

it('should return the initial state for unknown action type', () => {
  expect(productsReducer(undefined, {})).toEqual(initialState.products);
});

it('should set loading state on fetching products', () => {
  const newState = {
    count: 0,
    rows: [],
    loading: true,
    error: null
  };
  const action = { type: types.ALL_PRODUCTS_REQUEST };
  expect(productsReducer(undefined, action)).toMatchObject(newState);
});
it('should set count and rows state on fetching products', () => {
  const newState = {
    count: 1,
    rows: [{}],
    loading: false,
    error: null
  };
  const action = { type: types.ALL_PRODUCTS_SUCCESS, count: 1, rows:[{}] };
  expect(productsReducer(undefined, action)).toMatchObject(newState);
});
it('should set count and rows state on fetching products', () => {
  const newState = {
    count: 0,
    rows: [],
    loading: false,
    error: "error 404"
  };
  const action = { type: types.ALL_PRODUCTS_FAILURE, error: "error 404" };
  expect(productsReducer(undefined, action)).toMatchObject(newState);
});