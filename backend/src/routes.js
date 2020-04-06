const express = require('express')
const routes = express.Router()
const UserController = require('./Controllers/UserController')
const CategoryController = require('./Controllers/CategoryController')


routes.post('/signin', UserController.create)
routes.post('/login', UserController.login)
routes.get('/users/index', UserController.index)

routes.post('/categories', CategoryController.create)
routes.get('/categories', CategoryController.index)
routes.delete('/categories/:id', CategoryController.delete)





module.exports = routes