import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {ShoppingCart} from "@material-ui/icons";
import {useStyles} from "./style";
import {Link, withRouter} from "react-router-dom";
import Search from "./components/search";
import {useSelector} from "react-redux";

const selectAmount = (state) => state.cart.amount;

const NavBar = () => {
    const classes = useStyles();
    const amount = useSelector(selectAmount);
    const location = window.location.pathname
    return (
        <div className={classes.grow}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        edge="start"
                        component={Link} to="/"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer">
                        <StorefrontIcon/>
                    </IconButton>
                    <Typography
                        className={classes.title} variant="h6" noWrap>
                        Store
                    </Typography>
                    {location === '/' &&
                    <Search/>
                    }
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications"
                                    component={Link} to="/cart"
                                    color="inherit">
                            <Badge badgeContent={amount}
                                   color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default withRouter(NavBar);
/*return (
    <>
        {/!* Default Link tag. Make sure you always use Link from 'react-router-dom' and not from '@materialui...' *!/}
        <Link to={ROOT}>Root</Link>
        {/!* Common component created for all Link tags to be used. Thus, avoiding reputation of any styling and universal reuse *!/}
        <LinkRoute to={LOGIN}>Login</LinkRoute>
        <LinkRoute to={PRODUCTS}>Products</LinkRoute>
        <LinkRoute to={UNDEFINED_ROUTE}>Undefined Page</LinkRoute>
        <LinkRoute to={AUTH_PAGE1}>Auth Page 1</LinkRoute>
    </>
);
};
*/
