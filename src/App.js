import React, {useEffect} from "react";
// Handle console logs
import "utils/dropConsole";
// Styles
import "fontsource-roboto";
// ROUTER
import {BrowserRouter} from "react-router-dom";
import {RouterConfig} from "navigation/RouterConfig";

import {ProvideAuth} from "navigation/Auth/ProvideAuth";
// Redux
import {Provider, useDispatch} from "react-redux";
import allActions from "./redux/actions";
import {store} from "./redux/store";

function App() {

    console.log('store', store)
    return (
        <Provider store={store}>
            <ProvideAuth>
                <BrowserRouter>
                    <RouterConfig/>
                </BrowserRouter>
            </ProvideAuth>
        </Provider>

    );
}

export default App;
