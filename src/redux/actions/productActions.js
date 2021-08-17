import {DISPLAY_ITEMS, ERROR, LOADING, SEARCH_VALUE} from "./types";


const BASE_URL = process.env.REACT_APP_BASE_URL;

const setSearchValue = (searchValue) => ({
    type: SEARCH_VALUE,
    payload: searchValue,
});

const fetchProducts = () => async (dispatch, getState) => {
    dispatch({type: LOADING});
    try {
        const response = await fetch(`${BASE_URL}products`);
        const data = await response.json();
        dispatch({type: DISPLAY_ITEMS, payload: data});
    } catch (error) {
        dispatch({type: ERROR, payload: error});
    }
};
const productsActions = {fetchProducts, setSearchValue};
export default productsActions;
