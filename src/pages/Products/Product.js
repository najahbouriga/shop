import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import {AddShoppingCart} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',

    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain',
    },
    cardContent: {
        flexGrow: 1,
    }
}));
const Product = ({id, title, price, description, category, image, qty}) => {
    const classes = useStyles();

    return (
        <Link to={`/details/${id}`}>
            <Card className={classes.card}
                  onClick={() => console.log('doultiiiiiiiiiiiiiiiii')}>

                <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title={title}

                />

                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography>
                        {price}$
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                    <IconButton
                        aria-label="Add to Cart"
                        onClick={() => console.log('button clicked')}>
                        <Typography variant="button" display="block" color="textPrimary">
                            Add to cart
                        </Typography>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        </Link>
    )
        ;
};

export default Product;
