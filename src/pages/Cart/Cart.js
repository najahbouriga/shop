import React         from 'react';
import {useSelector} from 'react-redux';
import EmptyCart     from "./components/EmptyCart/EmptyCart";
import CartItem      from "./components/CartItem/CartItem";
/* cart component */
const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    return (<div>
        {cart.length ? <CartItem/> : <EmptyCart/>}
    </div>)
};


export default Cart;
