import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Products from "./Components/Product/Product";
import "./root.css";
import {Route, Router} from "react-router";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Route path="/" component={App} exact={true} />
      <Route path="/produto" component={Products} exact={true} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
