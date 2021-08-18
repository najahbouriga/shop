import React        from 'react';
import Product      from './Product';
import {Link}       from "react-router-dom";
import {ROOT}       from '../../../navigation/CONSTANTS';
import {Typography} from '@material-ui/core';
import Grid         from '@material-ui/core/Grid';
import allActions   from '../../../redux/actions';
import {connect}    from 'react-redux';


class ProductList extends React.Component {

    componentDidMount() {
        this.props.dispatch(allActions.productsActions.fetchProducts());
    }

    render() {
        const {error, loading, products} = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        if (loading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Link to={ROOT}>Home</Link>
                <Typography variant="h2">Products List</Typography>
                <Grid container justify="center" spacing={3}>
                    {products.map(
                        (product) =>
                            <Grid key={product.id} item xs={3}>
                                <Product {...product}/>
                            </Grid>
                    )}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.products.loading,
    products: state.products.products,
    error: state.products.error
});
export default connect(mapStateToProps)(ProductList);
