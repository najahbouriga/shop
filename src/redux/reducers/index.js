import {combineReducers} from 'redux';
import {productReducer}  from './productReducer';
import {cartReducer}     from './cartReducer';

export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
})
