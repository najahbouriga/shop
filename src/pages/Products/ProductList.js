import React            from 'react';
import ProductItem      from './components/ProductItem/ProductItem';
import Grid             from '@material-ui/core/Grid';
import allActions       from '../../redux/actions';
import {connect}        from 'react-redux';
import {NavBar}         from "../../components/Navbar/NavBar";
import {useStyles}      from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop         from '@material-ui/core/Backdrop';


class ProductList extends React.Component {

    componentDidMount() {
        this.props.dispatch(allActions.productsActions.fetchProducts());
    }

    render() {
        const classes = useStyles;
        const {error, loading, products, query} = this.props;

        // query
        const queryMatch = (product) =>
            product.title.toLowerCase().includes(query.toLowerCase());

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
}

const mapStateToProps = state => ({
    loading: state.products.loading,
    products: state.products.products,
    error: state.products.error,
    query: state.products.query

});
export default connect(mapStateToProps)(ProductList);
