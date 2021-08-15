import {API_END, API_START, FETCH_ARTICLE_DETAILS, SET_ARTICLE_DETAILS} from '../actions/types';

export const productReducer = (state = {}, action) => {
    console.log("action type => ", action.type);
    switch (action.type) {
        case SET_ARTICLE_DETAILS:
            return {data: action.payload};
        case API_START:
            if (action.payload === FETCH_ARTICLE_DETAILS) {
                return {
                    ...state,
                    isLoadingData: true
                };
            }
            break;
        case API_END:
            if (action.payload === FETCH_ARTICLE_DETAILS) {
                return {
                    ...state,
                    isLoadingData: false
                };
            }
            break;
        default:
            return state;
    }
}
