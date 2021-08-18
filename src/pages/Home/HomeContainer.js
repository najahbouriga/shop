import React, {useEffect} from "react";
import HomeView           from "./HomeView";
import {NavLinks}         from "./components/NavLinks";
import {useDispatch}      from "react-redux";
import allActions         from "../../redux/actions";

export function HomeContainer() {
    return (
        <div>
            <NavLinks/>
            <HomeView title="Home"/>
        </div>
    );
}
