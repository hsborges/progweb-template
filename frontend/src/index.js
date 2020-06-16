import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Products from "./Components/Product/Product";
import "./root.css";
import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { Login } from "./Components/Login/Login";
import { ProductRegister } from "./Components/Product/ProductRegister/ProductRegister";
import { RegisterUser } from "./Components/RegisterUser/RegisterUser";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App} exact={true} />
    <Switch>
      <Route path="/produto/novo" component={ProductRegister} exact={true} />
      <Route path="/produto/:id" component={Products} exact={true} />
    </Switch>
    <Route path="/login" component={Login} exact={true} />
    <Route path="/cadastro" component={RegisterUser} exact={true} />
  </Router>,
  document.getElementById("root")
);
