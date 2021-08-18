import React                                from 'react';
import {connect}                            from "react-redux";
import {Link}                               from "react-router-dom";
import {PRODUCTS}                           from "../../../navigation/CONSTANTS";
import {Button, Grid}                       from "@material-ui/core"
import {makeStyles}                         from "@material-ui/core/styles";
import {AddShoppingCart, KeyboardArrowLeft} from "@material-ui/icons";
import CardMedia                            from "@material-ui/core/CardMedia";
/* this page is shown when the user clicks at the img of a product */

const useStyles = makeStyles((theme) => ({
    root: {
        width: "70%",
        margin: "auto",
    },

    txt: {
        textAlign: "justify",
    },
    btn: {
        margin: theme.spacing.unit,
    },
    made: {
        textTransform: "uppercase",
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain',
    },
}));

const DetailProduct = (props) => {
    const classes = useStyles();
    const product = props.products.filter(product =>
        product.id === Number(props.match.params.id))[0]
    const {category, image, description, price, title,} = product
    const urlImage = 'https://res.cloudinary.com/caioviski/image/upload/dpr_auto,f_auto,fl_lossy,q_auto/v1563301880/product-3_ldtaes.jpg'

    return (

        <div>
            <Link to={PRODUCTS}>Products</Link>

            <Grid container direction="row" align="center" alignItems="center" justify="center"
                  className={classes.root}>
                <Grid item xs={12}>
                    <h1>{title}</h1>
                </Grid>
                <Grid item xs={6} className={classes.img}>

                    <CardMedia
                        className={classes.cardMedia}
                        image={image}/>


                    {/*<img src={image} alt="product"/>*/}
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
                        onClick={() => {
                            console.log('props.dispatch(addProductToCart(product))')
                        }}
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
const mapStateToProps = state => ({
    loading: state.products.loading,
    products: state.products.products,
    error: state.products.error
});
export default connect(mapStateToProps)(DetailProduct)
