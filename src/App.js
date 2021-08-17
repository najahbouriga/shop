import React from "react";
// Handle console logs
import "utils/dropConsole";
// Styles
import "fontsource-roboto";
// ROUTER
import {BrowserRouter} from "react-router-dom";
import {RouterConfig} from "navigation/RouterConfig";

import {ProvideAuth} from "navigation/Auth/ProvideAuth";
// Redux
import {Provider} from "react-redux";
import {store} from "./redux/store";

const App = () => {

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
};

export default App;
