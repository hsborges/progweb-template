const express = require('express')
const routes = express.Router()
const UserController = require('./Controllers/UserController')
const CategoryController = require('./Controllers/CategoryController')
const FolderController = require('./Controllers/FolderController')


routes.post('/signin', UserController.create)
routes.post('/login', UserController.login)
routes.get('/users/index', UserController.index)

routes.post('/categories', CategoryController.create)
routes.get('/categories', CategoryController.index)
routes.delete('/categories/:id', CategoryController.delete)

routes.post('/recipes', RecipeController.create)
routes.get('/recipes', RecipeController.index)
routes.delete('/recipes/:id', RecipeController.delete)

routes.post('/folders', FolderController.create)
routes.get('/folders', FolderController.index)
routes.delete('/folders/:id', FolderController.delete)
routes.push('folder_content', FolderController.recipeOnFolder)


module.exports = routes