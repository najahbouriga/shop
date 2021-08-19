import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {ShoppingCart} from "@material-ui/icons";
import {useStyles} from "./style";
import {Link} from "react-router-dom";


const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        component={Link} to="/"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer">
                        <StorefrontIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Store
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }} inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default NavBar;
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
