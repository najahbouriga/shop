import {ADD_TO_CART, CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE_ITEM} from "./CONSTANTS";

/* Action to get totals of amount and totalPrice */
const getTotals = () => ({type: GET_TOTALS});


/* Action to add product to cart */
const addToCart = (id, title, price, description, category, image, qty) => ({
    type: ADD_TO_CART,
    payload: {id, title, price, description, category, image, qty},
});

/* Action to increase the quantity of product to cart */
const increase = (id) => ({type: INCREASE, payload: id});

/* Action to decrease the quantity of product to cart */
const decrease = (id) => ({type: DECREASE, payload: id});

/* Action to remove product from cart */
const removeItem = (id) => ({type: REMOVE_ITEM, payload: id});

/* Action to clear Cart */
const clearCart = () => ({type: CLEAR_CART});

const cartActions = {
    addToCart,
    increase,
    decrease,
    removeItem,
    clearCart,
    getTotals,
};

export default cartActions;
