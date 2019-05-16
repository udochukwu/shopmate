import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import productsReducer from './productsReducer'; 
import sidebarReducer from './sidebarReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer'; 
import userReducer from './userReducer'; 

const rootReducer = combineReducers({
    products: productsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    modals: modalReducer,
    user: userReducer,
    toastr: toastrReducer
});

export default rootReducer;
