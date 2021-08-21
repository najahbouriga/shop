import React       from 'react'
import Grid        from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography';
import {useStyles} from "../CartItem/styles";

const CartProductHeader = () => {
    const classes = useStyles();
    return (
        <Grid
            className={classes.itemsHeader}
            container
            spacing={16}
            alignItems='center'
        >
            <Grid item className={classes.grow}>
                <Typography>
                    Item
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Grid container spacing={16} alignItems='center' justify='space-between'>
                    <Grid item className={classes.headerGridItem}>
                        <Typography>
                            Qty
                        </Typography>
                    </Grid>
                    <Grid item className={classes.headerGridItem}>
                        <Typography>
                            Price
                        </Typography>
                    </Grid>
                    <Grid item className={classes.headerGridItem}>
                        <Typography>
                            Remove
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default CartProductHeader;
