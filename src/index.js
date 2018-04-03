import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import App from "./components/App";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";

import thunk from "redux-thunk";

import reducers from "./reducers"; // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancers(applyMiddleware(middleware, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
