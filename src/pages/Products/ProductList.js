import React                  from 'react';
import ProductItem            from './components/ProductItem/ProductItem';
import Grid                   from '@material-ui/core/Grid';
import allActions             from '../../redux/actions';
import {connect}              from 'react-redux';
import {NavBar}               from "../../components/Navbar/NavBar";
import {useStyles}            from "./styles";
import CircularProgress       from "@material-ui/core/CircularProgress";
import Alert                  from '@material-ui/lab/Alert';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


class ProductList extends React.Component {

    componentDidMount() {
        this.props.dispatch(allActions.productsActions.fetchProducts());
    }

    componentDidUpdate() {
        console.log('douuuuuuuuu');
        setTimeout(
            () => this.props.dispatch(allActions.cartActions.clearAlert()),
            5000
        );
    }

    render() {
        const classes = useStyles;
        const {error, loading, products, query, alert} = this.props;
        // query
        const queryMatch = (product) =>
            product.title.toLowerCase().includes(query.toLowerCase());

        if (error) {
            return <div>Error! {error.message}</div>;
        }
        if (loading) {
            return <CircularProgress variant="determinate" value={100}/>;
        }
        return (
            <div className={classes.root}>
                {alert.show && <Alert iconMapping={{success: <CheckCircleOutlineIcon fontSize="inherit"/>}}>
                    {alert.msg}
                </Alert>
                }

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
            </div>);
    }
}

const mapStateToProps = state => ({
    loading: state.products.loading,
    products: state.products.products,
    alert: state.cart.alert,
    error: state.products.error,
    query: state.products.query

});
export default connect(mapStateToProps)(ProductList);
