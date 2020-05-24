import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Products from "./Components/Product/Product";
import "./root.css";
import { Route, Router } from "react-router";
import { createBrowserHistory } from "history";
import { Login } from "./Components/Login/Login";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Route path="/" component={App} exact={true} />
      <Route path="/produto" component={Products} exact={true} />
      <Route path="/produto/:id" component={Products} exact={true} />
      <Route path="/login" component={Login} exact={true} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
