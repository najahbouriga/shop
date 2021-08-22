import React                                from 'react';
import {useDispatch, useSelector}           from "react-redux";
import {Link}                               from "react-router-dom";
import {Button, Grid}                       from "@material-ui/core"
import {AddShoppingCart, KeyboardArrowLeft} from "@material-ui/icons";
import CardMedia                            from "@material-ui/core/CardMedia";
import {useStyles}                          from "./styles";
import allActions                           from "../../../../redux/actions";

/*this component display all the details related to the selected product */


const selectProducts = (state) => state.products.products;

const DetailProduct = (props) => {

    const classes = useStyles();
    /*
   * useDispatch returns a reference to the dispatch
   *  function from the Redux store.
   * to dispatch actions as needed.
   */
    const dispatch = useDispatch();
    /*
    * useSelector function
    * Allows extracting products data from
    *  the Redux store state
     */
    const products = useSelector(selectProducts);


    const product = products.filter(product =>
        product.id === Number(props.match.params.id))[0]
    const {id, category, image, description, price, title, qty} = product

    return (
        <div>
            <Grid container direction="row" align="center" alignItems="center" justify="center"
                  className={classes.root}>
                <Grid item xs={12}>
                    <h1>{title}</h1>
                </Grid>
                <Grid item xs={6} className={classes.img}>

                    <CardMedia
                        className={classes.cardMedia}
                        image={image}/>
                </Grid>
                <Grid item xs={6} className={classes.txt}>
                    <h2 className={classes.made}>CATEGORY: {category}</h2>
                    <h3>Price: ${price}</h3>
                    <p>
                        {" "}
                        <strong>Some Info About the Product: </strong>
                    </p>
                    <p>{description}</p>
                    <Button component={Link} to="/" variant="contained" className={classes.btn}>
                        <KeyboardArrowLeft/>
                        Back to Store
                    </Button>
                    <Button
                        onClick={() =>
                            dispatch(
                                allActions.cartActions.addToCart(
                                    id, title, price, description, category, image, qty
                                ))
                        }
                        variant="contained"
                        color="primary"
                        className={classes.btn}
                    >
                        Add to cart
                        <AddShoppingCart/>
                    </Button>
                </Grid>
            </Grid>
        </div>

    );
}
export default DetailProduct
