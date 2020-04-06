const express = require('express')
const routes = express.Router()
const UserController = require('./Controllers/UserController')
const CategoryController = require('./Controllers/CategoryController')
const RecipeController = require('./Controllers/RecipeController')


routes.post('/signin', UserController.create)
routes.post('/login', UserController.login)
routes.get('/users/index', UserController.index)

routes.post('/categories', CategoryController.create)
routes.get('/categories', CategoryController.index)
routes.delete('/categories/:id', CategoryController.delete)

routes.post('/recipes', RecipeController.create)
routes.get('/recipes', RecipeController.index)
routes.delete('/recipes/:id', RecipeController.delete)



module.exports = routes