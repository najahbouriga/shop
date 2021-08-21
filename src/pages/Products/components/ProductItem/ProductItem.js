import React             from "react";
import Card              from "@material-ui/core/Card";
import CardMedia         from "@material-ui/core/CardMedia";
import CardContent       from "@material-ui/core/CardContent";
import Typography        from "@material-ui/core/Typography";
import CardActions       from "@material-ui/core/CardActions";
import Button            from "@material-ui/core/Button";
import {AddShoppingCart} from "@material-ui/icons";
import {Link}            from "react-router-dom";
import {useDispatch}     from "react-redux";
import allActions        from "../../../../redux/actions";
import {useStyles}       from "./styles";


const ProductItem = ({id, title, price, description, category, image, qty}) => {
    const classes = useStyles();
    const dispatch = useDispatch();


    return (

        <Card className={classes.card}>
            <Link to={`/detail/${id}`}>
                <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title={title}/>
            </Link>

            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography variant="h6">
                    Price :{price}$
                </Typography>
            </CardContent>

            <CardActions disableSpacing className={classes.cardAction}>
                <Button size="large"
                        onClick={() =>
                            dispatch(
                                allActions.cartActions.addToCart(
                                    id, title, price, description, category, image, qty
                                ))
                        }
                        variant="contained"
                        color="primary"
                        className={classes.btn}>
                    Add to cart &nbsp;&nbsp;
                    <AddShoppingCart/>
                </Button>
            </CardActions>
        </Card>
    )
        ;
};

export default ProductItem;
