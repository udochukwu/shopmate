import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from "../productActions";
import * as types from '../../constants/productActionTypes';
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

  const allProductsSuccess = (data)=>{
    return (
      [
        { type: types.ALL_PRODUCTS_REQUEST },
        {
          type: types.ALL_PRODUCTS_SUCCESS,
          count: data.count,
          rows: data.rows
        }
      ]
    );
  }
  const allProductsFailure = (data)=>{
    return (
      [
        { type: types.ALL_PRODUCTS_REQUEST },
        {
          type: types.ALL_PRODUCTS_FAILURE,
          error: data.error,
        }
      ]
    );
  }
  const searchProductsSuccess = (data)=>{
    return (
      [
        { type: types.SEARCH_PRODUCTS_REQUEST },
        {
          type: types.SEARCH_PRODUCTS_SUCCESS,
          count: data.count,
          rows: data.rows
        }
      ]
    );
  }

  const searchProductsFailure = (data)=>{
    return (
      [
        { type: types.SEARCH_PRODUCTS_REQUEST },
        {
          type: types.SEARCH_PRODUCTS_FAILURE,
          error: data.error,
        }
      ]
    );
  }

  const singleProductSuccess = (data)=>{
    return (
      [
        { type: types.SINGLE_PRODUCT_REQUEST },
        {
          type: types.SINGLE_PRODUCT_SUCCESS,
          responseData: data,
        }
      ]
    );
  }

  it('should get all products', () => {
    const data = { count: 0,rows: [] };
    mock.onGet().reply(200, { ...data });
    return store.dispatch(actions.getAllProducts()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(allProductsSuccess(data));
    });
  });

  it('should throw an error while trying to fetch all products', () => {
    const data = {
      error: "Request failed with status code 404",
    };
    mock.onGet().reply(404, { ...data });
    return store.dispatch(actions.getAllProducts()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(allProductsFailure(data));
    });
  });

  it('should get all products by category', () => {
    const data = { count: 0,rows: [] };
    mock.onGet().reply(200, { ...data });
    return store.dispatch(actions.fetchProductsByCategory()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(allProductsSuccess(data));
    });
  });

  it('should throw an error while trying to fetch all products by category', () => {
    const data = { error: "Request failed with status code 404",};
    mock.onGet().reply(404, { ...data });
    return store.dispatch(actions.fetchProductsByCategory()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(allProductsFailure(data));
    });
  });

  it('should get all products by department', () => {
    const data = { count: 0,rows: [] };
    mock.onGet().reply(200, { ...data });
    return store.dispatch(actions.fetchProductsByDepartment()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(allProductsSuccess(data));
    });
  });

  it('should throw an error while trying to fetch all products by department', () => {
    const data = { error: "Request failed with status code 404",};
    mock.onGet().reply(404, { ...data });
    return store.dispatch(actions.fetchProductsByDepartment()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(allProductsFailure(data));
    });
  });

  it('should get products by search results', () => {
    const data = { count: 0,rows: [] };
    mock.onGet().reply(200, { ...data });
    return store.dispatch(actions.searchProducts()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(searchProductsSuccess(data));
    });
  });

  it('should throw an error while trying to  search product', () => {
    const data = { error: "Request failed with status code 404",};
    mock.onGet().reply(404, { ...data });
    return store.dispatch(actions.searchProducts()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(searchProductsFailure(data));
    });
  });

  it('should get a single product', () => {
    const data = {};
    mock.onGet().reply(200, { ...data });
    return store.dispatch(actions.getSingleProduct()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(singleProductSuccess(data));
    });
  });

  it('creates  SINGLE_PRODUCT_FAILURE when fetching product has been done', () => {
    const data = { error: "Request failed with status code 404",};
    mock.onGet().reply(404, { ...data });
    const expectedActions = [
      { type: types.SINGLE_PRODUCT_REQUEST },
      {
        type: types.SINGLE_PRODUCT_FAILURE,
        error: data.error,
      }
    ];
    return store.dispatch(actions.getSingleProduct()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  PRODUCT_REVIEW_SUCCESS when fetching reviews has been done', () => {
    const data = {};
    mock.onGet().reply(200, { ...data });
    const expectedActions = [
      { type: types.PRODUCT_REVIEW_REQUEST },
      {
        type: types.PRODUCT_REVIEW_SUCCESS,
        responseData: data
      }
    ];
    return store.dispatch(actions.getProductReviews()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  PROUCT_REVIEW_FAILURE when fetching reviews fails', () => {
    const data = { message: "Request failed with status code 404",};
    mock.onGet().reply(404, { ...data });
    const expectedActions = [
      { type: types.PRODUCT_REVIEW_REQUEST },
      {
        type: types.PRODUCT_REVIEW_FAILURE,
        error: data.message,
      }
    ];
    return store.dispatch(actions.getProductReviews()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  ADD_PRODUCT_REVIEW_SUCCESS when creating reviews has been done', () => {
    const data = {};
    mock.onPost().reply(201, { ...data });
    const expectedActions = [
      { type: types.ADD_PRODUCT_REVIEW_REQUEST },
      {
        type: types.ADD_PRODUCT_REVIEW_SUCCESS,
      }
    ];
    return store.dispatch(actions.addProductReview()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('creates  ADD_PROUCT_REVIEW_FAILURE when creating reviews fails', () => {
    const data = {};
    mock.onPost().reply(401, { ...data });
    const expectedActions = [
      { type: types.ADD_PRODUCT_REVIEW_REQUEST },
      {
        type: types.ADD_PRODUCT_REVIEW_FAILURE,
      }
    ];
    return store.dispatch(actions.addProductReview()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });
})
// console.log(res, 'res here>>>>>>>>>>');


