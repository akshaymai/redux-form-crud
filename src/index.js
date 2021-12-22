import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
// import Reducer from './reducers';
import { createStore, applyMiddleware, compose } from "redux";
import App from "./components/app";
import "./App.css";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
// const store = createStore(reducers, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
