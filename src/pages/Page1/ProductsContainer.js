import React, {useEffect} from 'react';
import ProductsView from './ProductsView';
import {useDispatch} from 'react-redux';
import allActions from '../../redux/actions';

export const ProductsContainer = () => {

    const dispatch = useDispatch();
    useEffect(() => dispatch(allActions.productsActions.fetchProducts()), [
        dispatch,
    ]);


    /*  const [products, setProducts] = useState([]);
      const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
          setIsLoading(true);
          getAllProducts()
              .then((res) => {
                  console.log("ProductsView > getAllProducts > res=", res);
                  setProducts(res);
                  setIsLoading(false);
              })
              .catch((err) => {
                  console.log("axios err=", err);
                  setProducts([]);
                  setIsLoading(false);
              });

          return () => {
              console.log("axios cleanup.");
          };
      }, []);
  */

    return (
        <div>
            <ProductsView/>
        </div>
    );
};
