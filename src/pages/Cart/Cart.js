import React from 'react';
import {useSelector} from 'react-redux';

const selectAmount = (state) => state.cart.amount;
const selectCart = (state) => state.cart.cart;
const Cart = () => {
    const cart = useSelector(selectCart);
    const amount = useSelector(selectAmount);
    return (<div>
        {JSON.stringify(cart)}
        {JSON.stringify(amount)}
    </div>)
};


export default Cart;
