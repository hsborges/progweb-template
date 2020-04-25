import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./root.css";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Route path="/" component={App} exact={true} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
