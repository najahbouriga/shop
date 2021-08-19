import React       from 'react';
import ProductItem from './components/ProductItem/ProductItem';
import Grid        from '@material-ui/core/Grid';
import allActions  from '../../redux/actions';
import {connect}   from 'react-redux';
import {NavBar}    from "../../components/Navbar/NavBar";
import Container   from "@material-ui/core/Container";
import {useStyles} from "./styles";


class ProductList extends React.Component {

    componentDidMount() {
        this.props.dispatch(allActions.productsActions.fetchProducts());
    }

    render() {
        const classes = useStyles;
        console.log('container', classes);
        const {error, loading, products} = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        if (loading) {
            return <div>Loading...</div>;
        }
        return (
            <div className={classes.root}>
                <Grid container justify="center" spacing={3}>
                    {products.map(
                        (product) =>
                            <Grid key={product.id} item xs={12} sm={4} lg={3}>
                                <ProductItem {...product}/>
                            </Grid>
                    )}
                </Grid>
            </div>);
    }
}

const mapStateToProps = state => ({
    loading: state.products.loading,
    products: state.products.products,
    error: state.products.error
});
export default connect(mapStateToProps)(ProductList);
