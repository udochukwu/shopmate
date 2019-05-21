import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import productsReducer from './productsReducer';
import productReducer from './productReducer';
import sidebarReducer from './sidebarReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer'; 
import profileReducer from './profileReducer';
import settingsReducer from './settingsReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    modals: modalReducer,
    profile: profileReducer,
    toastr: toastrReducer,
    settings: settingsReducer,
    cart: cartReducer,
    order: orderReducer,
});

export default rootReducer;
