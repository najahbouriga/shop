import React, {useEffect, useState} from "react";
import {getAllProducts}             from "../../services";
import ProductsView                 from "./ProductsView";

export const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
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


    return (
        <div>
            <ProductsView/>
            {isLoading ? <span> No product List</span> :
                <div>{JSON.stringify(products)} </div>
            }
        </div>
    );
};
