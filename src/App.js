import React           from "react";
// Handle console logs
import "utils/dropConsole";
// Styles
import "fontsource-roboto";
// ROUTER
import {BrowserRouter} from "react-router-dom";
import {RouterConfig}  from "navigation/RouterConfig";

import {ProvideAuth} from "navigation/Auth/ProvideAuth";
// Redux
import {Provider}    from "react-redux";
import {store}       from "./redux/store";
import NavBar        from "./components/Navbar/NavBar";
import withStyles    from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
    toolbar: theme.mixins.toolbar,
});
const App = (props) => {
    const {classes} = props;

    return (
        <Provider store={store}>
            <ProvideAuth>
                <BrowserRouter>
                    <NavBar/>
                    <div className={classes.toolbar}/>
                    <RouterConfig/>
                </BrowserRouter>
            </ProvideAuth>
        </Provider>

    );
};

export default withStyles(styles)(App);
