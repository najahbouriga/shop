import React from 'react';
import Product from './Product';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ROOT} from "../../navigation/CONSTANTS";
import {Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const selectProducts = (state) => state.products.products;

export const Products = () => {
    const products = useSelector(selectProducts);
    console.log('products', products)

    return (
        <div>
            <Link to={ROOT}>Home</Link>
            <Typography variant="h2">Products List</Typography>
            <Grid container justify="center" spacing={3}>
                {products.map(
                    (product) =>
                        <Grid key={product.id} item xs={12} sm={6} lg={4}>
                            <Product {...product}/>
                        </Grid>
                )}
            </Grid>
        </div>
    );
};
