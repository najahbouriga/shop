import {applyMiddleware, createStore} from "redux";
import thunk                          from "redux-thunk";
import {rootReducer}                  from "./reducers";
import {composeWithDevTools}          from "redux-devtools-extension";

// the store is the central state of the application.
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
