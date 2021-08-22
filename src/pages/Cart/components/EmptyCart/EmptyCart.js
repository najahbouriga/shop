import {Button, Paper, Typography} from '@material-ui/core';
import NextWeekIcon                from '@material-ui/icons/NextWeek';
import {Link}                      from 'react-router-dom';
import useStyles                   from './styles';
import React                       from "react";

/* This page is shown when the user clicks on the basket, and it is empty */

const EmptyCart = () => {
    const classes = useStyles();
    const image = 'https://www.jumia.com.tn/images/oshun/cart/empty-cart.png'
    return (
        <Paper elevation={0} className={classes.paper}>
            <img src={image} alt=""/>

            <Typography variant="h6">
                Your basket is empty !
            </Typography>


            <Button
                component={Link}
                to="/"
                size="large"
                type="button"
                variant="contained"
                color="primary"
                startIcon={<NextWeekIcon/>}
                aria-label="Go to products page"
                className={classes.link}
            >
                Start adding some!
            </Button>
        </Paper>
    );
};

export default EmptyCart;
