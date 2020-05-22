const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserController");

const isAuthenticated = (req, res, next) => {
  // TODO: Gerar token e salvar no login, verificar usuario e token a cada requisição
  if (req.query.token === "xyz123") {
    next();
  } else {
    res.json({
      error: "You shall not pass!",
    });
  }
};

routes.get("/products", ProductController.index);
routes.post("/products", isAuthenticated, ProductController.store);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", isAuthenticated, ProductController.update);
routes.delete("/products/:id", isAuthenticated, ProductController.destroy);

routes.post("/users", UserController.store);
routes.get("/users/:nick", UserController.show);
routes.put("/users/:id", isAuthenticated, UserController.update);
routes.post("/login", UserController.login);

module.exports = routes;
