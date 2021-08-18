import React           from "react";
import {Route, Switch} from "react-router-dom";
import {NotFound}      from "navigation/NotFound";
import {ROOT}        from "navigation/CONSTANTS";
import DetailProduct from "../pages/Products/components/DetailProduct/DetailProduct";
import {Home}        from "../pages/Home/Home";

export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                {/* List all public routes here */}
                <Route exact path={ROOT} component={Home}/>
                <Route exact path='/detail/:id' component={DetailProduct}/>
                {/* List a generic 404-Not Found route here */}
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    );
};
