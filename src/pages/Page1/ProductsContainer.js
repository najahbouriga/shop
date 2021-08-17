import React, {useEffect} from 'react';
import ProductsView from './ProductsView';
import {useDispatch} from 'react-redux';
import allActions from '../../redux/actions';
import {store} from "../../redux/store";

export const ProductsContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(allActions.productsActions.fetchProducts()), [
        dispatch,
    ]);
    return (
        <div>
            <ProductsView/>
        </div>
    );
};
