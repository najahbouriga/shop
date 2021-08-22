import React from "react";

// ROUTER
import {BrowserRouter} from "react-router-dom";
import {RouterConfig}  from "navigation/RouterConfig";

// Redux
import {store}    from "./redux/store";
import {Provider} from 'react-redux';
//NavBar Component
import NavBar     from "./components/Navbar/NavBar";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
    toolbar: theme.mixins.toolbar,
});

const App = (props) => {
    const {classes} = props;
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavBar/>
                <div className={classes.toolbar}/>
                <RouterConfig/>
            </BrowserRouter>
        </Provider>
    );
};

export default withStyles(styles)(App);
