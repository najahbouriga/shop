import axios             from 'axios'
import {GET_ALL_PRODUCT} from "./CONSTANTS";
import {SYSTEM_ERROR}    from "../config/CONSTANTS";


/**
 * Function to fetch all the users.
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
