import React, {useEffect} from "react";
import HomeView from "./HomeView";
import {NavLinks} from "./components/NavLinks";
import {useDispatch} from "react-redux";
import allActions from "../../redux/actions";

export function HomeContainer() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(allActions.productsActions.fetchProducts()), [
        dispatch,
    ]);
    return (
        <div>
            <NavLinks/>
            <HomeView title="Home"/>
        </div>
    );
}
