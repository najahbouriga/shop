import React               from "react";
import {Route, Switch}     from "react-router-dom";
import {NotFound}          from "navigation/NotFound";
import DetailProduct       from "../pages/Products/components/DetailProduct/DetailProduct";
import {CARt, ROOT, TABLE} from "./CONSTANTS";
import Cart                from "../pages/Cart/Cart";
import ProductList         from "../pages/Products/ProductList";
import TableTest           from "../components/table/Table";


// “Router Config.js” contains all the routes of the application.

export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                {/* List all public routes here */}
                <Route exact path={ROOT} component={ProductList}/>
                <Route exact path={CARt} component={Cart}/>
                <Route exact path={TABLE} component={TableTest}/>
                <Route exact path='/detail/:id' component={DetailProduct}/>
                {/* List a generic 404-Not Found route here */}
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    );
};
