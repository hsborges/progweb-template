const express = require("express");
const mongoose = require("mongoose");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const ProductImageController = require("./controllers/ProductImageController");
const UserController = require("./controllers/UserController");
const User = mongoose.model("User");

const isAuthenticated = async (req, res, next) => {
  const [token, userId] = req.query.token.split(".");
  const user = await User.findById(userId).select("+lastToken");

  if (
    token === user.lastToken &&
    (userId === req.params.id || user.nickname === req.body.seller)
  ) {
    next();
  } else {
    console.log(`Forbidden! User: ${user.name} | Token: ${token}`);
    res.status(403).json({
      error: "You shall not pass!",
    });
  }
};
/* Product*/
routes.get("/products", ProductController.index);
routes.post("/products", isAuthenticated, ProductController.store);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", isAuthenticated, ProductController.update);
routes.delete("/products/:id", isAuthenticated, ProductController.destroy);

/* Upload */
routes.post("/images/", isAuthenticated, ProductImageController.upload);
routes.delete("/images/:id", isAuthenticated, ProductImageController.destroy);

/* User */
routes.post("/users", UserController.store);
routes.get("/users/:nick", UserController.show);
routes.put("/users/:id", isAuthenticated, UserController.update);
routes.post("/login", UserController.login);
routes.post("/logout", isAuthenticated, UserController.logout);

module.exports = routes;
