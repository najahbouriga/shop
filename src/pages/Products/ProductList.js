import ProductItem                from './components/ProductItem/ProductItem';
import Grid                       from '@material-ui/core/Grid';
import allActions                 from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles}                from "./styles";
import CircularProgress           from "@material-ui/core/CircularProgress";
import Backdrop                   from '@material-ui/core/Backdrop';
import React, {useEffect}         from 'react';
import Button                     from "@material-ui/core/Button";
import {Link}                     from "react-router-dom";
import {TABLE}                    from "../../navigation/CONSTANTS";

const selectLoading = (state) => state.products.loading;
const selectProducts = (state) => state.products.products;
const selectError = (state) => state.products.error;
const selectQuery = (state) => state.products.query;

/*this component display all products */


const ProductList = () => {
    const classes = useStyles;
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const products = useSelector(selectProducts);
    const query = useSelector(selectQuery);
    const error = useSelector(selectError);

    // query
    const queryMatch = (product) => product.title.toLowerCase().includes(query.toLowerCase());

    useEffect(() => {
        dispatch(allActions.productsActions.fetchProducts())
    }, [dispatch]);

    if (error) {
        return <div>Error! {error.message}</div>;
    }
    if (loading) {
        return (
            <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit"/>
            </Backdrop>
        )
    }
    return (

        <div className={classes.root}>
            <Button component={Link} to={TABLE} variant="contained" className={classes.btn}>
                go to product table
            </Button>


            <Grid container justify="center" spacing={3}>
                {products.map(
                    (product) =>
                        queryMatch(product) && (
                            <Grid key={product.id} item xs={12} sm={4} lg={3}>
                                <ProductItem {...product}/>
                            </Grid>
                        ))
                }
            </Grid>
        </div>

    );
}

export default ProductList;
