import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import createHistory from "history/createBrowserHistory";

import thunk from "redux-thunk";
import persistState from "redux-localstorage";
import loggingMiddleware from "./middleware/loggingMiddleware";

import reducers from "./reducers"; // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    ...reducers
  }),
  composeEnhancers(applyMiddleware(thunk, loggingMiddleware))
);
