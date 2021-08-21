import React                      from 'react';
import {useDispatch, useSelector} from "react-redux";
import Grid                       from "@material-ui/core/Grid";
import Avatar                     from "@material-ui/core/Avatar";
import ListItemText               from "@material-ui/core/ListItemText";
import TextField                  from "@material-ui/core/TextField";
import Button                     from "@material-ui/core/Button";
import Typography                 from "@material-ui/core/Typography";
import {useStyles}                from "./styles";
import IconButton                 from "@material-ui/core/IconButton";
import DeleteIcon                 from '@material-ui/icons/Delete';
import CartProductHeader          from "../CartItemHeader/CartItemHeader";
import allActions                 from "../../../../redux/actions";

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
                                    <TextField
                                        className={classes.textField}
                                        inputProps={{
                                            min: 1,
                                            max: 10,
                                            style: {textAlign: 'center'}
                                        }}
                                        margin='dense'
                                        type='number' defaultValue={item.qty}
                                    />
                                    <div className={classes.deleteButton}>
                                        <Button size='small'
                                                onClick={() =>
                                                    dispatch(allActions
                                                        .cartActions.increase(item.id))}>
                                            Update
                                        </Button>
                                    </div>
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
            Subtotal: <strong>{totalPrice}&nbsp;€</strong>
        </paper>

    )

};

export default CartItem;
