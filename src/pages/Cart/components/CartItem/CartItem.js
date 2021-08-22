import React                      from 'react';
import {useDispatch, useSelector} from "react-redux";
import Grid                       from "@material-ui/core/Grid";
import Avatar                     from "@material-ui/core/Avatar";
import ListItemText               from "@material-ui/core/ListItemText";
import Typography                 from "@material-ui/core/Typography";
import {useStyles}                from "./styles";
import IconButton                 from "@material-ui/core/IconButton";
import DeleteIcon                 from '@material-ui/icons/Delete';
import CartProductHeader          from "../CartItemHeader/CartItemHeader";
import allActions                 from "../../../../redux/actions";
import AddCircleOutlineIcon       from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon    from '@material-ui/icons/RemoveCircleOutline';
import Button                     from "@material-ui/core/Button";
import Link                       from "@material-ui/core/Link";
import NextWeekIcon               from '@material-ui/icons/NextWeek';

const selectCart = (state) => state.cart.cart;
const selectTotalPrice = (state) => state.cart.totalPrice;

const CartItem = () => {
    const cart = useSelector(selectCart);
    const totalPrice = useSelector(selectTotalPrice);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <paper>
            <CartProductHeader/>
            {cart.map(
                (item) =>
                    <Grid className={classes.itemWrapper} container spacing={16} alignItems='center'>
                        <Grid className={classes.item}>
                            <Avatar
                                src={item.image}
                                className={classes.avatar}
                            />
                        </Grid>
                        <Grid className={classes.grow}>
                            <ListItemText
                                primary={item.title}
                                secondary={item.category}
                            />
                        </Grid>
                        <Grid xs={12} md={4}>
                            <Grid container spacing={16} alignItems='center' justify='space-between'>
                                <Grid>

                                    <IconButton
                                        disabled={item.qty <= 1}
                                        onClick={() => dispatch(allActions.cartActions.decrease(item.id))}
                                    >
                                        <RemoveCircleOutlineIcon/>
                                    </IconButton>
                                    {item.qty}

                                    <IconButton onClick={() => dispatch(allActions.cartActions.increase(item.id))}
                                    ><AddCircleOutlineIcon/>
                                    </IconButton>

                                </Grid>
                                <Grid>
                                    <Typography>
                                        {item.price}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <IconButton
                                        onClick={() => dispatch(allActions.cartActions.removeItem(item.id))}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
            )
            }
            <div className={classes.CartFooter}>
                <Typography variant="h5" className={classes.CartFooterTotal}>
                    Subtotal: <strong>{totalPrice}&nbsp;€</strong>
                </Typography>
                <div className={classes.CartFooterButton}>


                    <Button
                        type="button"
                        size="small"
                        variant="contained"
                        onClick={() => dispatch(allActions.cartActions.clearCart())}
                        startIcon={<DeleteIcon/>}
                        aria-label="Clear the cart">
                        Empty cart
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                        size="small"
                        component={Link}
                        to="/"
                        type="button"
                        variant="contained"
                        color="primary"
                        startIcon={<NextWeekIcon/>}
                        aria-label="Proceed to checkout"
                    >
                        Checkout
                    </Button>
                </div>
            </div>

        </paper>

    )

};

export default CartItem;
