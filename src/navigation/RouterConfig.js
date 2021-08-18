import React                        from "react";
import {Route, Switch}              from "react-router-dom";
import Home                         from "pages/Home";
import {NotFound}                   from "navigation/NotFound";
import {AUTH_PAGE1, PRODUCTS, ROOT} from "navigation/CONSTANTS";
import Login                        from "./Auth/Login";
import {AuthorizedPage1}            from "pages/AuthorizedPage1";
import PrivateRoute                 from "./Auth/PrivateRoute";
import ProductList                  from "../pages/Products/components/ProductList";

export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                {/* List all public routes here */}
                <Route exact path={ROOT} component={Home}/>
                <Route exact path={PRODUCTS} component={ProductList}/>
                <Route path="/login">
                    <Login/>
                </Route>

                {/* List all private/auth routes here */}
                <PrivateRoute path={AUTH_PAGE1}>
                    <AuthorizedPage1/>
                </PrivateRoute>
                {/* List a generic 404-Not Found route here */}
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    );
};
