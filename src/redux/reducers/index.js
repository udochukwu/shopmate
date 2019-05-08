import { combineReducers } from 'redux';
import productsReducer from './productsReducer'; 
import sidebarReducer from './sidebarReducer'; 

const rootReducer = combineReducers({
    products: productsReducer,
    sidebar: sidebarReducer
});

export default rootReducer;
