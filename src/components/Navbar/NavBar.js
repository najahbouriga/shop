import React, {useEffect}         from 'react';
import AppBar                     from '@material-ui/core/AppBar';
import Toolbar                    from '@material-ui/core/Toolbar';
import IconButton                 from '@material-ui/core/IconButton';
import Typography                 from '@material-ui/core/Typography';
import Badge                      from '@material-ui/core/Badge';
import StorefrontIcon             from '@material-ui/icons/Storefront';
import {ShoppingCart}             from "@material-ui/icons";
import {useStyles}                from "./style";
import {Link, withRouter}         from "react-router-dom";
import Search                     from "./components/search";
import {useDispatch, useSelector} from "react-redux";
import allActions                 from "../../redux/actions";

const selectAmount = (state) => state.cart.amount;
const selectCart = (state) => state.cart.cart;

const NavBar = () => {
    const classes = useStyles();
    const amount = useSelector(selectAmount);
    const location = window.location.pathname
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);

    useEffect(() => {
        dispatch(allActions.cartActions.getTotals());
    }, [cart, dispatch]);


    return (
        <div className={classes.grow}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        edge="start"
                        component={Link} to="/"
                        color="inherit"
                        aria-label="open drawer">
                        <StorefrontIcon/>
                    </IconButton>
                    <Typography
                        className={classes.title} variant="h6" noWrap>
                        Store </Typography>
                    {location === '/' && <Search/>}
                    <div className={classes.grow}/>
                    <IconButton component={Link} to="/cart"
                                color="inherit">
                        <Badge badgeContent={amount}
                               color="secondary"
                               showZero>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default withRouter(NavBar);
