import {DISPLAY_ITEMS, ERROR, LOADING, SEARCH_VALUE} from '../actions/types';

const initialProductState = {
    loading: false,
    products: [],
    error: null,
    query: '',
};


export const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: true, error: null};
        case DISPLAY_ITEMS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case ERROR:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload,
            };
        case SEARCH_VALUE:
            return {...state, query: action.payload};
        default:
            return state;
    }
}
