import axios                                                  from 'axios'
import {GET_ALL_PRODUCT, GET_PRODUCT_BY_ID, GET_USER_DETAILS} from "./CONSTANTS";
import {SYSTEM_ERROR}                                         from "../config/CONSTANTS";


/**
 * Function to fetch all the Products.
 */
export const getAllProducts = () => {
    console.log("ProductsView Services > getAllProducts called...");
    return new Promise((resolve, reject) => {
        try {
            // do an SDK, DB call or API endpoint axios call here and return the promise.
            axios
                .get( GET_ALL_PRODUCT())
                .then((res) => {
                    console.log("getAllProducts > axios res=", res);
                    resolve(res.data);
                })
                .catch((err) => {
                    console.log("getAllProducts > axios err=", err);
                    reject("Error in getAllProducts axios!");
                });
        } catch (error) {
            console.error("in getAllProducts > getAllProducts, Err===", error);
            reject(SYSTEM_ERROR);
        }
    });
};

/**
 * Function to fetch the details of the product based on productId.
 * @param {string} productId of the product.
 * early dev example passing Skeleton(static object) as API response.
 */
export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            // do an SDK, DB call or API endpoint axios call here and return the promise.
            axios
                .get(GET_PRODUCT_BY_ID(id))
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject("Error in getProductDetails axios!");
                });
        } catch (error) {
            reject(SYSTEM_ERROR);
        }
    });
};

