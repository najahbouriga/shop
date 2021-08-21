import React         from 'react';
import {useSelector} from 'react-redux';
import EmptyCart     from "./components/EmptyCart/EmptyCart";
import CartItem      from "./components/CartItem/CartItem";

const selectCart = (state) => state.cart.cart;
const Cart = () => {
    const cart = useSelector(selectCart);
    return (<div>
        {cart.length ? <CartItem/> : <EmptyCart/>}
    </div>)
};


export default Cart;
