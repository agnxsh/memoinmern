import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
//allows access to any state from any other subpart of the code-base
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import reducers from "./reducers";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
