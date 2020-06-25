const express = require("express");
const mongoose = require("mongoose");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const ProductImageController = require("./controllers/ProductImageController");
const UserController = require("./controllers/UserController");
const User = mongoose.model("User");
const Product = mongoose.model("Product");

const isAuthenticated = async (req, res, next) => {
  const [token, userId] = req.query.token.split(".");
  const user = await User.findById(userId).select("+lastToken");

  let isOwner = false;
  if (
    req.path.includes("/products") &&
    (req.method === "PUT" || req.method === "DELETE")
  ) {
    const product = await Product.findById(req.params.id);
    isOwner = product.seller === user.nickname;
  }

  const isUser =
    userId === req.params.id ||
    user.nickname === req.body.seller ||
    user.email === req.body.email ||
    req.path.includes("/images") ||
    isOwner;

  if (token === user.lastToken && isUser) {
    next();
  } else {
    console.log(`Forbidden! User: ${user.name} | Token: ${token}`);
    res.status(403).json({
      success: false,
      message: "You shall not pass!",
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
routes.post("/images", isAuthenticated, ProductImageController.upload);

/* User */
routes.post("/users", UserController.store);
routes.get("/users/:nick", UserController.show);
routes.put("/users/:id", isAuthenticated, UserController.update);
routes.post("/login", UserController.login);
routes.post("/logout", isAuthenticated, UserController.logout);

module.exports = routes;
