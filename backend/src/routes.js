const express = require('express')
const routes = express.Router()
const UserController = require('./Controllers/UserController')


routes.post('/singin', UserController.create)
routes.post('/login', UserController.login)
routes.get('/users/index', UserController.index)



module.exports = routes