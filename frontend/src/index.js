import React from "react";
import ReactDOM from "react-dom";
import AppHome from "./pages/AppHome/AppHome";
import Products from "./pages/Product/Product";
import "./root.css";
import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { Login } from "./pages/Login/Login";
import { ProductRegister } from "./pages/ProductRegister/ProductRegister";
import { RegisterUser } from "./pages/RegisterUser/RegisterUser";
import { Error } from "./pages/Error/Error";
import { User } from "./pages/User/User";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={AppHome} exact={true} />
    <Switch>
      <Route path="/produto/novo" component={ProductRegister} exact={true} />
      <Route path="/produto/:id" component={Products} exact={true} />
    </Switch>
    <Route path="/categoria/:category" component={AppHome} exact={true} />
    <Route path="/login" component={Login} exact={true} />
    <Route path="/usuario/:nick" component={User} exact={true} />
    <Route path="/conta" component={User} exact={true} />
    <Route path="/cadastro" component={RegisterUser} exact={true} />
    <Route path="/busca" component={AppHome} exact={true} />
    <Route path="/erro" component={Error} exact={true} />
  </Router>,
  document.getElementById("root")
);
