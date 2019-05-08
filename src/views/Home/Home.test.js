/* eslint-disable import/no-named-as-default */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
// import initialState from '../../redux/reducers/initialState';
import Home from './Home';

const props = {
  products: {
    count: 0,
    rows: [],
    loading: false,
    getAllProducts: jest.fn()
  }
}
const mockStore = configureMockStore([thunk]);
const store = mockStore(props);

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <Home />
    </Provider>)
});