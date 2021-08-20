/**
 * We purposely added 2 reducers for the example of combineReducers method.
 * There can be only 1 or even more than 2 reducers.
 * combineReducers defines the structure of the store object.
 */
import {combineReducers} from 'redux';
import {productReducer} from './productReducer';
import cartReducer from "./cartReducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
})
