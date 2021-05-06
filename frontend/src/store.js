import  {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import {  productlistReducer,getDataProduct } from './reducers/productReducer';
import thunk from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    productList : productlistReducer,
     get_product : getDataProduct
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));



export default store;