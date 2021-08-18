import React       from 'react';
import ProductItem from './components/ProductItem/ProductItem';
import Grid        from '@material-ui/core/Grid';
import allActions  from '../../redux/actions';
import {connect}   from 'react-redux';
import {NavBar}    from "../../components/Navbar/NavBar";
import Container   from "@material-ui/core/Container";
import useStyles   from './styles';


class ProductList extends React.Component {

    componentDidMount() {
        this.props.dispatch(allActions.productsActions.fetchProducts());
    }

    render() {
        const classes = useStyles;
        const {error, loading, products} = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        if (loading) {
            return <div>Loading...</div>;
        }
        return (
            <Container maxWidth="lg" className={classes.container}>

                <Grid container justify="center" spacing={3}>
                    {products.map(
                        (product) =>
                            <Grid key={product.id} item xs={3}>
                                <ProductItem {...product}/>
                            </Grid>
                    )}
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.products.loading,
    products: state.products.products,
    error: state.products.error
});
export default connect(mapStateToProps)(ProductList);
